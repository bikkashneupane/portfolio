import { projects } from "../constants/projects";
import github_bikash from "../assets/github_bikash.mov";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Projects = () => {
  const linkOpener = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  // Reference for video playback speed
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 5.0;
    }
  }, []);

  return (
    <section id="projects">
      <div className="mx-auto max-w-5xl mt-20 px-3">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          My Projects
        </h2>
        <p className="text-center mb-10 dark:text-gray-400 px-4">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(
            (
              {
                name,
                thumbnail,
                video,
                description,
                tech,
                link,
                github,
                linkedin,
              },
              index
            ) => {
              return video ? (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring" }}
                  key={index}
                  onClick={() =>
                    linkOpener("https://github.com/bikkashneupane")
                  }
                  className="relative pb-2 rounded-lg border dark:border-gray-800 shadow-md max-w-sm cursor-pointer mx-auto"
                >
                  <video
                    ref={videoRef}
                    src={github_bikash}
                    autoPlay
                    loop
                    muted
                    className="aspect-[16/9] w-full object-cover rounded-t-lg"
                  />
                  <div className="px-5 text-sm flex flex-col gap-2 mt-5">
                    <h3 className="font-semibold text-sm dark:text-gray-200">
                      More Projects
                    </h3>
                    <p className="dark:text-gray-400 text-gray-700 mb-10">
                      Explore more projects on my GitHub page, ranging from
                      simple to complex applications.
                    </p>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center mt-5">
                    <a
                      href="https://github.com/bikkashneupane/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:text-white"
                    >
                      <FaGithub className="text-gray-600 dark:text-gray-300 w-6 h-6 hover:text-black hover:dark:text-white" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  onClick={() => linkOpener(link ?? github)}
                  key={index}
                  className="relative pb-2 rounded-lg border dark:border-gray-800 shadow-md group cursor-pointer max-w-sm mx-auto"
                >
                  <img
                    src={thumbnail}
                    alt={name}
                    className="aspect-[16/9] w-full object-cover rounded-t-lg"
                  />

                  <div className="px-3 flex flex-col gap-2 mt-5">
                    <h3 className="font-semibold dark:text-gray-200">{name}</h3>
                    <p className="dark:text-gray-400 text-gray-700">
                      {description}
                    </p>
                    <div className="flex gap-1 flex-wrap mb-16">
                      {tech.map((item, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-xs text-gray-100 shadow-lg rounded group-hover:bg-teal-700 transition-colors duration-300 ease-in-out"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-2 z-50 left-0 right-0 flex justify-center gap-5 pb-3 text-gray-600 dark:text-gray-300">
                      {linkedin && (
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaLinkedin className="w-6 h-6 hover:text-black hover:dark:text-white" />
                        </a>
                      )}
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink className="w-6 h-6 hover:text-black hover:dark:text-white" />
                        </a>
                      )}
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-6 h-6 hover:text-black hover:dark:text-white" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
