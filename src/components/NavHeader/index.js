import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <nav className="nav-header">
      <div className="menu">
        <a href="#about" alt="about">
          <div className="menu-item">About</div>
        </a>

        <a href="#portfolio" alt="portfolio">
          <div className="menu-item">Portfolio</div>
        </a>
        <a href="#contact" alt="contact">
          <div className="menu-item">Contact</div>
        </a>
      </div>
    </nav>
  );
};

export default NavHeader;
