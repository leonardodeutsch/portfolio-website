import * as React from 'react';
import * as avatar from '../images/avatar.png';

export const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <div className="home-left">
          <h1 className="section-title">
            Leonardo
            <br/>
            Deutsch
          </h1>
          <div className="separator-container">
            <span className="top-separator"></span>
            <span className="bottom-separator"></span>
          </div>
          <p>
            Software Engineer
          </p>
        </div>
        <div className="home-right">
          <img src={avatar} alt="Leonardo Deutsch Avatar" className="avatar"></img>
        </div>
      </div>
    </section>
  );
}

export default Home;