const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-2 text-gray-300 flex items-center justify-center h-[150px] tracking-wider">
      {currentYear} &copy; Bikash Neupane | All Rights Reserved
    </footer>
  );
};

export default Footer;
