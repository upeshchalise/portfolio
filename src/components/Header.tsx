import React from "react";
import { SiGnubash } from "react-icons/si";
import { Input } from "./ui/input";
import { CiSearch, CiStar } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <section className="flex justify-between text-white py-2 px-4" id="header">
        <div className="flex gap-10">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="flex gap-3 items-center">
            <SiGnubash size={28} />
            <span className="text-lg">Upesh Chalise</span>
          </div>
          {/* <div className="flex gap-1 items-center hover:bg-slate-600 rounded-md flex-1 px-1 w-96 text-lg">
            <CiSearch size={20} />
            <Input
              className="border-none pr-1 py-2 bg-transparent focus-visible:ring-0"
              placeholder="Search (press enter to search)"
            />
          </div> */}
        </div>
        <div className="flex gap-1 items-center text-lg">
          <span>1 </span>
          <CiStar size={20} />
          <span>stars!</span>
        </div>
      </section>
    </>
  );
};

export default Header;
