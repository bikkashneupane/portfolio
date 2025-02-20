import portfolio from "../assets/portfolio_bg.png";
import { motion } from "framer-motion";
import useAnimation from "../hooks/useAnimation";

const About = () => {
  const { ref, hasAnimated } = useAnimation();

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5, // Stagger animation by index
        duration: 0.8,
        type: "ease-out",
        stiffness: 40,
      },
    }),
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.5, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 30,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        yoyo: Infinity, // Smoothly oscillates the scale effect
        duration: 0.8,
      },
    },
  };

  return (
    <section className="mt-10 dark:text-white" id="about">
      <div className="mx-auto max-w-5xl px-3 lg:px-0">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          About
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
          {/* Animated Text */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            className="mt-2 text-justify"
          >
            {[
              "I am a highly motivated and results-driven Full Stack Developer with a solid foundation in both front-end and back-end technologies, including React.js, Node.js, Express.js, and MongoDB.",
              "My expertise lies in building scalable, high-performance web applications that prioritize intuitive user experiences and robust, efficient backend systems.",
              "With a proven ability to lead projects and collaborate effectively with cross-functional teams, I adapt quickly to new technologies, ensuring I stay at the forefront of industry trends.",
              "I am passionate about delivering innovative solutions that enhance business success and drive user satisfaction.",
              "My continuous dedication to learning and solving complex challenges empowers me to create impactful digital solutions that not only meet but exceed expectations.",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                custom={index}
                variants={textAnimation}
                className="mb-4"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hasAnimated ? 1 : 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <h3 className="font-semibold dark:text-teal-500 text-teal-600">
                Qualification
              </h3>
              <p>Bachelors Degree, Central Queensland University</p>
              <h3 className="font-semibold dark:text-teal-500 text-teal-600 mt-2">
                Location
              </h3>
              <p>Sydney, Australia</p>
            </motion.div>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileHover="hover"
            variants={imageAnimation}
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
