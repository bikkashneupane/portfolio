const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-3 flex items-center justify-center h-[120px] border-t border-t-gray-800">
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 bg-gradient-to-b from-transparent to-teal-500 blur-2xl opacity-20"></div>
      <div className="text-white font-bold tracking-wider">
        {currentYear} &copy; Bikash Neupane | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
