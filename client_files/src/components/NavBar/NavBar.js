import React from 'react'
import './navbar.scss';
import Logo from '../Logo';

import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';
import Languages from '../Languages/Languages';
import {isAuthenticated, logOut} from '../../pages/Auth/helpers';


const NavBar = ({history}) => {
  
  return (
  <>
    <nav className="nav_bar">
    <div className="nav_container">

    <div className="nav_logo">
    <RouterLink to="/"><Logo /></RouterLink>
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
    <li><RouterLink to="/signup" className="signup">Sign Up</RouterLink></li>
    </ul> 

    <div className="nav_content">
    {!isAuthenticated() && (
    <p><RouterLink to="/login" className="log">Log In</RouterLink></p>
    )}

    {isAuthenticated() && (
    <p className="log" onClick={() => {logOut(() => {history.push('/')})}}>
    Log Out
    </p>
    )}
    
    <Languages />
    </div>
    </div>
    </nav>       
    </>
    )
}


export default NavBar;
