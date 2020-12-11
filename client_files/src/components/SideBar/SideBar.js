import React from 'react';
import './sidebar.scss'

import { VscClose } from 'react-icons/vsc'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const SideBar = ({ open, setOpen }) => {
    return (
    <>
    <nav className="side_nav" open={open}>

    <div open={open} onClick={() => setOpen(!open)} className="sidebar_icon">
    <VscClose className="icon" />
    </div>

    <ul>
    <ScrollLink to="" className="side_link">How it works</ScrollLink>
    <ScrollLink to="" className="side_link">Talent</ScrollLink>
    <RouterLink to="/signin" className="side_link">Sign Up</RouterLink>
    </ul>
    </nav>        
    </>
    )
}

export default SideBar
