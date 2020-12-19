import React from "react";
import SkillsCard from "./SkillsCard";

const SkillSection = () => {
  return (
    <section className="skills fullwidth" id="skills">
      <div className="skills-content container-centered-content">
        <h2 className="section-heading">Skills</h2>
        <div className="container-flex">
          <SkillsCard />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
