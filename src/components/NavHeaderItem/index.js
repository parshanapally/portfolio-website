import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const NavHeaderItem = () => {
  return (
    <nav className="nav-header-item">
      <div className="menu">
        <Link to="/" alt="about">
          <div className="menu-item">
            <MdKeyboardArrowLeft />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavHeaderItem;
