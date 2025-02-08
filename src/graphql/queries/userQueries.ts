import { gql } from "@apollo/client";

export const GET_IS_USER_EXIT = gql`
  query GET_IS_USER_EXIT($email: String!) {
    user_aggregate(where: { email: { _eq: $email } }) {
      aggregate {
        count
      }
    }
  }
`;
