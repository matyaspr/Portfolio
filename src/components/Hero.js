import React from "react";

export default function Hero() {
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
            <a href="#projects" className="btn btn--primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}>
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline" onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__code-block">
            <pre>{`const developer = {
  name: "Tu Nombre",
  role: "Full-Stack Dev",
  stack: ["React", "Node", "AWS"],
  passion: "Clean Code"
};`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
