import { projects } from "../constants/projects";
import github_bikash from "../assets/github_bikash.mov";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="" id="projects">
      <div className="mx-auto max-w-5xl pt-12 pb-10 border-t border-t-gray-800">
        <h2 className="text-xl font-bold text-yellow-500 text-center mb-4">
          My Projects
        </h2>
        <p className="text-center mb-10 text-gray-200">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(
            (
              { name, thumbnail, description, tech, link, github, linkedin },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="pb-2 rounded-lg border border-gray-800 relative"
                >
                  <img
                    src={thumbnail}
                    alt={name}
                    className="h-[350px] md:h-[250px] w-full rounded-t-lg"
                  />

                  <div className="px-5 text-sm flex flex-col gap-1 mt-2">
                    <h3 className="font-semibold text-gray-200">{name}</h3>
                    <p className="text-gray-400">{description}</p>
                    <div className="flex gap-2 flex-wrap mb-16 text-xs">
                      {tech.map((item, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-gray-300 shadow-lg rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2  text-gray-400">
                      {linkedin && (
                        <a
                          href={linkedin}
                          target="_blank"
                          className="bg-teal-600 hover:bg-teal-900 px-4 py-2 rounded-md text-white text-xs"
                        >
                          Pictures
                        </a>
                      )}
                      <a
                        href={link}
                        target="_blank"
                        className="bg-teal-600 hover:bg-teal-900 px-4 py-2 rounded-md text-white text-xs"
                      >
                        Link
                      </a>
                      <a
                        href={github}
                        target="_blank"
                        className="bg-teal-600 hover:bg-teal-900 px-4 py-2 rounded-md text-white text-xs"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
          <div className="pb-6 rounded-lg border border-gray-800 relative">
            <video
              src={github_bikash}
              autoPlay
              loop
              muted
              style={{ playbackRate: 5.0 }}
              className="h-[350px] md:h-[250px] w-full object-cover rounded-t-lg"
            />

            <div className="px-5 text-sm flex flex-col gap-2 mt-2">
              <h3 className="font-semibold text-gray-200">More Projects</h3>
              <p className="text-gray-400">
                Explore more projects on my github page ranging both simpler and
                complex projects.
              </p>
            </div>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center mt-5">
              <a
                href="https://github.com/bikkashneupane/"
                target="_blank"
                className="bg-teal-600 hover:bg-teal-900 px-4 py-2 rounded-md text-white text-xs"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
