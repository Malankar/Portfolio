import { FaReact, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiBootstrap,
  SiAdobexd,
  SiNpm,
  SiYarn,
  SiGit,
  SiGithub,
  SiDocker,
  SiNginx,
} from "react-icons/si";
import Image from "next/image";

const Skills = () => {
  return (
    <div>
      <div className="text-2xl mb-8 text-center font-semibold dark:text-white font-[Montserrat]">
        S K I L L S
      </div>
      <div className="grid md:grid-cols-4 gap-2 grid-cols-2 p-5">
        <a
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <FaReact className="text-blue-400 w-8 h-8 font-extrabold" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              React
            </div>
          </div>
        </a>
        <a
          href="https://www.mongodb.com/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <SiMongodb className="text-green-400 w-8 h-8 font-extrabold" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              MongoDB
            </div>
          </div>
        </a>
        <a
          href="https://firebase.google.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <SiFirebase className="text-yellow-500 w-8 h-8 font-extrabold" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              Firebase
            </div>
          </div>
        </a>
        <a
          href="https://www.figma.com/best-practices/guide-to-developer-handoff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              {/* <FaFigma className="text-black w-8 h-8 dark:text-white" /> */}
              <Image src="/figma.svg" width={26} height={26} />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              Figma
            </div>
          </div>
        </a>
        <a
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <SiTailwindcss className="text-blue-400 w-8 h-8" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              Tailwindcss
            </div>
          </div>
        </a>
        <a
          href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <SiBootstrap className="text-purple-500 w-8 h-8 font-extrabold" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              Bootstrap
            </div>
          </div>
        </a>
        <a
          href="https://helpx.adobe.com/in/xd/user-guide.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <SiAdobexd className="text-[#450135] bg-[#F75EEE] rounded-lg w-8 h-8 font-extrabold" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              Adobe XD
            </div>
          </div>
        </a>
        {/* <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
          <div className="w-10 h-10 flex justify-center items-center rounded-lg">
            <SiNpm className="text-red-600 bg-white rounded-lg w-8 h-8 font-extrabold" />
          </div>
          <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
            NPM
          </div>
        </div>
        <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
          <div className="w-10 h-10 flex justify-center items-center rounded-lg">
            <SiYarn className="text-blue-500 rounded-lg w-8 h-8 font-extrabold" />
          </div>
          <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
            YARN
          </div>
        </div> */}
        <a
          href="https://git-scm.com/doc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <SiGit className="text-red-500 rounded-lg w-8 h-8 font-extrabold" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              GIT
            </div>
          </div>
        </a>
        <a
          href="https://docs.github.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <SiGithub className="text-black rounded-lg w-8 h-8 font-extrabold dark:text-white" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              GITHUB
            </div>
          </div>
        </a>
        <a
          href="https://docs.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <SiDocker className="text-blue-500 rounded-lg w-8 h-8 font-extrabold" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              Docker
            </div>
          </div>
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <TbBrandNextjs className="text-black rounded-lg w-8 h-8 font-extrabold dark:text-white" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              Nextjs
            </div>
          </div>
        </a>
        <a
          href="https://nginx.org/en/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center border border-black justify-between bg-transparent max-w-fit p-2 rounded-lg dark:border-white">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg">
              <SiNginx className="text-green-500 rounded-lg w-8 h-8 font-extrabold" />
            </div>
            <div className="text-black text-xl font-semibold flex ml-4 w-32 dark:text-white">
              Nginx
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Skills;
