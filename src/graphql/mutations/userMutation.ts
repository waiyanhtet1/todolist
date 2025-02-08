import { gql } from "@apollo/client";

export const INSERT_USER = gql`
  mutation INSERT_USER($name: String!, $email: String!, $picture: String) {
    insert_user(objects: { name: $name, email: $email, picture: $picture }) {
      affected_rows
    }
  }
`;
