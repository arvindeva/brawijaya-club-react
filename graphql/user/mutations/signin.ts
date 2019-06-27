import { gql } from 'apollo-boost';

export const SIGNIN_MUTATION = gql`
  mutation SignIn($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`;
