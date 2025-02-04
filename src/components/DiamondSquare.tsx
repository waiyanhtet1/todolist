import { cn } from "../utils/utils";

type DiamondSquareProps = {
  variant: "todo" | "processing" | "complete";
};

const DiamondSquare = ({ variant }: DiamondSquareProps) => {
  return (
    <div
      className={cn(
        "w-2 h-2 rotate-45",
        variant === "todo" && "bg-neutral-active",
        variant === "processing" && "bg-primary",
        variant === "complete" && "bg-success"
      )}
    />
  );
};

export default DiamondSquare;
