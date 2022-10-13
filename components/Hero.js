import React from "react";
import { FiArrowDown } from "react-icons/fi";
const Hero = () => {
  return (
    <>
      <div className="text-black  dark:text-white block md:flex justify-center items-center">
        <div className="max-w-sm m-auto">
          <div className="relative w-[375px] h-[375px] md:w-[500px]  md:h-[500px]">
            <div className="absolute ">
              <img src="/blob.svg" alt="" className="w-[450px] h-[450px]" />
            </div>
            <div className="absolute z-5 md:top-28 md:left-28 top-16 left-14">
              <img
                src="/coder.svg"
                alt=""
                className="w-[250px] mt-5 md:mt-0 h-[250px] md:w-[275px] md:h-[275px] "
              />
            </div>
          </div>
        </div>
        <div className=" pl-10 text-black dark:text-white py-5">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Hello, I&apos;m Avdhut Malankar
          </h1>
          <p className="text-lg md:text-xl pt-2 dark:text-gray-400">
            I am a full stack developer, programmer who loves designing and
            creating websites.
          </p>
          <a href="/Avdhut Malankar Resume.pdf" download>
            <div className="flex space-x-3 px-4 py-1.5 rounded-lg mt-5 w-fit bg-black text-white dark:bg-blue-500 cursor-pointer">
              <div>Resume</div>
              <div className="text-white flex justify-center items-center">
                <FiArrowDown />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
