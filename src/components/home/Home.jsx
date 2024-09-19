import React from "react";
import ThingMain from "../../assets/thing_main.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={ThingMain} alt="Thing Main" />
      </div>
      <div className="home__description">
        <h2 className="home__header">Hi, I'm</h2>
        <h1 className="home__title">Rachel Kim</h1>
        <div className="home__divider" />
      </div>
    </div>
  );
};

export default Home;
