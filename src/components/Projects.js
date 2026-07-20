import React, { useState, useMemo } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const techs = useMemo(
    () => ["All", ...new Set(projects.flatMap((p) => p.tech))],
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter, projects]
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section__title">Featured Projects</h2>
        <p className="section__subtitle">Projects I've built and contributed to</p>

        <div className="filters">
          {techs.slice(0, 8).map((t) => (
            <button
              key={t}
              className={`filter-btn ${filter === t ? "filter-btn--active" : ""}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
