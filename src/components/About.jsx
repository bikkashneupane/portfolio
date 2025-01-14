import portfolio from "../assets/portfolio_bg.png";
import { motion } from "framer-motion";
import useAnimation from "../hooks/useAnimation";

const About = () => {
  const { ref, hasAnimated } = useAnimation();

  return (
    <section className="mt-10 dark:text-white" id="about">
      <div className="mx-auto max-w-5xl px-3 lg:px-0">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          About
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 ">
          <div className="mt-2 text-justify">
            <p>
              I am a highly motivated and results-driven Full Stack Developer
              with a solid foundation in both front-end and back-end
              technologies, including React.js, Node.js, Express.js and MongoDB.
              My expertise lies in building scalable, high-performance web
              applications that prioritize intuitive user experiences and
              robust, efficient backend systems.
              <br />
              <br />
              With a proven ability to lead projects and collaborate effectively
              with cross-functional teams, I adapt quickly to new technologies,
              ensuring I stay at the forefront of industry trends. I am
              passionate about delivering innovative solutions that enhance
              business success and drive user satisfaction.
              <br />
              <br />
              My continuous dedication to learning and solving complex
              challenges empowers me to create impactful digital solutions that
              not only meet but exceed expectations.
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
            {/* <div className="mt-3 w-full border dark:border-gray-700 border-gray-300 py-4 rounded-md flex justify-between px-5 items-center font-semibold text-teal-600 dark:text-teal-500">
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
            </div> */}
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1.5, type: "tween" }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            className="flex items-end justify-center"
          >
            <img
              src={portfolio}
              alt="Bikash"
              className="h-[350px] lg:h-[380px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
