import React from "react";
import "./index.css";
import mainBuzz from "../img/main-buzz.png";

const Portfolio = () => {
  return (
    <div className="container-portfolio">
      <div className="container-fluid">
        <div className="container-box">
          <a href="#">
            <img src={mainBuzz} />
          </a>
        </div>
        <div className="container-box">Project 2</div>
        <div className="container-box">Project 3</div>
      </div>
    </div>
  );
};

export default Portfolio;
