import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const FourthItem = () => {
  return (
    <div className="fourth-item">
      {" "}
      <nav className="nav-header">
        <div className="menu">
          <Link to="./">
            <div className="menu-item">Pooja Arshanapally</div>
          </Link>
        </div>
      </nav>
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">
            <h1>Tech App</h1>
          </div>
          <div className="tagline">
            <p>Paragraph</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FourthItem;
