import React, { useMemo } from "react";
import skills from "../data/skills";
import SkillCard from "./SkillCard";
import "./Skills.css";

export default function Skills() {
  const skillGroups = useMemo(() => skills, []);

  return (
    <section className="section section--dark" id="skills">
      <div className="container">
        <h2 className="section__title">Tech Stack</h2>
        <p className="section__subtitle">Technologies I work with daily</p>
        <div className="grid grid--skills">
          {skillGroups.map((group) => (
            <SkillCard key={group.category} category={group.category} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
