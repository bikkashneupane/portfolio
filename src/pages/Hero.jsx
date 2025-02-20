import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextAnimation from "../components/TextAnimation";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  // Stagger animation for child elements
  const staggerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 150, damping: 25 },
    },
  };

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
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.5,
            }}
            className="text-2xl tracking-wider font-bold mb-2"
          >
            Hi, I&apos;m Bikash Neupane
          </motion.h1>
          <TextAnimation />
        </div>

        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-2"
        >
          <a
            href="https://drive.google.com/file/d/1LxrMOpeMGq5HEeWu2kd_yx90UblimzYy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="flex items-center mt-10 px-10 py-4 text-gray-100 bg-teal-800 rounded-lg shadow-lg font-semibold hover:bg-teal-600"
            >
              <span>Download My CV</span>
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
            </motion.button>
          </a>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="flex space-x-4 mt-4 items-center"
          >
            <motion.a
              variants={iconVariants}
              href="https://github.com/bikkashneupane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaGithub className="text-2xl md:text-3xl lg:text-4xl hover:text-teal-500" />
            </motion.a>
            <motion.a
              variants={iconVariants}
              href="https://www.linkedin.com/in/bikkashneupane/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl hover:text-teal-500" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
