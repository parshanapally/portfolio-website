import React from "react";
import "./index.css";

const FirstItem = () => {
  return (
    <div className="first-item">
      {" "}
      <nav className="nav-header">
        <div className="menu">
          <div className="menu-item active">About</div>
          <div className="menu-item">Portfolio</div>
        </div>
      </nav>
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">
            <h1>Bridging the Digital Divide</h1>
          </div>
          <div className="tagline">
            <p>Paragraph</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstItem;
