import React from "react";

const ProjectCard = React.memo(function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div className="project-card__image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card__overlay">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--small">
            GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn--small btn--outline">
              Live Demo
            </a>
          )}
        </div>
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
});

export default ProjectCard;