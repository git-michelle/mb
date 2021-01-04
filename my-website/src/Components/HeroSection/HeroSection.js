import React, { Fragment } from "react";

const HeroSection = () => {
  return (
    <Fragment>
      <section className="hero">
        <div className="hero-sphere box-shadow">
          <div className="hero-sphere-inner box-shadow"></div>
        </div>
        <div className="hero-text">
          <h1 className="hero-text-name">Hi, I'm Michelle</h1>
          <h2 className="hero-text-desc">Front-End Developer</h2>
          <h2 className="hero-text-desc">UX Enthusiast</h2>
          <h2 className="hero-text-desc">Researcher</h2>
        </div>

        {/* bottom wave  */}
        <svg className="hero-wave" viewBox="0 0 1960 148">
          <path d="M0,22.1V148h1960V79.7c-194.4,31.4-348,35.4-445.2,34.2C969,108.6,923.1,1,503.3,0C341.2-0.4,75.2,10.5,0,22.1z" />
        </svg>
      </section>
    </Fragment>
  );
};

export default HeroSection;