import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tu Nombre. Built with React.</p>
        </div>
      </footer>
    </ThemeProvider>
  );
}
