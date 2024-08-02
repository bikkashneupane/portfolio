import library from "../assets/library.png";
import ntdl from "../assets/ntdl.png";
import movie from "../assets/movie.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const projects = [
    {
      name: "Library Management System",
      image: library,
      description:
        "Full Stack Project to allow user to burrow and return books, and leave reviews as well.",
      tech: [
        "React",
        "Node",
        "Express",
        "Mongo DB",
        "Bootstrap",
        "JWT",
        "joi",
        "bcrypt",
      ],
      link: "https://library-management-mern.vercel.app/",
    },
    {
      name: "Not To Do List",
      image: ntdl,
      description:
        "Track and manage your weekly tasks, visualize how many hours you could have better utilised.",
      tech: ["React", "Node", "Express", "Mongo DB", "Bootstrap"],
      link: "https://not-to-do-list-frontend-react-qlsp.vercel.app/",
    },
    {
      name: "Movie Wish List",
      image: movie,
      description:
        "A simple fun project, fetch real world api for movie collection, Search your movie, add to your custom category, action/ drama.",
      tech: ["React", "Bootstrap", "axios"],
      link: "https://movie-list-react-fawn.vercel.app/",
    },
  ];

  return (
    <div className="py-10 bg-gray-800" id="projects">
      <div className="mx-auto max-w-[1440px] flex flex-col py-12 px-4">
        <h2 className="text-3xl text-center font-bold tracking-widest font-mono text-yellow-500 mb-5">
          My Projects
        </h2>

        <h3 className="md:text-center font-mono text-teal-600">
          <span className="text-red-500 font-semibold tracking-widest">
            Disclaimer
          </span>
          : All these projects are deployed using free versions of vercel, if
          you visit them, it might take some seconds for initial render. Please
          be patient!
        </h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ name, image, description, tech, link }, index) => {
            const projectRef = useRef(null);
            const isInView = useInView(projectRef, { once: false });

            return (
              <motion.div
                key={index}
                ref={projectRef}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0,
                }}
                transition={{
                  duration: 1,
                  type: "tween",
                  ease: "easeInOut",
                }}
                className="p-6 rounded-lg shadow-lg"
              >
                <h3 className="mb-2 text-xl md:text-2xl font-bold text-center text-gray-300">
                  {name}
                </h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image}
                    alt={name}
                    className="rounded-lg shadow-lg h-[450px] w-full"
                  />
                </a>

                <p className="mt-4 text-gray-300">{description}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-600 text-white text-sm shadow-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
