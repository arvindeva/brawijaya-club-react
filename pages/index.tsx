import * as React from 'react';
import Link from 'next/link';
import { gql } from 'apollo-boost';
import { NextPage } from 'next';
import { Mutation, Query } from 'react-apollo';

import Layout from '../components/Layout';

const SIGNIN_MUTATION = gql`
  mutation {
    signIn(login: "arvindeva", password: "arvindeva") {
      token
    }
  }
`;

const SIGNOUT_MUTATION = gql`
  mutation {
    signOut
  }
`;

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
      <h1>Hi 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Mutation
        mutation={SIGNIN_MUTATION}
        refetchQueries={[{ query: ME_QUERY }]}
      >
        {(signIn: any) => (
          <button
            onClick={async () => {
              const response = await signIn();
              console.log(response);
            }}
          >
            Call login mutation
          </button>
        )}
      </Mutation>
      <Mutation
        mutation={SIGNOUT_MUTATION}
        refetchQueries={[{ query: ME_QUERY }]}
      >
        {(signOut: any) => (
          <button
            onClick={async () => {
              const response = await signOut();
              console.log(response);
            }}
          >
            Call signout mutation
          </button>
        )}
      </Mutation>
      <Query<Data> query={ME_QUERY}>
        {({ data }: { data: any }) => {
          return <p>{data.me ? data.me.username : 'please sign in'}</p>;
        }}
      </Query>
    </Layout>
  );
};

export default IndexPage;
