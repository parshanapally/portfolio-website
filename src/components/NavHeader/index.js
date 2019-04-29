import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <nav className="nav-header">
      <div className="menu">
        <Link to="/" href="#intro">
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
