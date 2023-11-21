import {NavBarContainer,NavBarLink} from './navbar.styles.js';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <NavBarContainer>
        <NavBarLink to="about" spy={true} activeClass="nav-bar-link-active" smooth={true} offset={-100}>
          About
        </NavBarLink>
        <NavBarLink to="projects" spy={true} activeClass="nav-bar-link-active" smooth={true} offset={-100}>
          Projects
        </NavBarLink>
        <NavBarLink to="work" spy={true} activeClass="nav-bar-link-active" smooth={true} offset={-100}>
          Work
        </NavBarLink>
      </NavBarContainer>
    )
};

export default NavBar;