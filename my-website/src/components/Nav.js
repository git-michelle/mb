import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
    </nav>
  );
};

export default Header;
