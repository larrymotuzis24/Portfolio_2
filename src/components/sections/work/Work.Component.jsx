// WorkComponent.jsx
import React from 'react';
import { Link } from 'react-scroll';
import {WorkContainer, WorkDescription, WorkItem, WorkLink, WorkTitle} from './work.styles.js';

const WorkComponent = () => {
  const recentWork = [
    {
      title: "Cooper Valuation Group",
      to: "https://www.coopervaluationgroup.com/",
      techStack: "React, JavaScript, TailWind CSS",
      //   video: CVGDemo,
      description:
        "I collaborated with an appraisal group to develop a dynamic and user-friendly website that caters to their specific needs. The website serves as a comprehensive platform for the group, offering valuable features and functionalities to enhance their operations.",
    },
    {
      title: "Assist Basketball Network",
      to: "https://assistbasketballnetwork.com/",
      techStack: "WordPress",
      description:
        "Led a comprehensive engagement with ABN's ownership team to strategize and outline their vision for the upcoming remodel and relaunch of their website. Collaborated closely with the owner to understand their specific requirements and objectives. Leveraging in-depth discussions and insightful feedback, orchestrated the creation of a dynamic and modern website that seamlessly aligns with ABN's brand identity. The result of this collaborative effort is a freshly relaunched website that showcases ABN's offerings in an engaging and user-friendly manner, while also reflecting the company's values and aspirations.",
    },
  ];

  return (
    <WorkContainer id="work">
      {recentWork.map((work, index) => (
        <WorkItem key={index}>
          <WorkTitle>{work.title}</WorkTitle>
          <WorkDescription>{work.description}</WorkDescription>
          <WorkLink href={work.link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </WorkLink>
        </WorkItem>
      ))}
      <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
        Go to About
      </Link>
    </WorkContainer>
  );
};

export default WorkComponent;