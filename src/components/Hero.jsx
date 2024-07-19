import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextAnimation from "./TextAnimation";

const heroImg = "https://wallpapercave.com/wp/wp7890200.jpg";

const Hero = () => {
  return (
    <main
      id="hero"
      className="relative bg-gray-800 text-white min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: 0,
      }}
    >
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 min-h-screen justify-center items-center md:w-1/2">
        <h1 className="text-2xl md:text-3xl tracking-wider font-bold mb-4">
          Hi, I am Bikash Neupane
        </h1>

        <TextAnimation />

        <a
          href="/assets/Bikash-Resume.pdf"
          download="bikash-neupane-resume.pdf"
        >
          <button className="px-10 py-4 text-gray-100 bg-teal-600 rounded-lg shadow-lg font-semibold">
            Download CV
          </button>
        </a>

        <div className="flex space-x-4 mt-4 items-center">
          <a
            href="https://github.com/bikkashneupane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub className="text-2xl md:text-3xl lg:text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/bikkashneupane/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
