import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Navigation from "./pages/Navigation";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";
import "./App.css";
import ParticlesBg from "./components/ParticlesBg";
import DarkMode from "./components/DarkMode";
import Experience from "./pages/Experience";
import useDark from "./hooks/useDark";
import { motion, useScroll } from "motion/react";

function App() {
  const { isDark, toggleDarkMode } = useDark();
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: "0px",
          left: "0",
          right: "0",
          height: "3px",
          originX: "0",
          backgroundColor: "#9C27B0",
          zIndex: "1000",
        }}
      />
      <>
        <Navigation />
        <ParticlesBg />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <DarkMode isDark={isDark} toggleDarkMode={toggleDarkMode} />
      </>
    </>
  );
}

export default App;
