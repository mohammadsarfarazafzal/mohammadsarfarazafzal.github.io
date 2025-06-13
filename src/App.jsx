import React from "react";
import HeadRoom from "react-headroom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <HeadRoom><Navbar /></HeadRoom>
      <Hero />      
      <About id="about" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;