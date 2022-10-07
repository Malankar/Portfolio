import Image from "next/image";
import { FaReact } from "react-icons/fa";
import {
  SiAtom,
  SiMongodb,
  SiNodedotjs,
  SiSpotify,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Project from "./Project";

const Projects = () => {
  const techs = {
    mongo: <SiMongodb className="text-green-400 w-8 h-8 font-extrabold" />,
    spotify: <SiSpotify className="text-green-400 w-8 h-8 font-extrabold" />,
    nextjs: (
      <TbBrandNextjs className="text-white rounded-lg w-8 h-8 font-extrabold" />
    ),
    nodejs: <SiNodedotjs className="text-green-400 w-8 h-8 font-extrabold" />,
    tailwindcss: (
      <SiTailwindcss className="text-blue-400 w-8 h-8 font-extrabold" />
    ),
    react: <FaReact className="text-blue-400 w-8 h-8 font-extrabold" />,
  };
  const products = [
    {
      image: "/projects/linkshr.svg",
      title: "Lnkshr",
      desc: "I have brought together this web app to help you share your links with your group in groups, so that anyone can open your links in the chain you are viewing them in.",
      techs: [techs.mongo, techs.nextjs, techs.nodejs, techs.tailwindcss],
      githubLink: "https://github.com/Malankar/Lnkshr",
      link: "https://lnkshr-e4kc.vercel.app/",
    },
    {
      image: "/projects/spotify.svg",
      title: "Spotify Redesign",
      desc: "Redesigning and creating a minimal spotify app that shows you your recently played songs, has inbuild player to play songs and also incredibly fast search functionality.",
      techs: [techs.tailwindcss, techs.nodejs, techs.spotify, techs.react],
      githubLink: "https://github.com/Malankar/spotify-redesign",
      link: "https://spotify-redesign-xi-woad.vercel.app/",
    },
  ];
  return (
    <div>
      <div className="text-2xl mb-8 mt-8 text-center font-semibold dark:text-white font-[Montserrat]">
        P R O J E C T S
      </div>
      <div className="w-full rounded-lg bg-zinc-200 dark:bg-zinc-900 ">
        {products.map((item) => (
          <Project
            image={item.image}
            title={item.title}
            desc={item.desc}
            key={item.title}
            techs={item.techs}
            gitLink={item.githubLink}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
