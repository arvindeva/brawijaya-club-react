import * as React from 'react';
import { gql } from 'apollo-boost';
import { NextPage } from 'next';
import { Query } from 'react-apollo';

import Layout from '../components/Layout';
import {
  SignInComponent,
  SignOutComponent
} from '../generated/apolloComponents';

const ME_QUERY = gql`
  query {
    me {
      id
      username
    }
  }
`;

interface Data {
  me: {
    id: number;
    username: string;
  };
}

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <Query<Data> query={ME_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading</p>;
          if (error) return <p>error</p>;
          return (
            <h1>Hi, {data && data.me ? data.me.username : 'please sign in'}</h1>
          );
        }}
      </Query>
      <SignInComponent refetchQueries={[{ query: ME_QUERY }]}>
        {signIn => (
          <button
            onClick={async () => {
              const response = await signIn({
                variables: { login: 'arvindeva', password: 'arvindeva' }
              });
              console.log(response);
            }}
          >
            Call login mutation
          </button>
        )}
      </SignInComponent>
      <SignOutComponent refetchQueries={[{ query: ME_QUERY }]}>
        {signOut => (
          <button
            onClick={async () => {
              const response = await signOut();
              console.log(response);
            }}
          >
            Call signout mutation
          </button>
        )}
      </SignOutComponent>
    </Layout>
  );
};

export default IndexPage;
