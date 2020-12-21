import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="card">
      {/* front  */}
      <div className="card-side card-side--front">
        <div className={`card-img card-img-${props.id}`}>&nbsp;</div>
        <div className="card-project-heading">
          <h3>
            <span
              className={`card-project-heading-span card-project-heading-span-${props.id}`}
            >
              {props.projectName}
            </span>{" "}
          </h3>
        </div>
        <div className="card-details">
          <ul>
            {props.techList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Back */}
      <div className={`card-side card-side--back card-side--back-${props.id}`}>
        <div className="card-project-description">
          <div className="card-back-info">
            <p>{props.description}</p>
          </div>
          <button href="!#" className="btn-light">
            {" "}
            <FaPlayCircle className={`btn-icon btn-icon-${props.id}`} />
            &nbsp;Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
