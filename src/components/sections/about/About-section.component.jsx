// AboutSection.jsx
import React from 'react';
import profilePic from "./IMG_0210.JPG";
import { AboutContainer, AboutContent, ProfileImage, TechnologiesList, TechnologiesTitle, AboutText, Icon, TechnologyItem, TechbologyListsContainer, TechnologiesSubTitle} from './about.styles';
import Header from '../../header/Header-componet';
import { FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss  } from "react-icons/si";
import { BiLogoRedux, BiLogoFirebase } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";

const AboutSection = () => {
  const aboutMe = `
    Hi, I'm Larry Motuzis, a passionate software developer who loves bringing ideas to life on the digital landscape. My journey into the realm of coding began in 2021 when a close friend showcased some of their impressive work, sparking an insatiable curiosity within me. Since then, I've immersed myself in the world of software development, constantly learning and evolving my skillset.

    I take pride in crafting engaging and interactive web applications, always aiming for the perfect balance between form and function. When I'm not writing lines of code or solving complex problems, you can find me exploring new technologies, tinkering with emerging tools, and staying up-to-date with industry trends to ensure I always deliver top-notch, innovative solutions.

    Through dedication and perseverance, I've honed my abilities in various programming languages and frameworks, constantly striving to push the boundaries of what's possible. I believe that software development and Web development is an ever-evolving art form, and I'm committed to growing alongside it. I have done work in software and web development, front-end/back-end web and database/server management.
  `;

  

  return (
    <AboutContainer>
      <Header />
    <AboutContent>
        <AboutText>{aboutMe}</AboutText>
        <ProfileImage src={profilePic} alt="profile" />
        <TechnologiesTitle> Technologies I've been working with </TechnologiesTitle>
      <TechbologyListsContainer>
        <div style={{ marginRight: '20px' }}>
          <TechnologiesSubTitle> Frontend </TechnologiesSubTitle>
          <TechnologiesList>
            <TechnologyItem> 
              <Icon> 
                <FaReact /> 
                </Icon> 
                React 
                </TechnologyItem>
            <TechnologyItem>
              <Icon>
                <BiLogoRedux />
                </Icon>
                Redux-Toolkit
                </TechnologyItem>
            <TechnologyItem>
              <Icon>
                <TbBrandTypescript />
                </Icon>
                TypeScript
                </TechnologyItem>
                <TechnologyItem>
              <Icon>
                <SiTailwindcss />
                </Icon>
                TailWind CSS
                </TechnologyItem>
          </TechnologiesList>
        </div>

  
        <div>
          <TechnologiesSubTitle> Backend </TechnologiesSubTitle>
          <TechnologiesList>
            <TechnologyItem>
              <Icon>
                <FaNodeJs />
                </Icon>
                Node.js
                </TechnologyItem>
            <TechnologyItem>
              <Icon>
                <FaPhp />
                </Icon>
                PHP
                </TechnologyItem>
                <TechnologyItem>
              <Icon>
                <BiLogoFirebase />
                </Icon>
                Firebase
                </TechnologyItem>
            <TechnologyItem>
              <Icon>
                <SiMongodb />
                </Icon>
                MongoDB
                </TechnologyItem>
          </TechnologiesList>
        </div>
      </TechbologyListsContainer>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
