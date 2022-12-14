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
    mongo: (
      <SiMongodb key={1} className="text-green-400 w-8 h-8 font-extrabold" />
    ),
    spotify: (
      <SiSpotify key={2} className="text-green-400 w-8 h-8 font-extrabold" />
    ),
    nextjs: (
      <TbBrandNextjs
        key={3}
        className="text-white rounded-lg w-8 h-8 font-extrabold"
      />
    ),
    nodejs: (
      <SiNodedotjs key={4} className="text-green-400 w-8 h-8 font-extrabold" />
    ),
    tailwindcss: (
      <SiTailwindcss key={5} className="text-blue-400 w-8 h-8 font-extrabold" />
    ),
    react: <FaReact key={6} className="text-blue-400 w-8 h-8 font-extrabold" />,
  };
  const products = [
    {
      id: 101,
      image: "/projects/linkshr.png",
      title: "Linkshr",
      desc: "I have brought together this web app to help you share your links with your group in groups, so that anyone can open your links in the chain you are viewing them in.",
      techs: [techs.mongo, techs.nextjs, techs.nodejs, techs.tailwindcss],
      githubLink: "https://github.com/Malankar/Linkshr",
      link: "https://linkshr.vercel.app/",
    },
    {
      id: 102,
      image: "/projects/spotify.png",
      title: "Spotify Redesign",
      desc: "Redesigning and creating a minimal spotify app that shows you your recently played songs, has inbuild player to play songs and also incredibly fast search functionality.",
      techs: [techs.tailwindcss, techs.nodejs, techs.spotify, techs.react],
      githubLink: "https://github.com/Malankar/spotify-redesign",
      link: "https://spotify-redesign-xi-woad.vercel.app/",
    },
  ];
  return (
    <div className="">
      <div className="text-2xl block lg:scale-150 lg:py-24 text-center font-semibold dark:text-white font-[Montserrat]">
        P R O J E C T S
      </div>
      <div className="w-full h-full">
        <div className="block">
          {products.map((item) => (
            <div key={item.id}>
              <Project
                image={item.image}
                title={item.title}
                desc={item.desc}
                techs={item.techs}
                gitLink={item.githubLink}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
