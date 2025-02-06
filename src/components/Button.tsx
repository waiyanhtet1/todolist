import { cn } from "../utils/utils";

type ButtonProps = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "todo" | "success" | "pending" | "error";
  IconImg?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  isDisabled?: boolean;
};

const Button = ({
  children,
  size = "sm",
  type,
  IconImg,
  variant,
  onClick,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={cn(
        "bg-bg-medium rounded-lg cursor-pointer hover:bg-neutral-200 transition duration-300 ease-in-out",
        variant === "primary" && "border border-border-natural",
        variant === "todo" && "bg-neutral-active text-base-white",
        variant === "success" && "bg-success text-base-white",
        variant === "pending" && "bg-primary text-base-white",
        variant === "error" && "bg-error text-base-white",

        size === "lg" && "w-[312px] h-[48px] px-2 py-3",
        size === "sm" && "px-[30px] py-2 w-[100px] h-[35px] text-sm"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-5">
        {IconImg && (
          <img src={IconImg} alt="iconImage" width={26} height={26} />
        )}
        {children}
      </div>
    </button>
  );
};

export default Button;
