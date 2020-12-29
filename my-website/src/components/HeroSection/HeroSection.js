import React, { Fragment } from "react";

const HeroSection = () => {
  return (
    <Fragment>
      <section className="hero full-width-hero">
        <div className="flash-content"></div>
        <div className="hero-content container-centered-content">
          <h1>Hi, I'm Michelle</h1>
          <h3>
            <span className="description description-1">
              Front-End Developer
            </span>
            <span className="description description-2">Researcher</span>
            <span className="description description-3">UX Enthusiast</span>
          </h3>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;
