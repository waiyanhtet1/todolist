import { gql } from "@apollo/client";

export const INSERT_TASK = gql`
  mutation INSERT_TASK(
    $title: String!
    $text: String!
    $startDate: date!
    $startTime: String!
    $endDate: String!
    $endTime: String!
    $status: String!
    $notification: Boolean!
  ) {
    insert_task(
      objects: {
        title: $title
        text: $text
        startDate: $startDate
        startTime: $startTime
        endDate: $endDate
        endTime: $endTime
        status: $status
        notification: $notification
      }
    ) {
      affected_rows
    }
  }
`;
