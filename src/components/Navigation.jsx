import React, { useState } from "react";
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";

const navItems = [
  { icon: <FaHome />, name: "Home", to: "#hero" },
  { icon: <FaUser />, name: "About", to: "#about" },
  {
    icon: <FaProjectDiagram />,
    name: "Projects",
    to: "#projects",
  },
  {
    icon: <GiGiftOfKnowledge />,
    name: "Skills",
    to: "#skills",
  },
  {
    icon: <FaEnvelope />,
    name: "Contact",
    to: "#contact",
  },
];

function Navigation() {
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
    <nav className="z-5000">
      <div className="px-4 bg-gray-900 fixed top-0 left-0 w-full text-lg text-gray-300">
        <div className="flex justify-between min-h-[100px] items-center mx-auto max-w-[1440px] font-mono tracking-widest">
          <h2 className="font-bold text-xl md:text-2xl">Bikash</h2>
          <div className="hidden md:flex md:justify-between md:space-x-8">
            {navItems.map((item, index) => (
              <a
                href={item.to}
                key={index}
                className="group flex items-center transform transition"
                onClick={(e) => handleClick(e, item.to)}
              >
                <span className="flex flex-col items-center hover:text-yellow-500">
                  {item.icon}
                  <span className="">{item.name}</span>
                </span>
              </a>
            ))}
          </div>
          <div
            className="md:hidden text-yellow-500"
            onClick={() => setMobileView(!mobileView)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"
            >
              <path
                fillRule="evenodd"
                d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* mobile side nav */}
      {mobileView && (
        <div className="fixed top-0 right-0 h-screen w-full bg-gray-900">
          <div
            className="text-yellow-500 flex justify-end"
            onClick={() => setMobileView(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-12 h-12 mt-8 mr-2"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>
            </svg>
          </div>
          <div className="space-y-10 h-full flex flex-col items-center text-2xl font-semibold text-gray-300 mt-16">
            {navItems.map((item, index) => (
              <a
                href={item.to}
                key={index}
                className="group flex transition"
                onClick={(e) => handleClick(e, item.to)}
              >
                <span className="flex flex-end gap-2 hover:text-yellow-500">
                  <span className="">{item.name}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
