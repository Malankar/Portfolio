import React from "react";

const SideBar = () => {
  return (
    <div className="text-white md:mt-10 dark:text-black">
      <ul className="p-10 text-center text-xl font-[Montserrat] space-y-10 ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">Resume</li>
      </ul>
    </div>
  );
};

export default SideBar;
