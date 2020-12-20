import React from "react";
import { FaCode, FaServer, FaPencilRuler } from "react-icons/fa";

const SkillsCard = (props) => {
  return (
    <div className="skills-card">
      {props.id === 0 ? (
        <FaCode className="skills-icon" />
      ) : props.id === 1 ? (
        <FaServer className="skills-icon" />
      ) : props.id === 2 ? (
        <FaPencilRuler className="skills-icon" />
      ) : null}

      <h3 className="card-heading">{props.cardTitle}</h3>
      <ul>
        {props.skillsList.map((skill) => (
          <li key={props.id}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
