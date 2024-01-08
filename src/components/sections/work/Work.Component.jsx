// WorkComponent.jsx
import React from 'react';
import {WorkContainer, WorkDescription, WorkItem, WorkLink, WorkTitle, Title } from './work.styles.js';

const WorkComponent = () => {
  const recentWork = [
    {
      title: "Cooper Valuation Group",
      link: "https://www.coopervaluationgroup.com/",
      techStack: "React, JavaScript, TailWind CSS",
      //   video: CVGDemo,
      description:
        "Teamed up with a senior housing appraisal group to completely redesign and launch their website. I created detailed designs using Figma and implemented them using React and Tailwind CSS. The new site is now user-friendly, responsive, and tailored to the group's specific needs, improving their online presence and operational efficiency.",
    },
    {
      title: "Assist Basketball Network",
      link: "https://assistbasketballnetwork.com/",
      techStack: "WordPress",
      description:
        "Led a comprehensive engagement with ABN's ownership team to strategize and outline their vision for the upcoming remodel and relaunch of their website. Collaborated closely with the owner to understand their specific requirements and objectives. Leveraging in-depth discussions and insightful feedback, orchestrated the creation of a dynamic and modern website that seamlessly aligns with ABN's brand identity. The result of this collaborative effort is a freshly relaunched website that showcases ABN's offerings in an engaging and user-friendly manner, while also reflecting the company's values and aspirations.",
    },
    {
      title: "Cooper Valuation Group Database Migration",
      techStack: "React, Node, Express, Axios, PostgreSQL, Tailwind CSS, Styled Components",
      description:
        "Led the migration from an Excel-based database to a PostgreSQL framework. Created the ability for users to filter, add, edit, and delete job records seamlessly. A key feature of the application is the dual-access system: administrators are granted full editing rights, while staff users have access limited to data retrieval, ensuring robust data governance. The front interface is designed for efficiency, with the added capability for users to export data directly into Excel.",
    },
  ];

  return (
    <WorkContainer id="work">
      <Title> Recent Work </Title>
      {recentWork.map((work, index) => (
        <WorkItem key={index}>
          <WorkTitle>{work.title}</WorkTitle>
          <WorkDescription>{work.description}</WorkDescription>
          <WorkLink href={work.link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </WorkLink>
        </WorkItem>
      ))}
 
    </WorkContainer>
  );
};

export default WorkComponent;
