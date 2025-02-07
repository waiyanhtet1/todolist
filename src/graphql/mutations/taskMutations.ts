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

export const DELETE_TASK = gql`
  mutation DELETE_TASK($id: uuid!) {
    delete_task_by_pk(id: $id) {
      id
    }
  }
`;

export const UPDATE_TASK_STATUS = gql`
  mutation UPDATE_TASK_STATUS($id: uuid!, $status: String!) {
    update_task_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UPDATE_TASK(
    $id: uuid!
    $title: String!
    $text: String!
    $startDate: date!
    $endDate: String!
    $startTime: String!
    $endTime: String!
    $status: String!
    $notification: Boolean!
  ) {
    update_task_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title
        text: $text
        startDate: $startDate
        endDate: $endDate
        startTime: $startTime
        endTime: $endTime
        status: $status
        notification: $notification
      }
    ) {
      id
    }
  }
`;
