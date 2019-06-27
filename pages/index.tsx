import * as React from 'react';
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
      <Query<Data> query={ME_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading</p>;
          if (error) return <p>error</p>;
          return (
            <h1>Hi, {data && data.me ? data.me.username : 'please sign in'}</h1>
          );
        }}
      </Query>
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
    </Layout>
  );
};

export default IndexPage;
