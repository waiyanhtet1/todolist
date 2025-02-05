import { ChevronLeft, FilePen } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { cn } from "../utils/utils";

const Header = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-3 border-b border-border-natural"
      )}
    >
      <p className="cursor-pointer" onClick={handleNavigateBack}>
        <ChevronLeft />
      </p>
      <p className="text-neutral-text font-medium">
        {pathname === "/new" && "New Task"}
        {id && "Task Detail"}
      </p>
      <p className={`cursor-pointer ${pathname === "/new" && "invisible"}`}>
        <FilePen />
      </p>
    </div>
  );
};

export default Header;
