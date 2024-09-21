import React, { useEffect } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import LinkIcon from "../../assets/icons/link.svg";
import "./portfolio.css";
import ShootyPopup from "./portfolio popups/ShootyPopup";
import AltarunePopup from "./portfolio popups/AltarunePopup";
import PopsignPopup from "./portfolio popups/PopsignPopup";
import GreenplatePopup from "./portfolio popups/GreenplatePopup";
import ActionPopup from "./portfolio popups/ActionPopup";

const ItemPopup = (props) => {
  const popupContent = (project) => {
    switch (project) {
      case "shooty":
        return <ShootyPopup />;
      case "altarune":
        return <AltarunePopup />;
      case "popsign":
        return <PopsignPopup />;
      case "greenplate":
        return <GreenplatePopup />;
      case "action":
        return <ActionPopup />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        props.close();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [props]);

  return (
    <div className="overlay">
      <div className="item_popup">
        <img
          className="close_btn"
          src={CloseIcon}
          alt="close icon"
          onClick={props.close}
        />
        <a href={props.link} target="_blank" rel="noreferrer">
          <img className="link_btn" src={LinkIcon} alt="link icon" />
        </a>
        {popupContent(props.project)}
      </div>
    </div>
  );
};

export default ItemPopup;
