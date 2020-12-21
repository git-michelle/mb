import React from "react";
import ProjectsCard from "./ProjectsCard";

const ProjectsSection = () => {
  return (
    <section className="projects fullwidth" id="projects">
      <div className="projects-content container-centered-content">
        <h2 className="section-heading">Project Portfolio</h2>
        <div className="container-flex">
          <ProjectsCard
            id="1"
            projectName="OpenShelf"
            techList={[
              "React | Material-UI",
              "Express | NodeJS",
              "MongoDB",
              "Google Books API",
            ]}
            description="A responsive web app for people who want to share books within their community."
          />
          <ProjectsCard
            id="2"
            projectName="Gift Angels"
            techList={["HTML", "CSS | SASS", "Vanilla JS"]}
            description="A responsive website for a Ugandan, non-profit organization."
          />
        </div>
      </div>
      <hr className="section-divider" />
    </section>
  );
};

export default ProjectsSection;
