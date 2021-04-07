import React from 'react';
import { NavLink } from "react-router-dom";



import './FrontPage.css';
 

const FrontPage = () =>{

 return (
     <NavLink to="/Items">
     <div className="front-page">
         <div className="header-front-page" >
         <h1 className="main-header">THE BAKERY</h1>
         </div>
        
     </div>
     </NavLink>
 );
}


export default FrontPage;