import './navbar.styles.css';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <>
        <Link className='nav-bar-link ' to='about' spy={true} activeClass='nav-bar-link-active' smooth={true} offset={-100} > About </Link>
        <Link className='nav-bar-link ' to='projects' spy={true} activeClass='nav-bar-link-active' smooth={true} offset={-100} > Projects </Link>
        <Link className='nav-bar-link ' to='work' spy={true} activeClass='nav-bar-link-active' smooth={true} offset={-100} > Work </Link>
        </>
    )
};

export default NavBar;