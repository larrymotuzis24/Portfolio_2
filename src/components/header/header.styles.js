import styled from "styled-components";


export const HeaderContainer = styled.div`
  background-color: #333;
  color: white; 
  padding: 20px; 
  text-align: center; 
`;

export const Name = styled.h1`
  font-size: 2em;
  padding: 10px;
  background-image: linear-gradient(45deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  color: transparent;
`;

export const SocialLinksContainer = styled.div`
  margin-top: 10px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const SocialLink = styled.a`
  margin: 0 10px;
  color: white; 
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  margin-right: 5px; 
`;