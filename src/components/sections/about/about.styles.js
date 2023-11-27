import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 50px 0;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
`;

export const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

export const ProfileImage = styled.img`
  max-width: 50%;
  border-radius: 50%;
  margin: 20px auto;
`;

export const TechnologiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;

  li {
    margin-bottom: 8px;
  }
`;

export const TechnologiesTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const TechnologiesSubTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: underline;
`;

export const Icon = styled.span`
  margin-right: 10px;
`;

export const TechnologyItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const TechbologyListsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 800px;
  justify-content: space-around;
`;
