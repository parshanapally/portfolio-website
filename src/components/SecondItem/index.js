import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainScreen from "../img/main-screen.png";
import Search from "../img/screen.jpg";
import FirstClick from "../img/first-click.png";
import Mockups from "../img/mockups.png";
const SecondItem = () => {
  return (
    <div className="second-item">
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
            <h1>Rewards</h1>
          </div>
          <div className="tagline">
            <h2>Objective</h2>
            <p>
              Rewards is an application that will make shopping more convenient
              for customers. This mobile application will combine different
              reward cards into one simple location. The purpose is to help
              customers manage their store cards and not having to worry about
              losing thier card.
            </p>

            <h2>Iteration</h2>
            <p>
              The process was first started through interviewing potential users
              for the app. Our targeted users were people who were on a budget
              and were frugal with their expenses. Based on the answers that was
              gathered, personas were made to help create an understanding of
              the user's desire and wants for this specific app.
            </p>
            <p>
              Then I conducted more methods such as tree testing and card
              sorting to create an efficient hierarchy of information according
              to the user's perspective.
            </p>
            <p>
              Through these methods, I was able to create task flows to help
              structure the direction of how the user will go through the
              application.
            </p>

            <h2>Wireframing</h2>
            <p>
              Then I started sketching mockups of the overall feel and layout of
              the app.
            </p>

            <div className="screens">
              {" "}
              <img src={Mockups} alt="mockups" className="responsive" />
            </div>

            <h2>Testing</h2>

            <div>
              <img src={FirstClick} alt="first-click" className="responsive" />
            </div>
            <p>
              In order to validate the user experience in my screens, I
              conducted a usability test such as the First Click test through
              Optimal Workshop. A user is given one of the screens and is given
              a task to complete.The first click of the user of the given task
              will be recorded. The first click test is important because it
              enusres that the given task is clear and easy.
            </p>

            <h2>Prototype</h2>

            <div className="screens">
              {" "}
              <img src={MainScreen} alt="login" className="responsive" />
              <img src={Search} alt="search" className="responsive" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecondItem;
