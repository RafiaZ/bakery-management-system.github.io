import React from "react";

import "./Header.css";

const Header = (props) => {
  return <header className="main-header__items-page">{props.children}</header>;
};

export default Header;
