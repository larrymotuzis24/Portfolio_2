import './navbar.styles.css';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <Link className='nav-bar-link ' to='about' spy={true} activeClass='nav-bar-link-active'smooth={true} offset={-100} > About </Link>
    )
};

export default NavBar;