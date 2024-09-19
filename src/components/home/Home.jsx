import React from "react";
import ThingMain from "../../assets/thing_main.svg";
import ChevronDown from "../../assets/icons/chevron.svg";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__image_container">
        <img src={ThingMain} alt="Thing Main" />
      </div>
      <div className="home__description_container">
        <h2 className="home__header">Hi, I'm</h2>
        <h1 className="home__title">Rachel Kim</h1>
        <div className="home__divider" />
        <p className="home__description">
          I&apos;m a computer science student @ Georgia Tech with threads in
          Media and Intelligence.
        </p>
        <br />
        <p className="home__description">
          I love all things coding & game development! This is the place to see
          what I&apos;ve been building.
        </p>
      </div>
      <div className="home__down_icon">
        <a href="#portfolio">
          <img src={ChevronDown} alt="Chevron Down" />
        </a>
      </div>
    </section>
  );
};

export default Home;
