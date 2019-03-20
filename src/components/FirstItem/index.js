import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import persona from "../img/persona.png";
import wireframeLogin from "../img/business-login.png";
import wireFrameSocialMedia from "../img/business-socialmedia.png";
import wireFrameMainMenu from "../img/customer-main.png";
import wireFrameStore from "../img/customer-brokentree.png";
import prototypeLogin from "../img/final-business-login.png";
import prototypeSocialMedia from "../img/final-buisness-socialmedia.png";
import prototypeStore from "../img/final-customer-brokentree.png";
import prototypeStoreSecondScreen from "../img/final-customer-brokentree-2.png";

const FirstItem = () => {
  return (
    <div className="first-item">
      {" "}
      <nav className="nav-header">
        <div className="menu">
          <Link to="./">
            {" "}
            <div className="menu-item">Pooja Arshanapally</div>
          </Link>
        </div>
      </nav>
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">
            <h1>Bridging the Digital Divide</h1>
          </div>
          <div className="tagline">
            <h2>Objective</h2>

            <p>
              A class I took at Bradley University decided collaborate with the
              Peoria Innovation Center. I was put into a team with students in
              my class to help bridge the digital divide that Peoria’s small
              businesses experience when it comes to competing with online
              retailers.
            </p>

            <p>
              After meeting with local businesses on Main street, we have found
              that many of them want to have an online presence because of the
              possible increase in revenue and foot traffic, but are
              struggling to get started.
            </p>
            <p>
              After reviewing the findings and data collected, we have decided
              to make an application for community members to view business
              information and upcoming events. 
            </p>

            <h2>Iteration</h2>
            <img src={persona} alt="persona" className="responsive" />
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
            <div className="buisness-screens">
              {" "}
              <img src={wireframeLogin} alt="login" className="responsive" />
              <img
                src={wireFrameSocialMedia}
                alt="social-media"
                className="responsive"
              />
              <p>
                <strong>Business login and social media screen</strong>
              </p>
            </div>

            <div className="customer-screens">
              {" "}
              <img
                src={wireFrameMainMenu}
                alt="main-menu"
                className="responsive"
              />
              <img
                src={wireFrameStore}
                alt="social-media"
                className="responsive"
              />
              <p>
                <strong>Customer main menu and social media screen</strong>
              </p>
            </div>

            <h2>Testing</h2>
            <p>
              In order for this design meet the user goals, we created an
              usability test to recieve input on how the real users interact
              with the application.{" "}
            </p>

            <h2>Prototype</h2>
            <div className="buisness-screens">
              {" "}
              <img src={prototypeLogin} alt="login" className="responsive" />
              <img
                src={prototypeSocialMedia}
                alt="social-media"
                className="responsive"
              />
              <p>
                <strong>Business login and social media screen</strong>
              </p>
            </div>

            <div className="customer-screens">
              {" "}
              <img
                src={prototypeStore}
                alt="main-menu"
                className="responsive"
              />
              <img
                src={prototypeStoreSecondScreen}
                alt="social-media"
                className="responsive"
              />
              <p>
                <strong>Customer social media screen</strong>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstItem;
