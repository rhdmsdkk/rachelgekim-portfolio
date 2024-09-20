import "./popups.css";
import React from "react";
import ShootyDemo from "../../../assets/videos/demo_shooty.mp4";

const ShootyPopup = () => {
  return (
    <div className="popup">
      <h1 className="popup__title">Shooty Girl</h1>
      <div className="shooty__content">
        <div className="shooty__desc_container">
          <p className="popup__desc">
            This is a tiny PVE shooter game solo-developed by me.
          </p>
          <p className="popup__desc">
            It&apos;s the first game I really committed to bringing to a
            presentable and shareable state.
          </p>
          <p className="popup__desc">
            The enemies can detect you and dodge your attacks - you can try it
            out right in your browser!
          </p>
        </div>
        <div className="shooty__demo_container">
          <video
            className="shooty__demo"
            src={ShootyDemo}
            autoPlay
            controls={false}
            loop
            disablePictureInPicture
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ShootyPopup;
