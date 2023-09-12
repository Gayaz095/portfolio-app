import React from "react";
import "./About.css";
import photo from "../images/PHOTO.jpg";

const About = () => {
  return (
    <div>
      <h2 className="about-me">Hi There, I am Gayaz</h2>
      <div className="about-container">
        <div className="about-content">
          <img className="profile-image" src={photo} alt="Your Profile" />
          <p className="profile-description">
            I am a passionate web developer with expertise in creating
            interactive and user-friendly websites.
          </p>
          <ul>
            <h2>My Technical Skills Includes</h2>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js libraries and frameworks</li>
            <li>Responsive web design</li>
            <li>Version control with Git</li>
            <li>API integrating</li>
            <li>Problem-solving and debugging</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
