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
      <div className="mx-auto max-w-[1440px] flex flex-col gap-24 my-20">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
