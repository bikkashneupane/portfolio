import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const contact = [
  {
    icon: <FaEnvelope className="text-2xl text-white" />,
    link: "thisisbikkash@gmail.com",
    mail: true,
  },
  {
    icon: <FaPhoneAlt className="text-2xl text-white" />,
    phone: "0451803981",
  },
  {
    icon: <FaGithub className="text-2xl text-white" />,
    link: "https://github.com/bikkashneupane",
    name: "/bikkashneupane",
  },
  {
    icon: <FaLinkedin className="text-2xl text-white" />,
    link: "https://www.linkedin.com/in/bikkashneupane/",
    name: "/bikkashneupane",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="my-16 py-10 border-y border-y-gray-800 text-sm"
    >
      <div className="mx-auto max-w-5xl flex flex-col">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-yellow-500 text-center mb-10">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-4 mb-16">
            Lets get in touch! Feel free to reach out via email or phone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6 pb-8 px-5 rounded-lg self-center">
            {contact.map(({ icon, link, phone, mail, name }, index) =>
              !phone ? (
                <a
                  key={index}
                  href={mail ? `mailto:${link}` : link}
                  target="_blank"
                  className="text-lg text-gray-400 flex lg:flex-col items-center gap-4 md:gap-2 border border-gray-700 py-3 px-4 rounded-md hover:bg-teal-600 transition-all delay-75 hover:text-white ease-in-out"
                >
                  {icon}
                  <span>{name ?? link}</span>
                </a>
              ) : (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="text-lg text-gray-400 flex lg:flex-col items-center gap-4 md:gap-2 border border-gray-700 py-3 px-4 rounded-md hover:bg-teal-600 transition-all delay-75 hover:text-white ease-in-out"
                >
                  {icon}
                  <span>{phone}</span>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
