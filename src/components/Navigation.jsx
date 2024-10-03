import { useState } from "react";
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { motion } from "framer-motion";

const navItems = [
  { icon: <FaHome />, name: "Home", to: "#hero" },
  { icon: <FaUser />, name: "About", to: "#about" },
  { icon: <FaProjectDiagram />, name: "Projects", to: "#projects" },
  { icon: <GiGiftOfKnowledge />, name: "Skills", to: "#skills" },
  { icon: <FaEnvelope />, name: "Contact", to: "#contact" },
];

const Navigation = () => {
  const [mobileView, setMobileView] = useState(false);

  const handleClick = (e, to) => {
    e.preventDefault();
    const targetElement = document.querySelector(to);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileView(false); // Close the mobile view after clicking
  };

  return (
    <nav className="z-50">
      {/* Desktop Navigation */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full bg-black border-b border-b-gray-800 text-gray-300 z-50"
      >
        <div className="flex justify-between items-center p-4 mx-auto max-w-[1440px] h-[80px]">
          <a href="#" className="font-bold text-2xl tracking-wider">
            <span className="text-white">Bik</span>
            <span className="text-teal-600">ash</span>
          </a>
          <div className="hidden md:flex md:justify-between md:space-x-10 font-semibold">
            {navItems.map((item, index) => (
              <a
                href={item.to}
                key={index}
                className="group flex items-center transform transition hover:text-teal-500"
                onClick={(e) => handleClick(e, item.to)}
              >
                <span className="flex flex-col items-center gap-1">
                  {/* {item.icon} */}
                  <span>{item.name}</span>
                </span>
              </a>
            ))}
          </div>
          <div
            className="md:hidden text-teal-500"
            onClick={() => setMobileView(!mobileView)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              className="w-[2rem] h-[2rem] cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      {mobileView && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-screen w-full bg-gray-900 shadow-lg z-50"
        >
          <div
            className="text-teal-700 hover:text-teal-500 flex justify-end p-4"
            onClick={() => setMobileView(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              className="w-12 h-12 cursor-pointer bg-gray-800 rounded-lg"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
            </svg>
          </div>
          <div className="space-y-10 h-full flex flex-col items-center text-xl font-semibold text-gray-300 mt-16">
            {navItems.map((item, index) => (
              <a
                href={item.to}
                key={index}
                className="group flex transition-all delay-75 hover:text-teal-500"
                onClick={(e) => handleClick(e, item.to)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
