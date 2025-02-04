import { ChevronDown, Filter, Menu, Search } from "lucide-react";
import WeekDayFilter from "./WeekDayFilter";

const Navbar = () => {
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
