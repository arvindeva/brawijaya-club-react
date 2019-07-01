import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (typeof window === 'undefined') {
  (global as any).fetch = fetch;
}

function create(
  initialState: any,
  { getToken, fetchOptions }: { getToken: any; fetchOptions: any }
) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
    fetchOptions,
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        cookie: token ? `token=${token}` : '',
      },
    };
  });

  const isBrowser = typeof window !== 'undefined';
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState: any, options: any) {
  if (typeof window === 'undefined') {
    let fetchOptions = {};

    return create(initialState, {
      ...options,
      fetchOptions,
    });
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
