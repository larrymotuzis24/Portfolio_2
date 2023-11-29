import { styled } from "styled-components";

export const WorkContainer = styled.div`
background-color: rgba(255, 255, 255, 0.6);
padding: 50px 0;
border-radius: 10px;
text-align: center;
margin-top: 20px;
`;

export const WorkItem = styled.div`
box-sizing: border-box;
background-color: #fff;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 30px;
margin: 40px;
margin-bottom: 30px;
transition: box-shadow 0.2s ease-in-out;

&:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
`;

export const WorkTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

export const WorkDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;

export const WorkLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;