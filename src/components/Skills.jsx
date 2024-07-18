import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiStripe,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500 w-12 h-12" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500 w-12 h-12" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-500 w-12 h-12" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400 w-12 h-12" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500 w-12 h-12" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-400 w-12 h-12" />, name: "MongoDB" },
  { icon: <SiExpress className="text-gray-400 w-12 h-12" />, name: "Express" },
  {
    icon: <SiTailwindcss className="text-cyan-500 w-12 h-12" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiBootstrap className="text-purple-500 w-12 h-12" />,
    name: "Bootstrap",
  },
  { icon: <SiRedux className="text-purple-400 w-12 h-12" />, name: "Redux" },
  { icon: <SiStripe className="text-blue-600 w-12 h-12" />, name: "Stripe" },
  { icon: <FaGit className="text-red-500 w-12 h-12" />, name: "Git" },
  { icon: <FaGithub className="w-12 h-12" />, name: "GitHub" },
];

function Skills() {
  return (
    <section className="mt-10 p-4" id="skills">
      <div className="text-center">
        <h2 className="mb-16 text-3xl text-center font-bold tracking-widest font-mono text-yellow-500">
          My Skills
        </h2>
        <div className="flex flex-nowrap gap-20 p-4 overflow-x-scroll  rounded-lg shadow-2xl items-center bg-gray-800">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <div className="">
                <span className="">{skill.icon}</span>
              </div>
              <span className="text-gray-400 font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="text-gray-500 mt-3">Scroll / Slide Me</div>
      </div>
    </section>
  );
}

export default Skills;
