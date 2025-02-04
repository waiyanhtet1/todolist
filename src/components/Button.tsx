import { cn } from "../utils/utils";

type ButtonProps = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "error";
  IconImg?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
};

const Button = ({
  children,
  size = "sm",
  type,
  IconImg,
  variant,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "bg-bg-medium rounded-lg cursor-pointer hover:bg-neutral-200 transition duration-300 ease-in-out",
        variant === "primary" && "border border-border-natural",
        size === "lg" && "w-[312px] h-[48px] px-2 py-3"
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
