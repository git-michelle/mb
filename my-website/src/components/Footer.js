import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Michelle B</p>
      <div className="links-container">
        <Link to="">
          <FaGithub className="footer-icon" />
        </Link>
        <Link to="">
          <FaLinkedin className="footer-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
