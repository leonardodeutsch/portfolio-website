import * as React from 'react';

export const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <div className="about-header">
          <h1 className="section-title">
            Hey,
            <br/>
            I'm Leo!
          </h1>
        </div>
        <div className="separator-container">
          <span className="top-separator"></span>
          <span className="bottom-separator"></span>
        </div>
        <div className="about-text">
          <p>
            I am a <strong>Full Stack Software Engineer</strong> who loves solving problems and coming up with creative and innovative solutions. My journey as an engineer started a few years back, as a Petroleum Engineer. After working offshore in the Gulf of Mexico for a year, I decided to pursue my passion for <strong>technology</strong>. 
          </p>
          <p>
            One of my favorite hobbies is gaming. I like playing all kinds of videogames, from MMO's to MOBA's to single player story-rich games. Hit me up if you ever want to play together!
          </p>
        </div>
        <a href="/download/Leonardo_Deutsch_Resume.pdf" className="resume-button" download>
          <span>
            <i className="fa-solid fa-cloud-arrow-down fa-bounce"/>
            Resume
          </span>
        </a>
      </div>
    </section>
  );
}

export default About;