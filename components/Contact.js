import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbBrandInstagram, TbBrandMeta } from "react-icons/tb";
import { BsGithub, BsTwitter } from "react-icons/bs";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const form = useRef();
  function Success() {
    toast.success("Email Send Successfully!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_mabtgsx",
        "template_coqg2mo",
        form.current,
        "aexkK1s8drzAbTfoS"
      )
      .then(
        (result) => {
          Success();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className=" xl:scale-150 xl:py-48">
        <div className="text-2xl mb-8 mt-8 text-center font-semibold dark:text-white font-[Montserrat]">
          C O N T A C T &nbsp; U S
        </div>
        <div className="text-xl md:text-2xl text-center dark:text-white">
          I have got just what you need.{" "}
          <span className="underline decoration-indigo-500 underline-offset-8	">
            {" "}
            Lets Talk!
          </span>
        </div>
        <div className="w-full h-full flex justify-center p-5">
          <form
            ref={form}
            className="w-full mt-5 p-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="from_name"
                  id="floating_name"
                  {...register("from_name")}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="from_email"
                  id="floating_email"
                  {...register("from_email")}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="subject"
                id="floating_Subject"
                {...register("subject")}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_Subject"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <textarea
                type="text"
                name="message"
                id="floating_Message"
                {...register("message")}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_Message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-14 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="inline-flex justify-center items-center w-full">
          <hr className="my-5 w-64 h-px bg-gray-200 border-black dark:border-white border-1 dark:bg-gray-700" />
          <span className="absolute left-1/2 px-3 font-medium text-black bg-white -translate-x-1/2 dark:text-white dark:bg-black">
            OR
          </span>
        </div>
        <div className=" flex space-x-4 justify-center items-center mt-5">
          <div className="text-blue-500 ">
            <a
              href="https://www.facebook.com/avdhut.malankar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandMeta className="w-6 h-6" />
            </a>
          </div>
          <div className="text-blue-500">
            <a
              href="https://www.instagram.com/pixelated_renders/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandInstagram className="w-6 h-6" />
            </a>
          </div>
          <div className="text-blue-500">
            <a
              href="https://github.com/Malankar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="w-5 h-5" />
            </a>
          </div>
          <div className="text-blue-500">
            <a
              href="https://twitter.com/AvdhutMalankar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Contact;
