import { cn } from "../utils/utils";

type FooterProps = {
  actionType: "link" | "new" | "update" | "detail";
  onClick: () => void;
};

const Footer = ({ actionType, onClick }: FooterProps) => {
  function actionTypeName() {
    switch (actionType) {
      case "link":
        return "New Task";

      case "new":
        return "Add Task";

      case "detail":
        return "Delete Task";

      case "update":
        return "Update Task";
    }
  }

  return (
    <>
      <div
        onClick={onClick}
        className={cn(
          "absolute bottom-0 w-full h-[55px] text-primary bg-base-white flex items-center justify-center border-t border-border-natural cursor-pointer hover:bg-border-natural transition duration-300 ease-in-out",
          (actionType === "detail" || actionType === "update") && "text-error"
        )}
      >
        {actionTypeName()}
      </div>
    </>
  );
};

export default Footer;
