import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative text-white min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${heroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: 0,
      }}
    >
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", duration: 2, ease: "easeInOut" }}
        className="flex flex-col gap-1 sm:gap-2 md:gap-4 min-h-screen justify-center items-center md:w-1/2"
      >
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-2xl tracking-wider font-bold mb-2">
            Hi, I'm Bikash Neupane
          </h1>

          <TextAnimation />
        </div>

        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <a
            href="/assets/Bikash_Neupane_Resume.pdf"
            download="bikash-neupane-resume.pdf"
          >
            <button className="flex items-center mt-10 px-10 py-4 text-gray-100 bg-teal-800 rounded-lg shadow-lg font-semibold hover:bg-teal-600">
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-6 w-6 ml-2"
              >
                <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"></path>
                <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"></path>
              </svg>
            </button>
          </a>

          <div className="flex space-x-4 mt-4 items-center">
            <a
              href="https://github.com/bikkashneupane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaGithub className="text-2xl md:text-3xl lg:text-4xl hover:text-teal-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/bikkashneupane/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl hover:text-teal-500" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
