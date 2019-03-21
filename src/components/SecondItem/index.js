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
          <Link to="./portfolio-website/">
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
              reward cards into one simple location.
            </p>

            <h2>Iteration</h2>
            <p>
              The process was first started through interviewing potential users
              for the app. Personas were made based on our targeted users.
            </p>
            <p>
              Then I conducted more methods such as tree testing and card
              sorting to create an efficient hierarchy of information according
              to the user's perspective. Through these methods, I was able to
              create task flows.
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
              Optimal Workshop.
            </p>

            <h2>Prototype</h2>

            <div className="screens">
              {" "}
              <img
                src={MainScreen}
                alt="login"
                className="responsive"
                id="align-content"
              />
              <img src={Search} alt="search" className="responsive" />
            </div>

            <h2>Conclusion</h2>

            <p>
              Overall, the process of designing this app was a success. During
              the interview process, I gain more insight of different
              functionalities that can improve this app. Hopefully, people will
              be able to save money and time through the use of this app.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecondItem;
