import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import Main from "../components/Main";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout();
    };
  }, [isLoading]);

  return (
    <div className="cursor-none">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCursor
        className="invert"
        targets={[".hoverable"]}
        customClass="customCursor"
        dimensions={45}
        opacity={0.6}
        fill="transparent"
        strokeColor="#000"
        strokeWidth={1}
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.6}
        targetScale={3}
      />

      <div className="absolute w-full h-screen">
        <Loading isLoading={isLoading} />
      </div>
      <div className=" absolute h-screen w-full ">
        <Main />
      </div>
    </div>
  );
}
