import * as React from 'react';

export const Contact = () => {

  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="section-title">
            Get In Touch!
          </h1>
        </div>
        <div className="separator-container">
          <span className="top-separator"></span>
          <span className="bottom-separator"></span>
        </div>
        <a className="email" href="mailto:deutschleonardo@gmail.com">deutschleonardo@gmail.com</a>
        <div className="contact-links">
          <a className="contact-link" href="https://github.com/leonardodeutsch" target="_blank" aria-label="Github">
            <div className="contact-button">
              <div className="contact-icon">
                <i className="fa-brands fa-github-alt"></i>
              </div>
              <span>Github</span>
            </div>
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/leonardodeutsch/" target="_blank" aria-label="LinkedIn">
            <div className="contact-button">
              <div className="contact-icon">
              <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <span>LinkedIn</span>
            </div>
          </a>
          <a className="contact-link" href="https://twitter.com/CassieI_" target="_blank" aria-label="Twitter">
            <div className="contact-button">
              <div className="contact-icon">
              <i className="fa-brands fa-twitter"></i>
              </div>
              <span>Twitter</span>
            </div>
          </a>
          <a className="contact-link" href="https://twitch.tv/cassiel_" target="_blank" aria-label="Twitch">
            <div className="contact-button">
              <div className="contact-icon">
              <i className="fa-brands fa-twitch"></i>
              </div>
              <span>Twitch</span>
            </div>
          </a>
        </div>
      </div>
      <footer>
        <small>
          Contact: <a href="mailto:deutschleonardo@gmail.com" target="_blank">deutschleonardo@gmail.com</a>
        </small>
        <small>© 2022 Leonardo Deutsch. All Rights Reserved.</small>
      </footer>
    </section>
  );
}

export default Contact;

// {/* <div className="letter-image">
//           <div className="animated-mail">
//             <div className="back-fold"></div>
//             <div className="letter">
//               <div className="letter-border"></div>
//               <div className="letter-title"></div>
//               <div className="letter-context"></div>
//               <div className="letter-stamp">
//                 <div className="letter-stamp-inner"></div>
//               </div>
//             </div>
//             <div className="top-fold"></div>
//             <div className="body"></div>
//             <div className="left-fold"></div>
//           </div>
//           <div className="shadow"></div>
//         </div>
//         <div className="contact-form-wrapper">
//           {/* <ContactForm /> */}
//         </div> */}