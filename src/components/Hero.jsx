import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextAnimation from "./TextAnimation";

const typedItems = ["Creator", "Developer"];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gray-800 text-white min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpapercave.com/wp/wp5620974.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: 0, // Ensure the hero section content is below the navigation
      }}
    >
      <div className="mx-auto text-center flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl tracking-wider font-bold mb-4">
          Hi, I am Bikash Neupane
        </h1>
        <TextAnimation />
        <div className="flex space-x-4">
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
    </section>
  );
};

export default Hero;
