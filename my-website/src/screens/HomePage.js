import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import AboutSection from "../Components/AboutSection/AboutSection";
import SkillsSection from "../Components/SkillsSection/SkillsSection";

const HomePage = () => {
  return (
    <div className="home full-width">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default HomePage;
