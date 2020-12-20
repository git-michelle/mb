import React from "react";
import ProjectsCard from "./ProjectsCard";

const ProjectsSection = () => {
  return (
    <section className="projects fullwidth" id="projects">
      <div className="projects-content container-centered-content">
        <h2 className="section-heading">Project Portfolio</h2>
        <div className="container-flex">
          <ProjectsCard />
        </div>
      </div>
      <hr className="section-divider" />
    </section>
  );
};

export default ProjectsSection;
