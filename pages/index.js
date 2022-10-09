import Head from "next/head";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Main from "../components/Main";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);
  function handleLoading() {
    setIsLoading(false);
  }
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 6400);
    return () => {
      clearTimeout();
    };
  }, [show]);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.src" />
      </Head>
      <div
        className={
          show ? "absolute w-full h-screen overflow-x-hidden z-[100]" : "hidden"
        }
      >
        <Loading isLoading={isLoading} handleLoading={handleLoading} />
      </div>
      <div className="absolute h-screen w-full">
        <Main />
      </div>
    </div>
  );
}
