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
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>Avdhut</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div
        className={
          show
            ? "absolute w-screen h-screen overflow-x-hidden overflow-y-hidden z-[100]"
            : "hidden"
        }
      >
        <Loading isLoading={isLoading} handleLoading={handleLoading} />
      </div>
      <div
        className={
          show
            ? "absolute max-h-screen w-full  overflow-x-hidden"
            : "absolute h-fit w-full overflow-y-hidden overflow-x-hidden dark:bg-black"
        }
      >
        <Main setDark={setDark} dark={dark} />
      </div>
    </div>
  );
}
