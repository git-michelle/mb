import React from "react";

const NavItems = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
