import portfolio from "../assets/portfolio.png";
import library from "../assets/library.png";
import ntdl from "../assets/ntdl.png";
import movie from "../assets/movie.png";
import pagination from "../assets/pagination.png";
import netflixgpt from "../assets/netflix_gpt.png";
import vikiasmy_watch from "../assets/Vikiasmy_watches.png";
import vikiasmy_watch_2 from "../assets/vikiasmy_watches/Vikiasmy_watches_2.png";
import vikiamy_admin_cms from "../assets/Vikiasmy_Admin_CMS.png";

export const projects = [
  {
    name: "Vikiasmy's Watch Haven",
    thumbnail: vikiasmy_watch,
    images: [vikiasmy_watch, vikiasmy_watch_2],
    description:
      "A full-stack e-commerce platform specializing in luxury watches. Features a dynamic content management system for seamless product updates and management. Experience secure payments, user-friendly design, and high-quality thumbnails, all deployed to the cloud.",
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
    githib: "https://github.com/bikkashneupane/Store_Front_UI",
    linkedin:
      "https://www.linkedin.com/posts/bikkashneupane_mern-react-node-activity-7233743990376820736-82qa?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Vikiamy's Admin CMS",
    thumbnail: vikiamy_admin_cms,
    description:
      "An advanced Admin CMS for Vikiamy’s, designed to streamline the management of products and user data. Features a user-friendly interface for efficient content management, with secure access controls and robust backend functionalities.",
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
      "A personal portfolio showcasing my skills, projects, and experience as a Full Stack Developer. Built with a clean and modern design using React and Tailwind CSS, the website highlights my journey, technical expertise, and the innovative projects I've worked on. It's designed to offer an engaging user experience, reflecting my proficiency in front-end and back-end technologies.",
    tech: ["React", "Tailwind"],
    link: "https://info.bikashneupane.com/",
    github: "https://github.com/bikkashneupane/portfolio",
  },
  {
    name: "Netflix GPT (Ongoing...)",
    thumbnail: netflixgpt,
    description:
      "A cutting-edge Netflix clone integrated with Chat-GPT to enhance your search experience. This project aims to provide an intuitive interface for browsing and discovering movies and TV shows. Utilize advanced AI-driven search capabilities to find content effortlessly. Currently under development, this project showcases the integration of real-time AI assistance with popular streaming services.",
    tech: ["React", "Tailwind", "TMDB API", "Firebase"],
    link: "https://netflix-gpt-d1382.web.app",
    github: "https://github.com/bikkashneupane/NetflixGPT",
  },
  {
    name: "Digital Library Portal",
    thumbnail: library,
    description:
      "A comprehensive library management system that allows users to borrow and return books, track borrowing history, and leave reviews. Built with a focus on accessibility and user experience, this platform simplifies library management for both users and administrators.",
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
      "A productivity app designed to help users track unproductive habits. Visualize the time spent on tasks you shouldn't be doing and reallocate your hours towards more productive activities. Simple, intuitive, and effective task management.",
    tech: ["React", "Node", "Express", "Mongo DB", "Bootstrap"],
    link: "https://not-to-do-list-frontend-react-qlsp.vercel.app",
  },
  {
    name: "Movie Wishlist Organizer",
    thumbnail: movie,
    description:
      "An engaging web app that lets users search, categorize, and organize their favorite movies using real-world API data. Create custom movie categories like action, drama, and more. Ideal for movie enthusiasts looking to manage their watchlist.",
    tech: ["React", "Bootstrap", "Axios"],
    link: "https://movie-list-react-fawn.vercel.app",
    github: "https://github.com/bikkashneupane/not-to-do-list-frontend-react",
  },
  {
    name: "Paginate Pro",
    thumbnail: pagination,
    description:
      "A user-friendly web application that demonstrates the fundamentals of pagination. It provides a simple and clear visual example of handling large data sets by breaking them into manageable pages using React and Tailwind CSS. Perfect for developers learning how to efficiently navigate through data-heavy content.",
    tech: ["React", "Tailwind"],
    link: "https://pagination-simplified.vercel.app/",
    github: "https://github.com/bikkashneupane/Pagination-Simplified",
  },
];
