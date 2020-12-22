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
            description="A full-stack web app for people to share books within their community."
            techList={[
              "React | Material-UI",
              "Express | NodeJS",
              "MongoDB",
              "Google Books API",
              "Collaborated with 2 devs",
              "Daily standups",
            ]}
            siteURL="https://openshelf.netlify.app/"
            srcCode="https://github.com/chingu-voyages/v25-bears-team-06"
          />
          <ProjectsCard
            id="2"
            projectName="Gift Angels"
            description="A responsive website for a Ugandan, non-profit organization."
            techList={[
              "HTML",
              "CSS | SASS",
              "Vanilla JS",
              "Collaborated with UX team",
              "Remote project, 4 time zones",
            ]}
            siteURL="http://www.giftangelsfoundation.org/"
            srcCode="https://github.com/michellecan/ga-final"
          />
        </div>
      </div>
      <hr className="section-divider" />
    </section>
  );
};

export default ProjectsSection;
