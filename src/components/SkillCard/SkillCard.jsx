import React from "react";

const SkillCard = React.memo(function SkillCard({ category, items }) {
  return (
    <div className="card skill-card">
      <h3 className="skill-card__category">{category}</h3>
      <ul className="skill-card__list">
        {items.map((item) => (
          <li key={item} className="skill-card__item">{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default SkillCard;