import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="card">
      {/* front  */}
      <div className="card-side card-side--front">
        <div className="card-img card-img-1">&nbsp;</div>
        <div className="card-project-heading">
          <h3>
            <span className="card-project-heading-span card-project-heading-span-1">
              OpenShelf
            </span>{" "}
          </h3>
        </div>
        <div className="card-details">
          <ul>
            <li>React</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>

      {/* Back */}
      <div className="card-side card-side--back card-side--back-1">
        <div className="card-cta">
          <div className="card-back-info">
            <p>some info</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              cum.
            </p>
          </div>
          <button href="!#" class="btn-light">
            {" "}
            <FaPlayCircle className="btn-icon" />
            &nbsp;Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
