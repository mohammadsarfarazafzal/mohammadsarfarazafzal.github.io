import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <Hero />
      <About id="about" />
      <Projects id="projects" />
    </div>
  );
}

export default App;