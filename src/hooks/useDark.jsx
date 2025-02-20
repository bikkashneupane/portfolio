import { useEffect, useState } from "react";

const useDark = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.toggle("dark", isDark); // Toggles based on isDark value
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleDarkMode };
};

export default useDark;
