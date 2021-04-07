import React from 'react';
import { Link } from 'react-router-dom';
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
             <Link>The Bakery</Link>
         </h1>
         <nav >
             ...
         </nav>
     </Header>
}

export default MainNavigation;