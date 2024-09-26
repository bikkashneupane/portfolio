import bikash from "../assets/bikash.png";

const About = () => {
  return (
    <section className="py-16 bg-gray-900 text-gray-300" id="about">
      <div className="mx-auto max-w-7xl flex flex-col px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">
          <div className="lg:col-span-2 space-y-4 px-2">
            <h2 className="text-xl md:text-3xl font-bold text-center text-teal-500 mb-10 tracking-wider">
              ABOUT ME
            </h2>
            <p className="text-base leading-relaxed text-justify">
              I am a dedicated Software Developer with a Bachelor's degree in
              Information Technology, specializing in full-stack development
              using the MERN stack (MongoDB, Express, React, and Node.js). My
              expertise spans both frontend and backend development, allowing me
              to build seamless and efficient web applications. With a keen eye
              for design and a strong passion for crafting innovative digital
              solutions, I continuously strive to deliver exceptional user
              experiences and high-quality code. I thrive on solving complex
              problems and am always eager to learn new technologies and improve
              my skills.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#FFD700]">
                Qualification
              </h3>
              <p className="text-base">
                Bachelors Degree, Central Queensland University
              </p>
              <h3 className="text-xl font-semibold text-[#FFD700]">Location</h3>
              <p className="text-base">Sydney, Australia</p>
            </div>
          </div>
          <div className="flex justify-center items-center overflow-hidden">
            <img src={bikash} alt="Bikash" className="h-[450px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
