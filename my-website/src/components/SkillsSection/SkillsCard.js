import React from "react";
import { FaCode } from "react-icons/fa";

const SkillsCard = () => {
  return (
    <div className="skills-card">
      <FaCode className="skills-icon" />
      <h3>Front-End</h3>
      <p>
        HTML <br /> CSS3 | SASS <br /> JavaScript <br /> React
      </p>
    </div>
  );
};

export default SkillsCard;
