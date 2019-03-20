import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
              After interviewing local businesses along Main Street of Peoria,
              IL, we designed user personas marketing to the ideal client. We
              came to the conclusion that the two ideal clients would be a
              business owner who wants to market their services or a college
              student looking for a place to eat.
            </p>
            <p>
              Then we performed methods such card sorting to understand how the
              client categorizes information and journey mapping and user flows
              to understand the process of what the client goes through in order
              to accomplish a goal.
            </p>

            <h2>Wireframing</h2>
            <p>
              We decided to create two different workflows of how a user would
              naviagate this application, for the business owner and the college
              student.{" "}
            </p>

            <h2>Testing</h2>
            <p>
              In order for this design meet the user goals, we created an
              usability test to recieve input on how the real users interact
              with the application.{" "}
            </p>

            {/* <h2>Prototype</h2> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecondItem;
