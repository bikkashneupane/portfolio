import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
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
            {contact.map(({ icon, link, phone, mail, name }, index) =>
              !phone ? (
                <a
                  key={index}
                  href={mail ? `mailto:${link}` : link}
                  target="_blank"
                  className="text-lg text-gray-400 hover:underline flex lg:flex-col items-center gap-4 md:gap-2"
                >
                  {icon}
                  <span>{name ?? link}</span>
                </a>
              ) : (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="text-lg text-gray-400 hover:underline flex lg:flex-col items-center gap-4 md:gap-2"
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
