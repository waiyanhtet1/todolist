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

export const GET_USER_ID = gql`
  query GET_USER_ID($email: String!) {
    user_aggregate(where: { email: { _eq: $email } }) {
      nodes {
        id
      }
    }
  }
`;
