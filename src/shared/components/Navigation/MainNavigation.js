import React, {useState} from "react";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import NavLinks from "../Navigation/NavLinks";

import Header from "./Header";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [DrawerIsOpen, setDrawerIsOpen] = useState(flase);

  setDrawerIsOpen=()=>{
    useState(true);
  }
  return (
    <React.Fragment>
      <SideDrawer>
          <nav className="main-navigation__drawer-nav"><NavLinks/></nav>
      </SideDrawer>
      <Header>
        <button className="main-header__button" onClick={setDrawerIsOpen}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-header__logo">
          <Link>The bakery</Link>
        </h1>
        <nav>
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
