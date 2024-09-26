import {
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiStripe,
  SiTailwindcss,
} from "react-icons/si";

export const skills = [
  {
    icon: <FaHtml5 className="text-orange-500 w-6 h-6" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
    name: "CSS3",
  },
  {
    icon: <FaJs className="text-yellow-500 w-6 h-6" />,
    name: "JavaScript",
  },
  {
    icon: <FaReact className="text-blue-400 w-6 h-6" />,
    name: "React",
  },
  {
    icon: <FaNodeJs className="text-green-500 w-6 h-6" />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb className="text-green-400 w-6 h-6" />,
    name: "MongoDB",
  },
  {
    icon: <SiExpress className="text-gray-400 w-6 h-6" />,
    name: "Express",
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 w-6 h-6" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiBootstrap className="text-purple-500 w-6 h-6" />,
    name: "Bootstrap",
  },
  {
    icon: <SiRedux className="text-purple-400 w-6 h-6" />,
    name: "Redux",
  },
  {
    icon: <SiStripe className="text-blue-600 w-6 h-6" />,
    name: "Stripe",
  },
  {
    icon: <FaGit className="text-red-500 w-6 h-6" />,
    name: "Git",
  },
  { icon: <FaGithub className="w-6 h-6" />, name: "GitHub" },
];
