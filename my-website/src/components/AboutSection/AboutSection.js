import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="about fullwidth" id="about">
      <div className="about-content container-centered-content">
        <h2 class="section-heading">About</h2>
        <p>
          I'm a front-end developer with full-stack experience, based in
          beautiful BC.
          <br />
          With a master's degree in cognitive systems, the intersection between
          psychology and computer science, I am also passionate about research
          and user experience.
          <br />
          <Link to="/more" class="btn btn-outline">
            Learn More
          </Link>
          <br />
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
