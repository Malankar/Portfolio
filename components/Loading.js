import { useEffect, useState } from "react";

const Loading = ({ isLoading }) => {
  return (
    <>
      <div className="h-screen">
        <div className="w-full h-1/2 ">
          <div
            className={
              !isLoading
                ? `h-0 w-full bg-black transition-all ease-out delay-[2s] duration-[2s] `
                : `w-full h-full bg-black`
            }
          ></div>
        </div>
        <div className="w-full h-1/2 rotate-180">
          <div
            className={
              !isLoading
                ? `h-0 w-full bg-black transition-all ease-out delay-[2s] duration-[2s] `
                : `w-full h-full bg-black`
            }
          ></div>
        </div>
      </div>
      <div className="absolute top-1/2 w-full">
        <h1
          className={`text-white text-center text-3xl font-[Montserrat] font-medium mb-3 ${
            !isLoading &&
            `-translate-y-28 opacity-0 transition-all delay-1000 duration-1000`
          }`}
        >
          A V D H U T
        </h1>
        <hr
          className={
            !isLoading
              ? "w-screen opacity-0 border-2 border-white transition-all duration-[2s] "
              : "w-0 border-white"
          }
        />
        <h3
          className={`text-gray-400 text-center text-xl font-[Montserrat] font-medium mt-3 animate-pulse  ${
            !isLoading &&
            `translate-y-28 opacity-0 transition-all delay-1000 duration-1000 animate-none	`
          }`}
        >
          Loading...
        </h3>
      </div>
    </>
  );
};

export default Loading;
