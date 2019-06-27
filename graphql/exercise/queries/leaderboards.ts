import { gql } from 'apollo-boost';

export const LEADERBOARDS_QUERY = gql`
  query Leaderboards {
    leaderboards(name: "bench") {
      id
      name
      sets
      reps
      weight
      user {
        id
        username
      }
    }
  }
`;
