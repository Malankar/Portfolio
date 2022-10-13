import Image from "next/image";
import React from "react";

const Hero = ({ dark }) => {
  return (
    <>
      <div className="text-black  dark:text-white block md:flex justify-center items-center">
        <div className="max-w-lg md:max-w-sm pl-5 text-black dark:text-white">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Hello, I’m Avdhut Malankar
          </h1>
          <p className="text-lg md:text-2xl pt-2 dark:text-gray-400">
            I am a full stack developer, programmer who loves designing and
            creating websites.
          </p>
        </div>
        <div className="max-w-sm">
          <div className="relative w-[350px] h-[350px] md:w-[500px]  md:h-[500px]">
            <div className="absolute ">
              {dark ? (
                <Image src="/blob.svg" alt="" width={600} height={600} />
              ) : (
                <Image src="/blob_white.svg" alt="" width={600} height={600} />
              )}
            </div>
            <div className="absolute z-5 md:top-28 md:left-28 top-16 left-14">
              <Image src="/coder.svg" alt="" width={275} height={275} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
