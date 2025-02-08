import { useQuery } from "@apollo/client";
import { GET_TASK_LIST } from "../graphql/queries/taskQueries";
import useUserInfo from "../hooks/useUserInfo";
import { TaskType } from "../types/taskTypes";
import Loading from "./Loading";
import TodoCard from "./TodoCard";

const CardList = () => {
  const { userId, error: userError } = useUserInfo();

  const { loading, error, data } = useQuery(GET_TASK_LIST, {
    fetchPolicy: "network-only",
    variables: { user_id: userId },
  });

  if (loading) return <Loading />;
  if (error || userError) return "error";

  return (
    <div className="flex flex-col gap-4 p-4 bg-neutral-50">
      {data.task.map((item: TaskType) => (
        <TodoCard
          key={item.id}
          id={item.id}
          status={item.status}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default CardList;
