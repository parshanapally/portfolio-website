import React from "react";
import '../FifthItem/index.css'
import persona from "../img/persona.png";
import wireframeLogin from "../img/business-login.png";
import wireFrameSocialMedia from "../img/business-socialmedia.png";
import wireFrameMainMenu from "../img/customer-main.png";
import wireFrameStore from "../img/customer-brokentree.png";
import prototypeLogin from "../img/final-business-login.png";
import prototypeSocialMedia from "../img/final-buisness-socialmedia.png";
import prototypeStore from "../img/final-customer-brokentree.png";
import prototypeStoreSecondScreen from "../img/final-customer-brokentree-2.png";
import NavHeaderItem from "../NavHeaderItem";
import synapsis from '../img/synapsis-home-page.png'
import sypnapsisServices from '../img/synapsis-services.png'
import sypnapsisNewServices from '../img/synapsis-new-services.png'
const FifthItem = () => {
  return (
    <div className="fifth-item">
      {" "}
      <NavHeaderItem />
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">
            <h1>Synapsis</h1>
          </div>
          <div className="tagline">
        
            <div className="center-paragraph">
            <a href="https://www.synapsisinc.com/" target="_blank" ><img src={synapsis} alt="home"  className="responsive" ></img></a>
              {" "}
              <h2>Objective</h2>
              <p>
               
                Synapsis is an Information Technology Services Provider that provides solutions
                to ensures clients successes for their business. They are currently located in 
                Springfield, Chicago, Kansas City and two cities in India Punne and Chennai.
              </p>
              <p>
              Synapsis has a main website built in Wordpress to list all of the services they provide
              but they wanted help with creating a branding guide to make the website look consistent. 
              </p>
            </div>
            <div className="center-paragraph">
              {" "}
              <h2>Iteration</h2>
              <p>By keeping the colors, spacing and font consistent, I first began the process by making a branding guide. Then 
              I made the correction on the website using HTML and CSS.</p>
              <p>
              Each link inside of the Service tab provides a section where it lists into detail what type of services provide. 
              However, this section needed to be redesigned because the lists were not properly aligned with the other lists.
              </p>
              <img src={sypnapsisServices} alt="services" className="responsive" />
             
              
              <p>
              In the About section, I was inspired by the “Driven by Our Core Values”, they provided blocks but it also allowed
              for the blocks to be a variety of sizes and it wouldn’t change the outcome of the design.
              </p>
              <img src={sypnapsisNewServices} alt='new-services'  className="responsive" ></img>
        
          
            </div>
       
            <div className="center-paragraph">
              {" "}
              <h2>Conclusion</h2>
              <p>
                By rebranding the Synapsis website, Synapsis was able to create and maintain a consistent brand.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FifthItem;
