import portfolio from "../assets/portfolio_bg.png";

const About = () => {
  return (
    <section className="mt-10 dark:text-white" id="about">
      <div className="mx-auto max-w-5xl px-3 lg:px-0">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          About
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 ">
          <div className="py-2 text-justify">
            <p>
              I am a dedicated Software Developer with a Bachelor's degree in
              Information Technology, specializing in full-stack development
              using the MERN stack (MongoDB, Express, React, and Node.js).
              <br />
              <br />
              My expertise spans both frontend and backend development, allowing
              me to build seamless and efficient web applications. With a keen
              eye for design and a strong passion for crafting innovative
              digital solutions, I continuously strive to deliver exceptional
              user experiences and high-quality code.
              <br />
              <br />I thrive on solving complex problems and am always eager to
              learn new technologies and improve my skills.
            </p>
            <div className="mt-3">
              <h3 className="font-semibold dark:text-teal-500 text-teal-600">
                Qualification
              </h3>
              <p>Bachelors Degree, Central Queensland University</p>
              <h3 className="font-semibold dark:text-teal-500 text-teal-600 mt-2">
                Location
              </h3>
              <p>Sydney, Australia</p>
            </div>
            <div className="mt-3 w-full border dark:border-gray-700 border-gray-300 py-4 rounded-md flex justify-between px-5 items-center font-semibold text-teal-600 dark:text-teal-500">
              <div className="flex flex-col lg:flex-row lg:gap-1 items-center">
                <span className="text-yellow-500">IT</span>
                <span>Graduate</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-1 items-center">
                <span className="text-yellow-500">1+ Years</span>
                <span>Experience</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-1 items-center">
                <span className="text-yellow-500">10+</span>
                <span>Projects</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={portfolio}
              alt="Bikash"
              className="h-[350px] lg:h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
