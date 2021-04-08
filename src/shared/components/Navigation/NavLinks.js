import React from 'react';
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks = props =>{
    return (
        <ul className="navbar-links">
        <li className="navbarr-links__first-item">
            <NavLink to="/"> Home </NavLink>
        </li>
        <li>
            <NavLink to="/Items"> Sign Up </NavLink>
        </li>
        <li>
            <NavLink to="/Items"> Contacts </NavLink>
        </li>
        <li>
            <NavLink to="/users/authentication"> Authentication </NavLink>
        </li>
    </ul>
    )
  

}

export default NavLinks;