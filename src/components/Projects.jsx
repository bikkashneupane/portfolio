import library from "../assets/library.png";
import ntdl from "../assets/ntdl.png";
import movie from "../assets/movie.png";
import vikiasmy_watch_1 from "../assets/vikiasmy_watches/Vikiasmy_watches_1.png";
import vikiasmy_watch_2 from "../assets/vikiasmy_watches/Vikiasmy_watches_1.png";
import vikiasmy_watch_3 from "../assets/vikiasmy_watches/Vikiasmy_watches_1.png";
import vikiasmy_watch_4 from "../assets/vikiasmy_watches/Vikiasmy_watches_1.png";
import vikiasmy_watch_5 from "../assets/vikiasmy_watches/Vikiasmy_watches_1.png";
import vikiasmy_watch_6 from "../assets/vikiasmy_watches/Vikiasmy_watches_1.png";
import vikiasmy_watch_7 from "../assets/vikiasmy_watches/Vikiasmy_watches_1.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Vikiasmy's Watch Haven",
    image: vikiasmy_watch_1,

    description:
      "A full-stack e-commerce platform specializing in luxury watches. Features a dynamic content management system for seamless product updates and management. Experience secure payments, user-friendly design, and high-quality images, all deployed to the cloud.",
    tech: [
      "React",
      "Node",
      "Express",
      "Mongo DB",
      "Tailwind",
      "JWT",
      "joi",
      "bcrypt",
      "redux",
      "git",
      "github",
      "Stripe",
      "Images uploaded in cloudinary",
      "Deployed in vercel",
    ],
    link: "https://vikiasmy-watches.vercel.app",
  },
  {
    name: "Digital Library Portal",
    image: library,
    description:
      "A comprehensive library management system that allows users to borrow and return books, track borrowing history, and leave reviews. Built with a focus on accessibility and user experience, this platform simplifies library management for both users and administrators.",
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
    link: "https://library-management-mern.vercel.app",
  },
  {
    name: "Not-To-Do List App",
    image: ntdl,
    description:
      "A productivity app designed to help users track unproductive habits. Visualize the time spent on tasks you shouldn't be doing and reallocate your hours towards more productive activities. Simple, intuitive, and effective task management.",
    tech: ["React", "Node", "Express", "Mongo DB", "Bootstrap"],
    link: "https://not-to-do-list-frontend-react-qlsp.vercel.app",
  },
  {
    name: "Movie Wishlist Organizer",
    image: movie,
    description:
      "An engaging web app that lets users search, categorize, and organize their favorite movies using real-world API data. Create custom movie categories like action, drama, and more. Ideal for movie enthusiasts looking to manage their watchlist.",
    tech: ["React", "Bootstrap", "axios"],
    link: "https://movie-list-react-fawn.vercel.app",
  },
];

// Custom hook to handle the visibility of project items
const useProjectInView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return { ref, isInView };
};

const Projects = () => {
  return (
    <div className="py-10 bg-gray-800" id="projects">
      <div className="mx-auto max-w-[1440px] flex flex-col py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-1 tracking-wider font-mono">
          My Projects
        </h2>

        <div className="relative mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map(({ name, image, description, tech, link }, index) => {
            const { ref, isInView } = useProjectInView();

            return (
              <div className="" key={index}>
                <h3 className="mb-6 text-xl font-semibold text-center text-gray-300">
                  {name}
                </h3>
                <motion.div
                  ref={ref}
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
                  className="pb-6 rounded-lg border border-gray-600 shadow-lg shadow-gray-600"
                >
                  <a
                    href={link}
                    target="_blank"
                    aria-label={`View ${name} project`}
                  >
                    <img
                      src={image}
                      alt={name}
                      className="rounded-t-lg shadow-lg h-[450px] w-full"
                    />
                  </a>

                  <div className="px-6 md:h-[250px] xl:h-[300px]">
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
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
