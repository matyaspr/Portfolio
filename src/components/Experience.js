import React from "react";
import experience from "../data/experience";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <p className="section__subtitle">Professional background</p>
        <div className="timeline">
          {experience.map((exp, i) => (
            <TimelineItem key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
