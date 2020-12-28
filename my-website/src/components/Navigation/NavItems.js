import React from "react";
import { HashLink } from "react-router-hash-link";

const NavItems = () => {
  return (
    <div>
      <ul>
        <li>
          <HashLink smooth to="/#about" className="nav-link">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projects" className="nav-link">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" className="nav-link">
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
