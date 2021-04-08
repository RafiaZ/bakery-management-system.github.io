import React from 'react';
import ReactDom from 'react-dom';

const SideDrawer = props =>{

         const content = <aside className="side-drawer__navlinks">{props.children}</aside>;
         return(ReactDom.createPortal(content, document.getElementById('drawer-hook'))
         ) 

    
}

export default SideDrawer;