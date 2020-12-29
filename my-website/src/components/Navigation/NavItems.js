import React from "react";
import { HashLink } from "react-router-hash-link";

const NavItems = (props) => {
  return (
    <div>
      <ul>
        <li>
          <HashLink
            smooth
            to="/#about"
            className="nav-link"
            onClick={props.sideDrawerState}
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#projects"
            className="nav-link"
            onClick={props.sideDrawerState}
          >
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#contact"
            className="nav-link"
            onClick={props.sideDrawerState}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
