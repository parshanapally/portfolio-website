import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import mainBuzz from "../img/main-buzz.png";
import rewards from "../img/rewards.png";
import quote from "../img/main-quote.png";
import NavHeader from "../NavHeader";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <NavHeader />

      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Pooja Arshanapally</div>
          <div className="tagline">UI/UX Designer | Developer</div>
        </div>
      </main>
      <div className="about-page" id="about">
        <div className="about-wrapper">
          <div className="about-content">
            <h1>About</h1>
            <p>
              I am a designer with front-end knowledge who is passionate about
              communicating design and development through a variety of
              different audiences.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-page">
        <h1>Portfolio</h1>
        <Link to="/bridging-digital-divide">
          <div className="portfolio-item">
            {" "}
            <div className="portfolio-description">
              {" "}
              <h1>Bridging the Digital Divide</h1>
              <p>
                A mobile application that provides a solution to bridging the
                digital divide that Peoria’s small businesses experience when it
                comes to competing with online retailers{" "}
              </p>
            </div>
            <img src={mainBuzz} alt="main-buzz" className="main-buzz" />
          </div>
        </Link>

        <Link to="/rewards">
          {" "}
          <div className="portfolio-item">
            <div className="portfolio-description">
              {" "}
              <h1>Rewards</h1>
              <p>
                A mobile design that will help create customers manage their
                store cards without the worry of losing the card.
              </p>
            </div>

            <img src={rewards} alt="rewards" className="rewards" />
          </div>
        </Link>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://parshanapally.github.io/quote/"
        >
          <div className="portfolio-item">
            <div className="portfolio-description">
              {" "}
              <h1>Daily Dose of Quotes</h1>
              <p>
                A single page app built in React that displays a list of quotes.
              </p>
            </div>

            <img src={quote} alt="question" className="quotes" />
          </div>
        </a>
      </div>

      <div className="contact-page" id="contact">
        <div className="contact-wrapper">
          <div className="contact-content">
            <h1>Contact</h1>
            <p>
              Feel free to contact me at{" "}
              <a rel="noopener noreferrer" href="mailto:parshanap@gmail.com">
                parshanap@gmail.com
              </a>
              <div className="social-icons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/pooja-arshanapally-521a50b7/"
                >
                  <FaLinkedin />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/parshanapally"
                >
                  <FaDribbble />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/parshanapally"
                >
                  <FaGithub />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/thelifeofpooja/"
                >
                  <FaInstagram />
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
