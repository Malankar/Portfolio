import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Hero from "./Hero";
import Projects from "./Projects";
import SideBar from "./SideBar";
import Skills from "./Skills";
const Main = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  useEffect(() => {
    setToggleSideBar(true);
  }, []);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-transparent dark:bg-black z-10  overflow-y-hidden">
        <div
          className="p-5 max-w-4xl m-auto flex items-center justify-between  "
          onClick={() => {
            if (!toggleSideBar) {
              setToggleSideBar((prev) => !prev);
            }
          }}
        >
          <a
            href="#"
            className=" text-black text-2xl font-semibold font-[Montserrat] dark:text-white"
          >
            A V D H U T
          </a>
          <div className="text-black flex items-center text-4xl font-semibold font-[Montserrat] dark:text-white ">
            <div className="p-2 border-gray-300 border rounded-full mr-3">
              {dark ? (
                <MdLightMode
                  className="text-xl text-blue-500 cursor-pointer"
                  onClick={() => setDark((prev) => !prev)}
                />
              ) : (
                <MdDarkMode
                  className="text-xl text-blue-500 cursor-pointer"
                  onClick={() => setDark((prev) => !prev)}
                />
              )}
            </div>
            <BiMenuAltRight
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setToggleSideBar((prev) => !prev);
              }}
            />
          </div>
        </div>
        <div
          className={
            toggleSideBar
              ? `w-0 bg-black z-10 right-0 h-full md:top-0 top-14 fixed transition-all duration-500 dark:bg-white`
              : `bg-black z-10 md:w-1/4 w-2/3 fixed right-0 h-full md:top-0 top-14 transition-all duration-500 dark:bg-white `
          }
        >
          <SideBar />
        </div>
        <Hero dark={dark} />
        <div className="md:max-w-3xl max-w-xl m-auto">
          <Skills />
        </div>
        <div className="md:max-w-3xl max-w-xl m-auto">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Main;
