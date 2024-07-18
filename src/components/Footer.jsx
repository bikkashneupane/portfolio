const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-2 bg-gray-800 text-gray-300 flex items-center justify-center min-h-[180px] text-lg font-mono tracking-wider">
      {currentYear} &copy; Bikash Neupane | All Rights Reserved
    </footer>
  );
};

export default Footer;
