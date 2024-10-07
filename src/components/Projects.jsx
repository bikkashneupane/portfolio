import { projects } from "../constants/projects";
import github_bikash from "../assets/github_bikash.mov";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="" id="projects">
      <div className="mx-auto max-w-5xl mt-20 px-3">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          My Projects
        </h2>
        <p className="text-center mb-10 text-gray-700 dark:text-gray-200">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16 md:gap-y-8">
          {projects.map(
            (
              { name, thumbnail, description, tech, link, github, linkedin },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="relative pb-2 rounded-lg border dark:border-gray-800 shadow-md shadow-purple-500/50 dark:shadow-purple-900/50 hover:shadow-2xl hover:shadow-teal-500/50 dark:hover:shadow-teal-500/50"
                >
                  <img
                    src={thumbnail}
                    alt={name}
                    className="h-[350px] md:h-[200px] w-full rounded-t-lg"
                  />

                  <div className="px-3 text-xs flex flex-col gap-1 mt-2">
                    <h3 className="font-semibold text-sm dark:text-gray-200">
                      {name}
                    </h3>
                    <p className="dark:text-gray-400 text-gray-700">
                      {description}
                    </p>
                    <div className="flex gap-1 flex-wrap mb-16">
                      {tech.map((item, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-300 shadow-lg rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-5 pb-3 text-gray-500 ">
                      {linkedin && (
                        <a href={linkedin} target="_blank">
                          <FaLinkedin className="w-6 h-6 hover:text-black hover:dark:text-white" />
                        </a>
                      )}
                      <a href={link} target="_blank">
                        <FaLink className="w-6 h-6 hover:text-black hover:dark:text-white" />
                      </a>
                      <a href={github} target="_blank">
                        <FaGithub className="w-6 h-6 hover:text-black hover:dark:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
          <div className="relative pb-2 rounded-lg border dark:border-gray-800 shadow-md shadow-purple-500/50 dark:shadow-purple-900/50 hover:shadow-2xl hover:shadow-teal-500/50 dark:hover:shadow-teal-500/50">
            <video
              src={github_bikash}
              autoPlay
              loop
              muted
              style={{ playbackRate: 5.0 }}
              className="h-[350px] md:h-[200px] w-full object-cover rounded-t-lg"
            />

            <div className="px-5 text-sm flex flex-col gap-2 mt-2">
              <h3 className="font-semibold text-sm dark:text-gray-200">
                More Projects
              </h3>
              <p className="dark:text-gray-400 text-gray-700 mb-10">
                Explore more projects on my github page ranging both simpler and
                complex projects.
              </p>
            </div>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center mt-5">
              <a
                href="https://github.com/bikkashneupane/"
                target="_blank"
                className="dark:text-white"
              >
                <FaGithub className="text-gray-500 w-6 h-6 hover:text-black hover:dark:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
