import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <nav className="nav-header">
        <div className="menu">
          <div className="menu-item active">About</div>
          <div className="menu-item">Portfolio</div>
        </div>
      </nav>

      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Pooja Arshanapally</div>
          <div className="tagline">UI/UX Designer | Developer</div>
        </div>
      </main>
      <div className="about-page">
        <div className="about-wrapper">
          <div className="about-content">
            <h1>About</h1>
            <p>
              My name is Pooja Arshanapally. I am a designer interested in a
              multitude of arts such as UI/UX design, web design, graphic
              design, video production and much more. I am passionate about
              communicating through design to a variety of audiences. Due to my
              coding experience, I am able to think logically at situations and
              fix the problems. Because of my hobbies such as photography has
              given me a keen eye when it comes to design. Both of these assets
              has made me realize my true niche.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-page">
        <h1>Portfolio</h1>
        <Link to="/bridging-digital-divide">
          <div className="portfolio-item">
            <h1>Bridging the Digital Divide</h1>
            <p>
              A mobile application that provides a solution to bridging the
              digital divide that Peoria’s small businesses experience when it
              comes to competing with online retailers{" "}
            </p>
          </div>
        </Link>

        <Link to="/rewards">
          <div className="portfolio-item">
            <h1>Rewards</h1>
            <p>
              A mobile design that will help create customers manage their store
              cards without the worry of losing the card.
            </p>
          </div>
        </Link>

        <Link to="/to-do-app">
          <div className="portfolio-item">
            <h1>To Do App</h1>
          </div>
        </Link>

        <Link to="/tech-app">
          <div className="portfolio-item">
            <h1>Tech App</h1>
          </div>
        </Link>
      </div>

      <div className="contact-page">
        <div className="contact-wrapper">
          <div className="contact-content">
            <h1>Contact</h1>
            <p>
              Feel free to contact me at<a>parshanap@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
