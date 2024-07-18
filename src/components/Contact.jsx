import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const contact = [
    {
      icon: <FaEnvelope className="text-2xl text-white" />,
      name: "thisisbikkash@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-white" />,
      name: "0451803981",
    },
    {
      icon: <FaGithub className="text-2xl text-white" />,
      name: "/bikkashneupane",
    },
    {
      icon: <FaLinkedin className="text-2xl text-white" />,
      name: "/bikkashneupane",
    },
  ];
  return (
    <section id="contact" className="py-10">
      <div className="mx-auto max-w-[1440px] flex flex-col px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-widest font-mono text-yellow-500 pt-10">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-4 mb-2">
            Let's get in touch! Feel free to reach out via email or phone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 pb-8 p-12 rounded-lg self-center">
            {contact.map(({ icon, name }, index) => (
              <a
                key={index}
                href="mailto:your.email@example.com"
                className="text-lg text-gray-400 hover:underline flex lg:flex-col items-center gap-4 md:gap-2"
              >
                {icon}
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
