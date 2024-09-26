import { projects } from "../constants/projects";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="py-10 bg-gray-900" id="projects">
      <div className="mx-auto max-w-[1440px] flex flex-col px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center text-teal-500 mb-16 tracking-wider">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
          {projects.map(
            ({ name, image, description, tech, link, github }, index) => {
              return (
                <div key={index} className="rounded-lg border border-gray-800">
                  <div className="pb-6">
                    <img
                      src={image}
                      alt={name}
                      className="rounded-t-lg shadow-lg h-[250px] w-full"
                    />

                    <div className="px-5 text-sm flex flex-col gap-2 mt-5">
                      <h3 className="text-xl font-semibold text-[#FFD700]">
                        {name}
                      </h3>
                      <p className="text-gray-400">{description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {tech.map((item, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-teal-700 text-gray-300 shadow-lg rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center gap-4 mt-8 text-gray-400">
                        <a href={link} target="_blank">
                          <FaLink className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                        </a>
                        <a href={github} target="_blank">
                          <FaGithub className="h-6 w-6 hover:text-teal-500 cursor-pointer" />
                        </a>
                      </div>
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
