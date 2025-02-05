import { useState } from "react";
import { cn } from "../utils/utils";
import Button from "./Button";
import DiamondSquare from "./DiamondSquare";

type TodoCardProps = {
  variant: "todo" | "processing" | "complete";
  title: string;
  text: string;
};

const TodoCard = ({ variant, text, title }: TodoCardProps) => {
  const [currentStatus, setCurrentStatus] = useState<
    "todo" | "processing" | "complete"
  >(variant);

  const handleStatusChange = () => {
    switch (currentStatus) {
      case "todo":
        setCurrentStatus("processing");
        break;
      case "processing":
        setCurrentStatus("complete");
        break;
      case "complete":
        setCurrentStatus("todo");
        break;
    }
  };

  console.log("currentStatus", currentStatus);

  return (
    <div
      className={cn(
        "bg-base-white border-l-4 shadow-medium p-4 rounded-sm",
        currentStatus === "todo" && "border-border-strong",
        currentStatus === "processing" && "border-primary",
        currentStatus === "complete" && "border-success"
      )}
    >
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <DiamondSquare variant={currentStatus} />
          <div className="flex flex-col gap-1">
            <p className="text-neutral-text">{title}</p>
            <p className="text-neutral-weak text-xs">
              {text.substring(0, 40)}...
            </p>
          </div>
        </div>

        <Button
          variant={
            currentStatus === "todo"
              ? "todo"
              : currentStatus === "complete"
              ? "success"
              : "pending"
          }
          onClick={handleStatusChange}
        >
          {currentStatus === "todo"
            ? "Todo"
            : currentStatus === "complete"
            ? "Complete"
            : "Processing"}
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
