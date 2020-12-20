import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import AboutSection from "../Components/AboutSection/AboutSection";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";

const HomePage = () => {
  return (
    <div className="home full-width">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
