import styled from 'styled-components';
import { Link } from 'react-scroll';

// Styled Components
export const NavBarContainer = styled.nav`
position: fixed;
top: 0;
left: 0;
width: 100%;
background-color: #333;
padding: 10px 0;
text-align: center;
z-index: 1000; 
`;

export const NavBarLink = styled(Link)`
color: #fff;
font-size: 16px;
margin: 0 20px;
text-decoration: none;
cursor: pointer;
transition: color 0.3s ease-in-out;

&:hover {
  color: #007bff;
}

&.nav-bar-link-active {
  color: #007bff;
}
`;