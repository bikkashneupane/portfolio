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
      "A full-stack e-commerce site for luxury watches with a dynamic CMS and secure payment options. Built with the MERN stack.",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Tailwind",
      "Redux",
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
      "An admin CMS for managing products and users on Vikiamy's e-commerce platform, featuring secure access and a user-friendly interface.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind", "Redux"],
    link: "https://vikiasmy-admin.bikashneupane.com",
    github: "https://github.com/bikkashneupane/ui_admin_cms",
    linkedin:
      "https://www.linkedin.com/posts/bikkashneupane_mern-react-node-activity-7236701816988536835-4kKF?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "My Portfolio Website",
    thumbnail: portfolio,
    description:
      "A personal portfolio showcasing my skills and projects as a Full Stack Developer, with a modern design and interactive UI.",
    tech: ["React", "Tailwind"],
    link: "https://bikashneupane.com",
    github: "https://github.com/bikkashneupane/portfolio",
  },
  {
    name: "Netflix GPT (Ongoing...)",
    thumbnail: netflixgpt,
    description:
      "A Netflix clone with Chat-GPT integration for AI-powered content search and an easy browsing experience.",
    tech: ["React", "Tailwind", "TMDB API", "Firebase"],
    link: "https://netflix-gpt-d1382.web.app",
    github: "https://github.com/bikkashneupane/NetflixGPT",
  },
  {
    name: "Digital Library Portal",
    thumbnail: library,
    description:
      "A digital library system for managing book loans and reviews, focusing on user-friendly operations.",
    tech: ["React", "Node", "Express", "MongoDB", "Bootstrap"],
    link: "https://library-management-mern.vercel.app",
    github:
      "https://github.com/bikkashneupane/MERN_FullStack_Frontend_Library_Management",
  },
  {
    name: "Not-To-Do List App",
    thumbnail: ntdl,
    description:
      "A productivity app to track unproductive tasks and help users focus on positive habits.",
    tech: ["React", "Node", "Express", "MongoDB", "Bootstrap"],
    link: "https://not-to-do-list-frontend-react-qlsp.vercel.app",
  },
  {
    name: "Movie Wishlist Organizer",
    thumbnail: movie,
    description:
      "An app to search and manage your movie watchlist, allowing custom categories for movie enthusiasts.",
    tech: ["React", "Bootstrap"],
    link: "https://movie-list-react-fawn.vercel.app",
    github: "https://github.com/bikkashneupane/not-to-do-list-frontend-react",
  },
  {
    name: "Paginate Pro",
    thumbnail: pagination,
    description:
      "A pagination demo that breaks large datasets into pages using React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    link: "https://pagination-simplified.vercel.app/",
    github: "https://github.com/bikkashneupane/Pagination-Simplified",
  },
];
