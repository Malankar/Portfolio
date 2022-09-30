import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
const Main = () => {
  return (
    <div>
      <div className="p-5 flex items-center justify-between ">
        <a
          href="#"
          className=" text-black text-2xl font-semibold font-[Montserrat] hoverable"
        >
          A V D H U T
        </a>
        <div className="text-black text-4xl font-semibold font-[Montserrat] hoverable ">
          <BiMenuAltRight />
        </div>
      </div>
    </div>
  );
};

export default Main;
