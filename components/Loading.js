import { useEffect, useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => {
      clearTimeout();
    };
  }, [isLoading]);
  return (
    <div className="h-screen">
      <div className="w-full h-1/2 ">
        <div
          className={
            isLoading
              ? `h-0 transition-all delay-1000 duration-500 `
              : `w-full h-full bg-black`
          }
        ></div>
      </div>
      <div>
        <hr
          className={
            isLoading
              ? "w-full font-bold border-2 border-white transition-all duration-1000 "
              : "w-0 border-0"
          }
        />
      </div>
      <div className="w-full h-1/2 rotate-180">
        <div
          className={
            isLoading
              ? `h-0 transition-all delay-1000 duration-500 `
              : `w-full h-full bg-black`
          }
        ></div>
      </div>
    </div>
  );
};

export default Loading;
