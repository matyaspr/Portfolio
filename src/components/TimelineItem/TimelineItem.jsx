import React from "react";

const TimelineItem = React.memo(function TimelineItem({ role, company, period, achievements }) {
  return (
    <div className="timeline__item" style={{ contentVisibility: "auto", containIntrinsicSize: "0 200px" }}>
      <div className="timeline__dot" />
      <div className="timeline__content">
        <div className="timeline__header">
          <h3>{role}</h3>
          <span className="timeline__company">{company}</span>
          <span className="timeline__period">{period}</span>
        </div>
        <ul className="timeline__achievements">
          {achievements.map((a, j) => (
            <li key={j}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default TimelineItem;