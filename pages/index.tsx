import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import {
  SignInComponent,
  SignOutComponent,
  MeComponent,
} from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';

const Button = styled.button`
  color: red;
`;

const IndexPage = () => {
  return (
    <Layout title="Home">
      <MeComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>loading</p>;
          if (error) return <p>error</p>;
          return (
            <h1>Hi, {data && data.me ? data.me.username : 'please sign in'}</h1>
          );
        }}
      </MeComponent>
      <SignInComponent refetchQueries={[{ query: ME_QUERY }]}>
        {signIn => (
          <Button
            onClick={async () => {
              const response = await signIn({
                variables: { login: 'arvindeva', password: 'arvindeva' },
              });
              console.log(response);
            }}
          >
            Call login mutation
          </Button>
        )}
      </SignInComponent>
      <SignOutComponent refetchQueries={[{ query: ME_QUERY }]}>
        {signOut => (
          <Button
            onClick={async () => {
              const response = await signOut();
              console.log(response);
            }}
          >
            Call signout mutation
          </Button>
        )}
      </SignOutComponent>
    </Layout>
  );
};

export default IndexPage;
