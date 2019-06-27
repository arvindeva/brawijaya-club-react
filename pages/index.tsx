import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import {
  SignInComponent,
  SignOutComponent,
} from '../generated/apolloComponents';
import { ME_QUERY } from '../graphql/user/queries/me';
import Leaderboards from '../components/Leaderboards';

const Button = styled.button`
  color: white;
  background: #ff403a;
  border: none;
  border-radius: 0.4rem;
  font-family: 'Helvetica', 'Source Sans Pro', sans-serif;
  padding: 1rem;
  font-size: 1rem;
  margin: 1rem;
  cursor: pointer;
`;

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Leaderboards />
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
            Call SignIn mutation
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
            Call SignOut mutation
          </Button>
        )}
      </SignOutComponent>
    </Layout>
  );
};

export default IndexPage;
