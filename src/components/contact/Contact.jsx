import React from "react";
import "./contact.css";
import ProfilePic from "../../assets/profile_pic_casual.JPG";
import Linkedin from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";
import Email from "../../assets/icons/email.svg";
import Resume from "../../assets/files/Rachel_Kim_Resume.pdf";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__divider" />
      <h1 className="contact__title">Thanks for checking out my work!</h1>
      <div className="contact__content">
        <img src={ProfilePic} alt="Me" className="contact__image" />
        <div className="contact__info">
          <h2 className="contact__info__header">Contact me:</h2>
          <div className="contact__info__icon_container">
            <a
              href="https://www.linkedin.com/in/rachel-kim-632420213/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="contact__info__icon"
                src={Linkedin}
                alt="Linkedin icon"
              />
            </a>
            <a
              href="https://github.com/rhdmsdkk"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="contact__info__icon"
                src={Github}
                alt="Github icon"
              />
            </a>
            <a
              href="mailto:rachelgekim@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="contact__info__icon"
                src={Email}
                alt="email icon"
              />
            </a>
          </div>
          <a
            href={Resume}
            download="Rachel_Kim_Resume"
            target="_blank"
            rel="noreferrer"
            className="contact__btn"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="contact__footer">
        <p>rachelgekim@gmail.com</p>
        <p>(404) 358-2299</p>
      </div>
    </section>
  );
};

export default Contact;
