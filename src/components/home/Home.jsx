import React from 'react';
import "./home.css";
import Me from "../../assets/profile_thing.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="homeImg" />
                <h1 className="home__name">Rachel Kim</h1>
                <span className="home__education">CS Student @ Georgia Tech</span>

                <HeaderSocials />

                <a href="https://github.com/rhdmsdkk/rachelgekim-portfolio.git" target="_blank" rel="noreferrer" className="btn">Site Repository</a>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;