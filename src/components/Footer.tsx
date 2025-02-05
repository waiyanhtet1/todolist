import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Link
      to="/new"
      className="absolute bottom-0 w-full h-[55px] bg-base-white text-primary flex items-center justify-center border-t border-border-natural cursor-pointer hover:bg-border-natural transition duration-300 ease-in-out"
    >
      New Task
    </Link>
  );
};

export default Footer;
