import React from "react";
import "./index.css";
import mainBuzz from "../img/main-buzz.png";
import pdfDoc from "../img/IM261pdf.pdf";
import techAppDoc from "../img/tech-app.pdf";
import techApp from "../img/tech-app.png";
import todo from "../img/todo-app.PNG";
import rewardsDoc from "../img/Rewards.pdf";
import rewards from "../img/rewards.png";

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
          <a href={rewardsDoc} download>
            <img src={rewards} alt="pizza-react-app" />
            <div className="overlay">
              <div className="text">Rewards</div>
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
        <div className="container-box">
          <a href="https://parshanapally.github.io/todo-app/" target="_blank">
            <img src={todo} alt="tech-app" />
            <div className="overlay">
              <div className="text">To Do App</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;