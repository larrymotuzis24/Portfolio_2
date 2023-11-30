// Main.jsx
import React from "react";
import { Element } from "react-scroll";
import AboutSection from "./sections/about/About-section.component";
import Projects from "./sections/projects/Projects.component";
import ParticleBackground from "./particle-background/ParticleBackground";
import WorkComponent from "./sections/work/Work.Component";
import { MainContainer, ContentContainer } from "./main.styles.js";

const Main = () => {
  return (
    <MainContainer>
      <ParticleBackground />
      <ContentContainer>
        <Element name="about">
          <AboutSection />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="work">
          <WorkComponent />
        </Element>
      </ContentContainer>
    </MainContainer>
  );
};

export default Main;
