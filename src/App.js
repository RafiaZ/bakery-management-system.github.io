import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Item from './items/pages/Item';
import './index.css';

import FrontPage from './layout/FrontPage';

const  App =()=> {
 return <div className="background">
     <Router>
   <Switch>
   <Route path="/" exact>
       <FrontPage />
   </Route>
   <Route path="/Items" exact>
      <Item/>
   </Route>
   <Redirect to="/"/>
   </Switch>
 </Router>
 </div>

 
  
}

export default App;
