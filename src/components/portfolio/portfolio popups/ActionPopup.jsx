import React from "react";
import "./popups.css";
import CombatDemo from "../../../assets/videos/demo_combat.mp4";

const ActionPopup = () => {
  return (
    <div className="popup">
      <h1 className="popup__title">Exploration of Combat Mechanics</h1>
      <div className="action__content">
        <div className="action__desc_container">
          <p className="popup__desc">
            This is a WIP exploration of 3D action/combat mechanics in Unity.
            With this, I'm aiming to understand more about object-oriented
            design, game AI, and physics-based tools. Stay tuned to see how this
            project evolves!
          </p>
        </div>
        <div className="action__demo_container">
          <video
            className="action__demo"
            src={CombatDemo}
            autoPlay
            controls={false}
            loop
            disablePictureInPicture
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ActionPopup;
