import portfolio from "../assets/portfolio.png";
import library from "../assets/library.png";
import ntdl from "../assets/ntdl.png";
import movie from "../assets/movie.png";
import pagination from "../assets/pagination.png";
import netflixgpt from "../assets/netflix_gpt.png";
import vikiasmy_watch from "../assets/vikiasmy.png";
import vikiasmy_watch_2 from "../assets/vikiasmy_watches/Vikiasmy_watches_2.png";
import vikiamy_admin_cms from "../assets/Vikiasmy_Admin_CMS.png";

export const projects = [
  {
    name: "Vikiasmy's Watch Haven",
    thumbnail: vikiasmy_watch,
    images: [vikiasmy_watch, vikiasmy_watch_2],
    description:
      "A full-stack e-commerce platform specializing in luxury watches. It offers a dynamic CMS for easy product management, secure payment integration, and a sleek user-friendly design. Built with MERN stack and deployed to the cloud.",
    tech: [
      "React",
      "Node",
      "Express",
      "Mongo DB",
      "Tailwind",
      "JWT",
      "Joi",
      "Bcrypt",
      "Redux",
      "Git",
      "Github",
      "Stripe",
    ],
    link: "https://vikiasmy.bikashneupane.com",
    github: "https://github.com/bikkashneupane/Store_Front_UI",
    linkedin:
      "https://www.linkedin.com/posts/bikkashneupane_mern-react-node-activity-7233743990376820736-82qa?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Vikiamy's Admin CMS",
    thumbnail: vikiamy_admin_cms,
    description:
      "A robust Admin CMS designed for Vikiamy's e-commerce platform. It allows for efficient product and user data management with secure access control and a clean interface. Features include product updates, user management, and a powerful backend system.",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Tailwind",
      "JWT",
      "Joi",
      "Bcrypt",
      "Redux",
      "Git",
      "GitHub",
    ],
    link: "https://vikiasmy-admin.bikashneupane.com/",
    github: "https://github.com/bikkashneupane/ui_admin_cms",
    linkedin:
      "https://www.linkedin.com/posts/bikkashneupane_mern-react-node-activity-7236701816988536835-4kKF?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "My Portfolio Website",
    thumbnail: portfolio,
    description:
      "A personal portfolio website that highlights my skills, projects, and experience as a Full Stack Developer. It features a modern design and interactive user interface, showcasing my technical expertise in front-end and back-end technologies.",
    tech: ["React", "Tailwind"],
    link: "https://info.bikashneupane.com/",
    github: "https://github.com/bikkashneupane/portfolio",
  },
  {
    name: "Netflix GPT (Ongoing...)",
    thumbnail: netflixgpt,
    description:
      "A Netflix clone integrated with Chat-GPT, providing AI-powered search to enhance content discovery. The project features a streamlined interface for browsing movies and TV shows, utilizing advanced real-time AI-driven searches for a seamless experience.",
    tech: ["React", "Tailwind", "TMDB API", "Firebase"],
    link: "https://netflix-gpt-d1382.web.app",
    github: "https://github.com/bikkashneupane/NetflixGPT",
  },
  {
    name: "Digital Library Portal",
    thumbnail: library,
    description:
      "A digital library management system allowing users to borrow and return books, track borrowing history, and leave reviews. Built for ease of use with a focus on accessibility, it simplifies library operations for both users and administrators.",
    tech: [
      "React",
      "Node",
      "Express",
      "Mongo DB",
      "Bootstrap",
      "JWT",
      "Joi",
      "Bcrypt",
    ],
    link: "https://library-management-mern.vercel.app",
    github:
      "https://github.com/bikkashneupane/MERN_FullStack_Frontend_Library_Management",
  },
  {
    name: "Not-To-Do List App",
    thumbnail: ntdl,
    description:
      "A productivity app that helps users track and visualize unproductive tasks. It encourages users to identify bad habits and focus on more productive activities. The app offers a simple and effective way to manage tasks you should avoid.",
    tech: ["React", "Node", "Express", "Mongo DB", "Bootstrap"],
    link: "https://not-to-do-list-frontend-react-qlsp.vercel.app",
  },
  {
    name: "Movie Wishlist Organizer",
    thumbnail: movie,
    description:
      "A movie organizing app that lets users search, categorize, and manage their movie watchlist using real-world API data. Ideal for movie enthusiasts who want to create custom movie categories and track their favorite films.",
    tech: ["React", "Bootstrap", "Axios"],
    link: "https://movie-list-react-fawn.vercel.app",
    github: "https://github.com/bikkashneupane/not-to-do-list-frontend-react",
  },
  {
    name: "Paginate Pro",
    thumbnail: pagination,
    description:
      "A simple pagination demo application that breaks large data sets into manageable pages using React and Tailwind CSS. Ideal for developers learning how to implement pagination in real-world applications.",
    tech: ["React", "Tailwind"],
    link: "https://pagination-simplified.vercel.app/",
    github: "https://github.com/bikkashneupane/Pagination-Simplified",
  },
];
