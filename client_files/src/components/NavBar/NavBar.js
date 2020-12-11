import React, {Component} from 'react'
import './navbar.scss';
import Logo from '../Logo';

import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';
import Languages from '../Languages/Languages';


class NavBar extends Component {
    render() {

    return (
    <>
    <nav className="nav_bar">
    <div className="nav_container">

    <div className="nav_logo">
    <Logo />
    </div>

    <div className="mobile_icon">
    <VscMenu />
    </div>

    <ul>
    <li>
      <ScrollLink 
       to="process" spy={true} smooth={true} offset={50} duration={500} 
       className="nav_link">
        How it works
      </ScrollLink>
    </li>
    <li><RouterLink to="/discover" className="nav_link">Discover</RouterLink></li>
    <li><RouterLink to="/login" className="nav_link">Log In</RouterLink></li>
    <li><RouterLink to="/signup" className="signup_link">Sign Up</RouterLink></li>
    </ul> 

    <Languages />
    </div>
    </nav>       
    </>
    )
}
}

export default NavBar;
