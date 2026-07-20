import { useCallback } from "react";
import "./Hero.css";

const codeBlock = (
  <pre>{`const developer = {
  name: "Tu Nombre",
  role: "Full-Stack Dev",
  stack: ["React", "Node", "AWS"],
  passion: "Clean Code"
};`}</pre>
);

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const handleScrollToProjects = useCallback(() => scrollTo("projects"), []);
  const handleScrollToContact = useCallback(() => scrollTo("contact"), []);

  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__tag">Full-Stack Developer</span>
          <h1 className="hero__title">
            Building <span className="highlight">digital products</span> that make an impact
          </h1>
          <p className="hero__description">
            Software engineer with 4+ years of experience building scalable web applications.
            Passionate about clean code, system design, and delivering exceptional user experiences.
          </p>
          <div className="hero__actions">
            <button
              className="btn btn--primary"
              onClick={handleScrollToProjects}
            >
              View Projects
            </button>
            <button
              className="btn btn--outline"
              onClick={handleScrollToContact}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__code-block">{codeBlock}</div>
        </div>
      </div>
    </section>
  );
}
