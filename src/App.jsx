import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";
import ParticlesBg from "./components/ParticlesBg";
import DarkMode from "./components/DarkMode";
import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.toggle("dark", isDark); // Toggles based on isDark value
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <Navigation />
      {/* {!isDark && <ParticlesBg />} */}
      <ParticlesBg />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <DarkMode isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default App;
