import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

import './MainNavigation.css';

const MainNavigation = props =>{
     return <Header>
         <button>
             <span />
             <span />
             <span />
         </button>
         <h1>
             <Link>The Bakery</Link>
         </h1>
         <nav>
             ...
         </nav>
     </Header>
}

export default MainNavigation;