import { projects } from "../constants/projects";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="py-16 border-b border-b-gray-800" id="projects">
      <h2 className="text-xl md:text-2xl font-bold text-center text-yellow-500 mb-10 tracking-wider">
        MY PROJECTS
      </h2>

      <div className="mx-auto max-w-[1440px] flex flex-col px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map(
            (
              { name, thumbnail, description, tech, link, github, linkedin },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="pb-6 group rounded-lg border border-gray-800 transition-all duration-500 hover:border-teal-700 ease-in-out"
                >
                  <img
                    src={thumbnail}
                    alt={name}
                    className="h-[350px] w-full rounded-t-lg"
                  />

                  <div className="px-5 text-sm flex flex-col gap-2 mt-5">
                    <h3 className="text-xl font-semibold text-yellow-500">
                      {name}
                    </h3>
                    <p className="text-gray-400">{description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {tech.map((item, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-teal-900 text-gray-300 shadow-lg rounded group-hover:bg-teal-600 group-hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-8 text-gray-400">
                      {linkedin && (
                        <a href={linkedin} target="_blank">
                          <FaLinkedin className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                        </a>
                      )}
                      <a href={link} target="_blank">
                        <FaLink className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                      </a>
                      <a href={github} target="_blank">
                        <FaGithub className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
