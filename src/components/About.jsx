import bikash from "../assets/bikash.png";

const About = () => {
  return (
    <section className="bg-gray-800 py-20 text-gray-400" id="about">
      <div className="mx-auto max-w-[992px] flex flex-col py-12 px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-h-min   md:px-20">
          <div className="flex flex-col gap-4 px-2">
            <div className="px-2 flex-1 flex flex-col">
              <h2 className="text-3xl text-center font-bold tracking-widest font-mono text-yellow-500 mb-12">
                About Me
              </h2>
              <p className="text-lg">
                A Software Developer with a Bachelors degree in Information
                Technology, possessing a strong proficiency in the MERN stack
                for both frontend and backend development. Keen eye for design
                and a passion for crafting innovative web applications.
              </p>
              <h1 className="my-4">
                <span className="font-bold">Qualification: </span>
                <span>Bachelors Degree, Central Queensland University</span>
              </h1>
              <h1 className="">
                <span className="font-bold">Location: </span>
                <span>Sydney, Australia</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center overflow-hidden">
            <img src={bikash} alt="" className="h-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
