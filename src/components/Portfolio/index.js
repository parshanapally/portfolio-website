import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
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
          <div className="intro-name">Pooja Arshanapally</div>
          <div className="tagline">UI/UX Designer | Developer</div>
        </div>
      </main>
      <div className="about-page">
        <div className="about-wrapper">
          <div className="about-content">
            <h1>About</h1>
            <p>
              I am a designer with front-end knowledge who is passionate about
              communicatiing design and development through a variety of
              different audiences.
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

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://parshanapally.github.io/quote/"
        >
          <div className="portfolio-item">
            <h1>Daily Dose of Quotes</h1>
            <p id="text-align">Get your daily quote for the day!</p>
          </div>
        </a>

        {/* <Link to="/tech-app">
          <div className="portfolio-item">
            <h1>Tech App</h1>
          </div>
        </Link> */}
      </div>

      <div className="contact-page">
        <div className="contact-wrapper">
          <div className="contact-content">
            <h1>Contact</h1>
            <p>
              Feel free to contact me at{" "}
              <a rel="noopener noreferrer" href="mailto:parshanap@gmail.com">
                parshanap@gmail.com
              </a>
              <div className="social-icons">
                {/* <a rel="noopener noreferrer" href="mailto:parshanap@gmail.com">
                  <MdEmail />
                </a> */}
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
