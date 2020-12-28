import React from "react";
import { FaCode, FaServer, FaPencilRuler } from "react-icons/fa";

const SkillsCard = (props) => {
  return (
    <div className="skills-card">
      {props.cardTitle === "Front-End" ? (
        <FaCode className="skills-icon" />
      ) : props.cardTitle === "Back-End" ? (
        <FaServer className="skills-icon" />
      ) : props.cardTitle === "Design" ? (
        <FaPencilRuler className="skills-icon" />
      ) : null}

      <h3 className="card-heading">{props.cardTitle}</h3>
      <ul>
        {props.skillsList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
