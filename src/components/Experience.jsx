import rebbtechlogo from "../assets/rebbtechlogo.svg";
import freelancelogo from "../assets/freelancelogo.svg";

const Experience = () => {
  return (
    <section id="experience">
      <div className="mx-auto max-w-5xl mt-20 px-3">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          Experience
        </h2>

        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <img src={rebbtechlogo} alt="Rebb Tech Logo" className="w-[40px]" />
            <h1 className="font-bold text-[16px]">Rebb-Tech</h1>
          </div>
          <div className="ml-2 md:ml-12 space-y-2">
            <div className="flex gap-2 justify-between text-[16px] text-teal-500 font-bold">
              <h1>Full Stack Developer</h1>
              <h1>Feb 2024 - Present</h1>
            </div>
            <p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  Developed <strong>My Progress App</strong>, a student tracking
                  system for coding bootcamps.
                </li>
                <li>
                  Built scalable features using{" "}
                  <strong>React.js, Tailwind CSS, Node.js</strong>, and{" "}
                  <strong>MongoDB</strong>.
                </li>
                <li>
                  Designed interactive dashboards with <strong>Chart.js</strong>{" "}
                  and implemented secure JWT authentication.
                </li>
                <li>
                  Streamlined CI/CD workflows using{" "}
                  <strong>GitHub Actions</strong> and practiced Agile
                  methodologies.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-2">
          <div className="flex gap-2 items-center">
            <img
              src={freelancelogo}
              alt="Freelance logo"
              className="w-[40px]"
            />
            <h1 className="font-bold text-[16px]">Freelance Work</h1>
          </div>
          <div className="ml-2 md:ml-12 space-y-2">
            <div className="flex gap-2 justify-between text-[16px] text-teal-500 font-bold">
              <h1>Freelance Software Developer</h1>
              <h1>Jun 2022 - Jan 2024</h1>
            </div>
            <p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  Designed and launched responsive portfolio websites, enhancing
                  clients' online presence.
                </li>
                <li>
                  Built a booking system with integrated service management and
                  secure payment processing.
                </li>
                <li>
                  Ensured code quality and reliability with{" "}
                  <strong>Jest</strong> and streamlined collaboration via{" "}
                  <strong>Git/GitHub</strong>.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
