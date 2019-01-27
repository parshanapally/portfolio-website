import React from "react";
import "./index.css";
import mainBuzz from "../img/main-buzz.png";
import pdfDoc from "../img/IM261pdf.pdf";
import techAppDoc from "../img/tech-app.pdf";
import techApp from "../img/tech-app.png";
import pizza from "../img/pizza.PNG";

const Portfolio = () => {
  return (
    <div className="container-portfolio">
      <div className="container-fluid">
        <div className="container-box">
          <a href={pdfDoc} download>
            <img src={mainBuzz} alt="main-buzz-app" />
            <div className="overlay">
              <div className="text">Bridging the Digital Divide</div>
            </div>
          </a>
        </div>
        <div className="container-box">
          <a
            href="https://parshanapally.github.io/pizza-react/"
            target="_blank"
          >
            <img src={pizza} alt="pizza-react-app" />
            <div className="overlay">
              <div className="text">Daily Dose of Pizzas</div>
            </div>
          </a>
        </div>
        <div className="container-box">
          <a href={techAppDoc} download>
            <img src={techApp} alt="tech-app" />
            <div className="overlay">
              <div className="text">Tech App</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
