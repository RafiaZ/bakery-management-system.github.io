import React from 'react';
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks = props =>{
    return (
        <ul className="navbar-links">
        <li>
            <NavLink to="/"> Home </NavLink>
        </li>
        <li>
            <NavLink to="/Items"> Sign Up </NavLink>
        </li>
        <li>
            <NavLink to="/Items"> Contacts </NavLink>
        </li>
    </ul>
    )
  

}

export default NavLinks;