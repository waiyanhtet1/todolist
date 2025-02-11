import { ChevronLeft, FilePen } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../utils/utils";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  function nameOfHeader() {
    if (pathname === "/new") return "New Task";
    else if (pathname.includes("/update")) return "Edit Task";
    else return "Task Detail";
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-3 border-b border-border-natural"
      )}
    >
      <p className="cursor-pointer" onClick={handleNavigateBack}>
        <ChevronLeft />
      </p>
      <p className="text-neutral-text font-medium">{nameOfHeader()}</p>
      <p
        className={`cursor-pointer ${
          (pathname === "/new" || pathname.includes("/update")) && "invisible"
        }`}
        onClick={() => navigate("update")}
      >
        <FilePen />
      </p>
    </div>
  );
};

export default Header;
