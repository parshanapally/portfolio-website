import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ThirdItem = () => {
  return (
    <div className="third-item">
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
            <h1>To Do App</h1>
          </div>
          <div className="tagline">
            <p>Paragraph</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThirdItem;
