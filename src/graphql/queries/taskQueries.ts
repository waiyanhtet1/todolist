import { gql } from "@apollo/client";

export const GET_TASK_LIST = gql`
  query GET_TASK_LIST($user_id: uuid!) {
    task(
      order_by: { created_at: desc, updated_at: desc }
      where: { user_id: { _eq: $user_id } }
    ) {
      id
      title
      text
      startDate
      endDate
      startTime
      endTime
      status
      notification
    }
  }
`;

export const GET_SINGLE_TASK = gql`
  query GET_SINGLE_TASK($id: uuid!) {
    task_by_pk(id: $id) {
      title
      text
      startDate
      endDate
      startTime
      endTime
      notification
      status
    }
  }
`;
