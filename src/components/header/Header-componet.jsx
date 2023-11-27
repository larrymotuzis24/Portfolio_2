import { Name, SocialLinksContainer, SocialLinks, SocialLink, Icon, HeaderContainer } from "./header.styles";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <HeaderContainer>
      <Name> Larry Motuzis </Name>
      <SocialLinksContainer>
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/larry-motuzis/" target="_blank" rel="noopener noreferrer">
            <Icon><FaLinkedin /></Icon> LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/larrymotuzis24" target="_blank" rel="noopener noreferrer">
            <Icon><FaGithub /></Icon> GitHub
          </SocialLink>
        </SocialLinks>
      </SocialLinksContainer>
    </HeaderContainer>
  );
};

export default Header;
