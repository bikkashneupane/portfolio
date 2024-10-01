import portfolio from "../assets/portfolio_bg.png";

const About = () => {
  return (
    <section className="py-16 text-gray-400" id="about">
      <div className="mx-auto max-w-5xl px-4 lg:px-0">
        <h2 className="text-xl md:text-2xl font-bold text-yellow-500 text-center mb-10">
          About
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-5 ">
          <div className="space-y-4 py-2">
            <p className="text-justify">
              I am a dedicated Software Developer with a Bachelor's degree in
              Information Technology, specializing in full-stack development
              using the MERN stack (MongoDB, Express, React, and Node.js).
            </p>
            <p className="text-justify">
              My expertise spans both frontend and backend development, allowing
              me to build seamless and efficient web applications.
            </p>
            <p className="text-justify">
              With a keen eye for design and a strong passion for crafting
              innovative digital solutions, I continuously strive to deliver
              exceptional user experiences and high-quality code.
            </p>
            <p className="text-justify">
              I thrive on solving complex problems and am always eager to learn
              new technologies and improve my skills.
            </p>
            <div className="space-y-2 text-xs">
              <h3 className="text-xl font-semibold text-teal-500">
                Qualification
              </h3>
              <p className="text-base">
                Bachelors Degree, Central Queensland University
              </p>
              <h3 className="text-xl font-semibold text-teal-500">Location</h3>
              <p className="text-base">Sydney, Australia</p>
            </div>
            <div className="w-full border border-gray-700 py-4 rounded-md flex justify-between px-5 items-center font-semibold text-teal-500">
              <div className="flex flex-col lg:flex-row lg:gap-1 items-center">
                <span className="text-yellow-500">IT</span>
                <span>Graduate</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-1 items-center">
                <span className="text-yellow-500">2+ Years</span>
                <span>Experience</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-1 items-center">
                <span className="text-yellow-500">10+</span>
                <span>Projects</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center overflow-hidden">
            <img src={portfolio} alt="Bikash" className="h-[450px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
