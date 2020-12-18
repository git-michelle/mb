import React from "react";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";
import DrawerToggle from "./DrawerToggle";

const Toolbar = (props) => {
  return (
    <nav className="nav box-shadow">
      <div className="nav-content">
        <Link to="/more">
          <img
            className="logo"
            src="/images/logo-m.png"
            alt="letter m in circle"
          />
        </Link>
        <NavItems />
      </div>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </nav>
  );
};

export default Toolbar;
