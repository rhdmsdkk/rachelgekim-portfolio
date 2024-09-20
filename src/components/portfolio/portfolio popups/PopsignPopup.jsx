import React from "react";
import "./popups.css";

const PopsignPopup = () => {
  return (
    <div className="popup">
      <h1 className="popup__title">PopSign</h1>
      <div className="popsign__content">
        <div className="popsign__desc_container">
          <p className="popup__desc">
            PopSign is an educational ASL learning game aimed at parents of deaf
            children created through partnership between RIT/NTID, Google, and
            Georgia Tech.
          </p>
          <iframe
            className="popsign__demo"
            src="https://www.youtube.com/embed/WC9x3jp_nV8?rel=0&si=FzYJunSll3Doc7vE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className="popup__desc">
            I joined this project through{" "}
            <a
              className="popup__link"
              href="https://vip.gatech.edu/vip-vertically-integrated-projects-program"
              target="_blank"
              rel="noreferrer"
            >
              Georgia Tech's VIP
            </a>{" "}
            program. I contribute as a software developer and gameplay
            programmer in Unity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopsignPopup;
