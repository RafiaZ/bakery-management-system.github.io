import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../Navigation/NavLinks';
import Header from './Header';

import './MainNavigation.css';

const MainNavigation = props =>{
     return <Header>
         <button className="main-header__button">
             <span />
             <span />
             <span />
         </button>
         <h1 className="main-header__logo">
             <Link>The bakery</Link>
         </h1>
         <nav >
             <NavLinks/>
         </nav>
     </Header>
}

export default MainNavigation;