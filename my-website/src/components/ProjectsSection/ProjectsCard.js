import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="card">
      {/* front  */}
      <div className="card-side card-side--front">
        <div className={`card-img card-img-${props.id}`}>&nbsp;</div>
        <div className="card-project-overview">
          <h3
            className={`card-project-heading card-project-heading-${props.id}`}
          >
            {props.projectName}
          </h3>
          <p className="card-project-description">{props.description}</p>
        </div>
      </div>

      {/* Back */}
      <div className={`card-side card-side--back card-side--back-${props.id}`}>
        <div className="card-details">
          <ul>
            {props.techList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card-links">
          <a href={props.siteURL} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="card-links-icon" />
          </a>
          <a href={props.srcCode} target="_blank" rel="noopener noreferrer">
            <FaGithub className="card-links-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
