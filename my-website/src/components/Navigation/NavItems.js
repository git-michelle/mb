import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="#about-section" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="#projects-section" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="#contact-section" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
