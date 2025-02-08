import userProfile from "../../public/img/user.png";

import { googleLogout } from "@react-oauth/google";
import { ChevronDown, Filter, LogOut, Menu, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoginUserProfile } from "../utils/utils";
import WeekDayFilter from "./WeekDayFilter";

const Navbar = () => {
  const userInfo = getLoginUserProfile();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoutHandler = () => {
    googleLogout();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="border-b border-border-natural bg-base-white">
      {/* top navbar */}
      <div className="flex items-center justify-between px-4 py-3">
        <Menu />
        <div className="flex items-center gap-2">
          <p className="text-neutral-text text-2xl font-bold">Today</p>
          <ChevronDown />
        </div>

        <div className="flex items-center gap-5">
          <Filter />
          <Search />

          <div className="relative" onClick={() => setIsOpen((prev) => !prev)}>
            <img
              src={userInfo?.picture || userProfile}
              alt=""
              className="w[35px] h-[35px] object-contain rounded-full cursor-pointer"
            />
            {isOpen && (
              <div
                ref={dropdownRef}
                onClick={logoutHandler}
                className="absolute right-0 p-3 bg-neutral-200 rounded-sm cursor-pointer hover:text-neutral-700"
              >
                Logout
              </div>
            )}
          </div>
          <LogOut
            color="red"
            className="cursor-pointer"
            onClick={logoutHandler}
          />
        </div>
      </div>

      {/* second navbar with week date list*/}
      <div className="">
        <WeekDayFilter />
      </div>
    </div>
  );
};

export default Navbar;
