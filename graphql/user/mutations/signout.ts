import { gql } from 'apollo-boost';

export const SIGNOUT_MUTATION = gql`
  mutation SignOut {
    signOut
  }
`;
