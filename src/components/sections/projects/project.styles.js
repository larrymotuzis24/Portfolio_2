
import styled from 'styled-components';

// Styled Components
export const ProjectsContainer = styled.div`
  background-color: #f3f3f3;
  padding: 50px 0;
`;

export const ProjectItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 30px;
`;

export const ProjectTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;

export const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;