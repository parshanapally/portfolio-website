import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <div id="footer" className="container-fluid">
      <div className="row">
        <div className="personal-info">
          <p className="social-media">
            <a
              href="https://www.linkedin.com/in/pooja-arshanapally-521a50b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="mailto:parshanap@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://www.instagram.com/thelifeofpooja/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
