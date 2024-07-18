import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-20">
      <p className="text-xl font-semibold tracking-widest">Bikash Neupane</p>

      <div className="flex space-x-4 justify-center items-center mt-2 mb-6">
        <a
          href="https://github.com/bikkashneupane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/bikkashneupane/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
      <p className="text-lg tracking-wider mt-8">
        {currentYear} &copy; Bikash Neupane. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
