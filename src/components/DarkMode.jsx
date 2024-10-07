import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

const DarkMode = ({ isDark, toggleDarkMode }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        className="transform transition hover:text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-600 text-gray-300 dark:hover:text-black p-2 rounded-full outline-none"
        onClick={toggleDarkMode}
      >
        {isDark ? (
          <LuSunMedium className="h-7 w-7 focus:ring-0" />
        ) : (
          <FaMoon className="h-6 w-6 focus:ring-0" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
