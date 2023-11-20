// Main.jsx
import React from 'react';
import { Link, Element } from 'react-scroll';
import AboutSection from './sections/about/About-section.component';
import NavBar from '../navigation/NavBar';
import Projects from './sections/projects/Projects.component';
import ParticleBackground from './particle-background/ParticleBackground';
import WorkComponent from './sections/work/Work.Component';
import { MainContainer, ContentContainer, SectionLink, SectionContainer } from './main.styles.js';

const Main = () => {
  return (
    <MainContainer>
    <ParticleBackground />
    <NavBar />

    <ContentContainer>
      <SectionContainer>
        <SectionLink to="about" spy={true} smooth={true} offset={-70} duration={500}>
          About
        </SectionLink>
        <SectionLink to="projects" spy={true} smooth={true} offset={-70} duration={500}>
          Projects
        </SectionLink>
        <SectionLink to="work" spy={true} smooth={true} offset={-70} duration={500}>
          Work
        </SectionLink>

      </SectionContainer>

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
