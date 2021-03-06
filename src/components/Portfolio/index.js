import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import mainBuzz from "../img/main-buzz.png";
import rewards from "../img/rewards.png";
import dashboard from '../img/dashboard.png'
import quote from "../img/main-quote.png";
import NavHeader from "../NavHeader";
import synapsisMain from '../img/synapsis-main.png'
import Form from '../Form/Form'



class Portfolio extends Component {
  handleClick = () => {
    window.load().scrollTop(0);
  };
  render() {
    return (
      <div className="portfolio-container">
        <NavHeader />

        <main id="about">
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
                communicating design and development through a variety of
                different audiences.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio-page" id="portfolio">
          <h1>Portfolio</h1>

          <Link to="/synapsis" onClick={this.handleClick}>
          <div className="portfolio-item">
            {" "}
            <div className="portfolio-description">
              {" "}
              <h1>Synapsis</h1>
              <p>
                Redesigning a consulting company's website, built in Wordpress, to help branding and consistency.{" "}
              </p>
            </div>
            <img src={synapsisMain} alt="synapsis" className="main-buzz" />
          </div>
        </Link>


          <Link to="/aquent" onClick={this.handleClick}>
          <div className="portfolio-item">
            {" "}
            <div className="portfolio-description">
              {" "}
              <h1>Aquent It Solutions</h1>
              <p>
                An web app that provides an employee directory that provides direct communication at any location.{" "}
              </p>
            </div>
            <img src={dashboard} alt="aquent" className="main-buzz" />
          </div>
        </Link>



          <Link to="/bridging-digital-divide" onClick={this.handleClick}>
            <div className="portfolio-item">
              {" "}
              <div className="portfolio-description">
                {" "}
                <h1>Bridging the Digital Divide</h1>
                <p>
                  A mobile application that provides a solution to bridging the
                  digital divide that Peoria’s small businesses experience when
                  it comes to competing with online retailers{" "}
                </p>
              </div>
              <img src={mainBuzz} alt="main-buzz" className="main-buzz" />
            </div>
          </Link>

          <Link to="/rewards" onClick={this.handleClick}>
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
                  A single page app built in React that displays a list of
                  quotes.
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
               

                <Form/>
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
  }
}

export default Portfolio;
