import React, { useState } from "react";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";
import DrawerToggle from "./DrawerToggle";

const Toolbar = (props) => {
  const [navcolor, setNavColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={navcolor ? "nav nav-active box-shadow" : "nav"}>
      <div className="nav-content">
        <Link to="/">
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
