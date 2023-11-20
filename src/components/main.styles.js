import styled from 'styled-components';
import { Link } from 'react-scroll';

export const MainContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const SectionLink = styled(Link)`
  cursor: pointer;
  margin-right: 20px;
`;

export const SectionContainer = styled.div`
margin-bottom: 50px; /* Adjust the margin to control the space between sections */
`;