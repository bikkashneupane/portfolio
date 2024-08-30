import bikash from "../assets/bikash.png";

const About = () => {
  return (
    <section className="bg-gray-800 py-20 text-gray-400" id="about">
      <div className="mx-auto max-w-6xl flex flex-col py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:px-20">
          <div className="flex flex-col gap-8 px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-1 tracking-wider font-mono">
              About Me
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-justify">
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
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-500">
                Qualification
              </h3>
              <p className="text-base">
                Bachelors Degree, Central Queensland University
              </p>
              <h3 className="text-xl font-semibold text-yellow-500">
                Location
              </h3>
              <p className="text-base">Sydney, Australia</p>
            </div>
          </div>
          <div className="flex justify-center items-center overflow-hidden">
            <img
              src={bikash}
              alt="Bikash"
              className="h-[300px] rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
