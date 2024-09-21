import "./popups.css";
import React from "react";
import ShinobiZigDemo from "../../../assets/videos/shinobi_demo_zig.gif";
import ShinobiSweepDemo from "../../../assets/videos/shinobi_demo_sweep.gif";

const AltarunePopup = () => {
  return (
    <div className="popup">
      <h1 className="popup__title">Altarune</h1>
      <div className="altarune__content">
        <div className="altarune__desc">
          <p className="popup__desc">
            I&apos;m currently working on this action/tower defense rogue-like
            as a programmer for{" "}
            <a
              className="popup__link"
              href="https://www.gtvgdev.com/"
              target="_blank"
              rel="noreferrer"
            >
              VG Dev @ Georgia Tech.
            </a>
          </p>
          <iframe
            className="altarune__demo"
            src="https://www.youtube.com/embed/lcb5APFt-eI?si=LFygcaoVBI7hQgh-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="altarune__shinobi">
          <div className="altarune__shinobi_desc">
            <p className="popup__desc">
              My major contribution is the behavior for the shinobi enemy. It
              carries out one of two possible attacks when the player is near.
            </p>
            <p className="popup__desc">
              The enemy logic was implemented with a state machine.
            </p>
          </div>
          <div className="altarune__shinobi_demo">
            <img
              className="shinobi_demo"
              src={ShinobiZigDemo}
              alt="shinobi zigzag attack demo"
            />
            <img
              className="shinobi_demo"
              src={ShinobiSweepDemo}
              alt="shinobi sweep attack demo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltarunePopup;
