import React, {useContext} from 'react'
import './navbar.scss';
import Logo from '../Logo';

import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';
import Languages from '../Languages/Languages';


const NavBar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const register = () => history.push("/signup");
  const login = () => history.push("/login");
  const logout = () => {
     setUserData({
     token: undefined,
     user: undefined
    })
  localStorage.setItem("auth-token","");
  };


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

    <li className="signup" onClick={register}>Sign Up</li>
    </ul> 

    <div className="nav_content">
    {userData.user ? (
    <p clasName="login" onClick={logout}>Logout</p>
    ) : (
    <p className="login" onClick={login}>Log In</p>
    )}

    <Languages />
    </div>
    </div>
    </nav>       
    </>
    )
}


export default NavBar;
