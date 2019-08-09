import React from "react";
import "./index.css";
import dashboard from '../img/dashboard-1.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavHeaderItem from "../NavHeaderItem";
import interest from '../img/interests-places.png'
import settings from '../img/settings-notification.png'
import dashboardMobile from "../img/dashboard-mobile.png"
import settingsMobile from '../img/settings.png'
import interestMobile from '../img/interest-mobile.png'
const FourthItem = () => {
  return (
    <div className="fourth-item">
      {" "}
      <div class="center-paragraph">
        <NavHeaderItem/>

      <main>
      <div className="intro-wrapper">
        <div className="intro-name">
          <h1>Aquent It Solutions</h1>
        </div>
        <div className="tagline">
        <h2>Objective</h2>
          <p>Aquent It Solutions is a consulting company and majority of the employees work onsite which makes it difficult to maintain direct communication. 
          By creating an employee directory app that provides contact information, helps provide Aquent employees the tools to maintain communication at any 
          location. This app was further enhanced to become a social networking app to help connect Aquent employees besides work obligations.</p>
          <p>This app was built with React and Redux and tested with Jest and Enzyme through weekly sprints using Agile. </p>

          <h2>Interviewing</h2>
          <p>After interviewing employees about the employee directory app, I asked what are some important features that would help improve their productivity on a daily basis.
           Majority of employees wanted to be reminded if they had important meetings or events. </p>

           <h2>Prototyping</h2>
           <p>In order to solve the communication through Aquent employees, I thought it would be essential to create a dashboard for each employee that displays
            a calendar and the option to create push notifications to the phone for important events. The recommendation section was created in order to promote 
            communication outside of work. If people are on their lunch break, they can look at employees recommendedations on what places to eat. Aquent 
            employees will also receive important updates of Aquent in the news section.</p>
              <img src={dashboard} className="responsive"></img>
              <img src={interest} className="responsive"></img>
              <img src={settings} className="responsive"></img>

              <div className="screens">
                  <img src={dashboardMobile} className="responsive"></img>
                  <img src={settingsMobile} className="responsive"></img>
                  <img src={interestMobile} className="responsive"></img>
              </div>
            

            <h2>Testing</h2>
            <p>In order to understand if the employee’s goals were met, I designed an interactive prototype and created usability tests. There were two important factors 
            that came out of these tests. The icons on the mobile screen confused employees because they did not understand what they represent. It would be easier to 
            remove all of the icons together and replace it with words with a sliding navigation.</p>

             <h2>Conclusion</h2>
             <p>The employee directory app was a success when it came to providing contact information, however integrating google calendar and Slack were not feasible 
             due to Slack’s and Google’s strict guidelines. Overall, this app was able to meet the requirements and provided direct communication through employees 
             at any location.</p>
        </div>
      </div>
    </main>
      
      </div>
           
  
    
    </div>
  );
};

export default FourthItem;
