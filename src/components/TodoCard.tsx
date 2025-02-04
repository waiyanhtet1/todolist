import { cn } from "../utils/utils";
import Button from "./Button";
import DiamondSquare from "./DiamondSquare";

type TodoCardProps = {
  variant: "todo" | "processing" | "complete";
  title: string;
  text: string;
};

const TodoCard = ({ variant, text, title }: TodoCardProps) => {
  return (
    <div
      className={cn(
        "bg-base-white border-l-4 shadow-medium p-4 rounded-sm",
        variant === "todo" && "border-border-strong",
        variant === "processing" && "border-primary",
        variant === "complete" && "border-success"
      )}
    >
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <DiamondSquare variant={variant} />
          <div className="flex flex-col gap-1">
            <p className="text-neutral-text">{title}</p>
            <p className="text-neutral-weak text-xs">
              {text.substring(0, 40)}...
            </p>
          </div>
        </div>

        <Button
          variant={
            variant === "todo"
              ? "todo"
              : variant === "complete"
              ? "success"
              : "pending"
          }
        >
          {variant === "todo"
            ? "Todo"
            : variant === "complete"
            ? "Complete"
            : "Processing"}
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
