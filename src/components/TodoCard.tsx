import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { UPDATE_TASK_STATUS } from "../graphql/mutations/taskMutations";
import { GET_TASK_LIST } from "../graphql/queries/taskQueries";
import { StatusType } from "../types/taskTypes";
import { cn } from "../utils/utils";
import Button from "./Button";
import DiamondSquare from "./DiamondSquare";
import Loading from "./Loading";

type TodoCardProps = {
  title: string;
  text: string;
  id: string;
  status: StatusType;
};

const TodoCard = ({ status, text, title, id }: TodoCardProps) => {
  const navigate = useNavigate();

  const [updateTaskStatus, { loading, error }] =
    useMutation(UPDATE_TASK_STATUS);

  function changeStatus() {
    if (status === "todo") return "processing";
    if (status === "processing") return "complete";
    if (status === "complete") return "todo";
  }

  const handleStatusChange = async () => {
    const updatedStatus = changeStatus();

    await updateTaskStatus({
      variables: { id, status: updatedStatus },
      refetchQueries: [GET_TASK_LIST],
    });
  };

  if (error) return "Error";

  return (
    <div
      onClick={() => navigate(`/${id}`)}
      className={cn(
        "bg-base-white border-l-4 shadow-medium p-4 rounded-sm cursor-pointer",
        status === "todo" && "border-border-strong",
        status === "processing" && "border-primary",
        status === "complete" && "border-success"
      )}
    >
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <DiamondSquare variant={status} />
          <div className="flex flex-col gap-1">
            <p className="text-neutral-text">{title}</p>
            <p className="text-neutral-weak text-xs">
              {text.substring(0, 40)}...
            </p>
          </div>
        </div>

        {loading ? (
          <Loading type="button" />
        ) : (
          <Button
            variant={
              status === "todo"
                ? "todo"
                : status === "complete"
                ? "success"
                : "pending"
            }
            onClick={handleStatusChange}
          >
            {status === "todo"
              ? "Todo"
              : status === "complete"
              ? "Complete"
              : "Processing"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
