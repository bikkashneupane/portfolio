import portfolio from "../assets/portfolio.png";
import pagination from "../assets/pagination.png";
import netflixgpt from "../assets/netflix_gpt.png";
import vikiasmy_watch from "../assets/vikiasmy.png";
import vikiamy_admin_cms from "../assets/Vikiasmy_Admin_CMS.png";
import github_bikash from "../assets/github_bikash.mov";

export const projects = [
  {
    name: "React E-Commerce Full Stack",
    thumbnail: vikiasmy_watch,
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
    link: "https://vikiasmy-watches.vercel.app",
    github: "https://github.com/bikkashneupane/Store_Front_UI",
    linkedin:
      "https://www.linkedin.com/posts/bikkashneupane_mern-react-node-activity-7233743990376820736-82qa?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "React Admin CMS Full Stack",
    thumbnail: vikiamy_admin_cms,
    description:
      "An admin CMS for managing products and users on Vikiamy's e-commerce platform, featuring secure access and a user-friendly interface.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind", "Redux"],
    link: "https://vikiasmy-watches-admin-cms.vercel.app",
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
    name: "Paginate Pro",
    thumbnail: pagination,
    description:
      "A pagination demo that breaks large datasets into pages using React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    link: "https://pagination-simplified.vercel.app/",
    github: "https://github.com/bikkashneupane/Pagination-Simplified",
  },
  {
    name: "More Projects",
    video: github_bikash,
    description:
      " Explore more projects on my github page ranging both simpler and complex projects.",
    github: "https://github.com/bikkashneupane?tab=repositories",
  },
];
