import React from "react";
import "./index.css";
import mainBuzz from "../img/main-buzz.png";
import pdfDoc from "../img/IM261pdf.pdf";
import techAppDoc from "../img/tech-app.pdf";
import techApp from "../img/tech-app.png";

const Portfolio = () => {
  return (
    <div className="container-portfolio">
      <div className="container-fluid">
        <div className="container-box">
          <a href={pdfDoc} download>
            <img src={mainBuzz} />
          </a>
        </div>
        <div className="container-box">
          <a href={techAppDoc} download>
            <img src={techApp} />
          </a>
        </div>
        <div className="container-box">Project 3</div>
      </div>
    </div>
  );
};

export default Portfolio;
