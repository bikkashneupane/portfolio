import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-gray-200">
      <Hero />
      <Navigation />
      <div className="flex flex-col gap-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
