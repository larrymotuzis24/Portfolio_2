import styled from "styled-components";


export const AboutContainer = styled.div`
  background-color: #f8f8f8;
  padding: 50px 0;
  margin-bottom: 15px; 
`;

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;

export const ProfileImage = styled.img`
  max-width: 100%;
  border-radius: 50%;
  margin: 20px 0;
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
  margin-bottom: 10px;
`;
