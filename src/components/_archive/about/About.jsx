import React from "react";
import "./about.css";
import Resume from "../../../assets/files/Rachel_Kim_Resume.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi! My name is Rachel Kim. I first started coding when I was in
              the fourth grade. Now, I'm studying computer science at the
              Georgia Institute of Technology in the Intelligence and Media
              threads. This field is a dream come true for me - and I love
              making video games and dabbling in tech art!
            </p>
            <a
              href={Resume}
              download="Rachel_Kim_Resume"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Download Resume
            </a>
          </div>

          <div className="about__skill grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  C#, Java, TypeScript, HTML, CSS,
                </h3>
                <span className="skills__number">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage top"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript, C++</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage mid"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">C, Python</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage bot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
