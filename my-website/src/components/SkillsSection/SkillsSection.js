import React from "react";
import SkillsCard from "./SkillsCard";

const SkillSection = () => {
  return (
    <section className="skills fullwidth" id="skills">
      <div className="skills-content container-centered-content">
        <h2 className="section-heading">Skills</h2>
        <div className="container-flex">
          <SkillsCard
            id={0}
            cardTitle="Front-End"
            skillsList={["HTML", "CSS3 | SASS", "JavaScript", "React"]}
          />
          <SkillsCard
            id={1}
            cardTitle="Back-End"
            skillsList={["NodeJS", "Express", "MongoDB", "MySQL"]}
          />
          <SkillsCard
            id={2}
            cardTitle="Design"
            skillsList={["Figma", "Balsamiq", "Inkscape"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
