import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Full Stack Developer",
        2000,
        "Designer",
        2000,
        "Developer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      className="text-2xl text-yellow-500 font-extrabold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
