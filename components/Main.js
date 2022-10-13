import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import SideBar from "./SideBar";
import Skills from "./Skills";
const Main = ({ dark, setDark }) => {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  useEffect(() => {
    setToggleSideBar(true);
  }, []);
  return (
    <div>
      <div className="bg-transparent bg-[#fefefe] dark:bg-black z-10 ">
        <div
          className="p-5 max-w-4xl m-auto flex items-center justify-between xl:scale-150"
          onClick={() => {
            if (!toggleSideBar) {
              setToggleSideBar((prev) => !prev);
            }
          }}
        >
          <Link href="/">
            <div className=" text-black text-2xl font-semibold font-[Montserrat] dark:text-white cursor-pointer">
              A V D H U T
            </div>
          </Link>
          <div className="text-black flex items-center text-4xl font-semibold font-[Montserrat] dark:text-white ">
            <div className="p-2 rounded-full mr-3">
              {dark ? (
                <MdLightMode
                  className="text-xl w-7 h-7 text-blue-500 cursor-pointer"
                  onClick={() => setDark((prev) => !prev)}
                />
              ) : (
                <MdDarkMode
                  className="text-xl w-7 h-7 text-blue-500 cursor-pointer"
                  onClick={() => setDark((prev) => !prev)}
                />
              )}
            </div>
            {/* <BiMenuAltRight
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setToggleSideBar((prev) => !prev);
              }}
            /> */}
          </div>
        </div>
        {/* <div
          className={
            toggleSideBar
              ? `w-0 bg-black z-10 right-0 h-full md:top-0 top-14 fixed transition-all duration-500 dark:bg-white`
              : `bg-black z-10 md:w-1/4 w-2/3 fixed right-0 h-full md:top-0 top-14 transition-all duration-500 dark:bg-white `
          }
        >
          <SideBar />
        </div> */}
        <div className="md:max-w-3xl max-w-xl m-auto xl:scale-150 xl:py-28">
          <Hero dark={dark} />
        </div>
        <div className="md:max-w-3xl max-w-xl m-auto xl:scale-150 xl:py-28">
          <Skills />
        </div>
        <div className="md:max-w-3xl max-w-xl m-auto">
          <Projects />
        </div>
        <div className="md:max-w-3xl max-w-2xl m-auto">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;
