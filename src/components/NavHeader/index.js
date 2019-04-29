import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
const NavHeader = () => {
  return (
    <nav className="nav-header">
      <div className="menu">
        <Scrollspy
          items={["about", "portfolio-page", "contact"]}
          currentClassName="is-current"
        />
        <Link to="/">
          {" "}
          <div className="menu-item">Home</div>
        </Link>
        <a href="#about" alt="about">
          <div className="menu-item">About</div>
        </a>
        <a href="#contact" alt="contact">
          <div className="menu-item">Contact</div>
        </a>
      </div>
    </nav>
  );
};

export default NavHeader;
