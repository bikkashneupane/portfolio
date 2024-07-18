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
  {
    icon: <FaHtml5 className="text-orange-500 w-6 h-6 md:w-12 md:h-12" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 w-6 h-6 md:w-12 md:h-12" />,
    name: "CSS3",
  },
  {
    icon: <FaJs className="text-yellow-500 w-6 h-6 md:w-12 md:h-12" />,
    name: "JavaScript",
  },
  {
    icon: <FaReact className="text-blue-400 w-6 h-6 md:w-12 md:h-12" />,
    name: "React",
  },
  {
    icon: <FaNodeJs className="text-green-500 w-6 h-6 md:w-12 md:h-12" />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb className="text-green-400 w-6 h-6 md:w-12 md:h-12" />,
    name: "MongoDB",
  },
  {
    icon: <SiExpress className="text-gray-400 w-6 h-6 md:w-12 md:h-12" />,
    name: "Express",
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 w-6 h-6 md:w-12 md:h-12" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiBootstrap className="text-purple-500 w-6 h-6 md:w-12 md:h-12" />,
    name: "Bootstrap",
  },
  {
    icon: <SiRedux className="text-purple-400 w-6 h-6 md:w-12 md:h-12" />,
    name: "Redux",
  },
  {
    icon: <SiStripe className="text-blue-600 w-6 h-6 md:w-12 md:h-12" />,
    name: "Stripe",
  },
  {
    icon: <FaGit className="text-red-500 w-6 h-6 md:w-12 md:h-12" />,
    name: "Git",
  },
  { icon: <FaGithub className="w-6 h-6 md:w-12 md:h-12" />, name: "GitHub" },
];

function Skills() {
  return (
    <section className="p-4 py-10" id="skills">
      <div className="mx-auto max-w-[1440px] flex flex-col my-8">
        <h2 className="text-3xl text-center font-bold tracking-widest font-mono text-yellow-500 mb-6">
          My Skills
        </h2>

        <div className="flex flex-wrap gap-x-2 gap-y-6 md:gap-16 p-4 md:justify-center md:items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <div className="">
                <span className="">{skill.icon}</span>
              </div>
              <span className="text-gray-400 font-semibold text-xs md:text-base">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
}

export default Skills;
