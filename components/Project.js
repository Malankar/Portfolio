import { useState } from "react";
import { BiLink } from "react-icons/bi";
import { SiGithub, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Project = ({ image, title, desc, techs, gitLink, link }) => {
  const [hovered, setHovered] = useState(false);
  function handleMouseOver(e) {
    e.stopPropagation();
    setHovered(true);
  }
  function handleMouseLeave(e) {
    e.stopPropagation();
    setHovered(false);
  }
  return (
    <>
      <div className="md:block hidden xl:scale-150 xl:py-24">
        <div className="rounded-lg dark:bg-zinc-900">
          <div
            className="relative"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-40 md:p-10">
              <img
                src={image}
                className={
                  hovered
                    ? "brightness-[0.3] rounded-xl "
                    : "brightness-100 rounded-xl "
                }
                alt="imag"
                layout="fill"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -mt-5 -ml-14 z-10 ">
              <div className="flex">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <div
                    className={`bg-gray-300 rounded-full p-2 text-3xl font-semibold opacity-60 cursor-pointer ${
                      hovered && "opacity-100"
                    }`}
                  >
                    <BiLink className="text-black" />
                  </div>
                </a>
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                  <div
                    className={`bg-gray-300 ml-5 rounded-full p-2 text-3xl font-semibold opacity-60 cursor-pointer ${
                      hovered && "opacity-100"
                    }`}
                  >
                    <SiGithub className="text-black" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className={
                  hovered
                    ? `absolute top-1/4 mt-6 z-10 text-gray-300  `
                    : `hidden transition-all ease-out delay-[2s] duration-[2s]`
                }
              >
                <h1 className="text-white  m-auto text-3xl select-none">
                  {title}
                </h1>
              </div>
            </div>
            <div
              className={
                hovered
                  ? `absolute top-1/2 left-1/2 -mt-36 -ml-20 z-10`
                  : `hidden transition-all ease-out delay-[2s] duration-[2s]`
              }
            >
              <div className="text-white flex text-3xl font-semibold space-x-4">
                {techs.map((item) => item)}
              </div>
            </div>
            <div
              className={
                hovered
                  ? `absolute top-1/2 text-center left-1/4 -ml-5 mt-14 max-w-md z-10 text-gray-300  `
                  : `hidden transition-all ease-out delay-[2s] duration-[2s]`
              }
            >
              <p className="text-lg select-none">{desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block mt-4">
        <img src={image} alt="" className="max-w-[94%] m-auto" />
        <div className="px-[16px] -mt-3 ">
          <div className="w-full bg-zinc-800 h-full p-5 rounded-lg dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-semibold select-none">
                {title}
              </h1>
              <div className="flex">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <div className="bg-gray-300 rounded-full p-2 text-md font-semibold opacity-60 cursor-pointer hover:opacity-100">
                    <BiLink className="text-black" />
                  </div>
                </a>
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                  <div className="bg-gray-300 ml-5 rounded-full p-2 text-md font-semibold opacity-60 cursor-pointer hover:opacity-100">
                    <SiGithub className="text-black" />
                  </div>
                </a>
              </div>
            </div>
            <p className="md:text-md text-xs text-gray-300 mt-2">{desc}</p>
            <div className="text-white flex text-3xl font-semibold mt-5 space-x-4">
              {techs.map((item) => item)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
