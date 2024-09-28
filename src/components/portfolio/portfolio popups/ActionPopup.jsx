import React from "react";
import "./popups.css";
import CombatDemo from "../../../assets/videos/demo_combat.gif";

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
          <img
            className="action__demo"
            src={CombatDemo}
            alt="combat game demo"
          />
        </div>
      </div>
    </div>
  );
};

export default ActionPopup;
