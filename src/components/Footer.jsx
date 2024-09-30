const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 px-2 text-gray-300 flex items-center justify-center min-h-[180px] text-lg tracking-wider">
      {currentYear} &copy; Bikash Neupane | All Rights Reserved
    </footer>
  );
};

export default Footer;
