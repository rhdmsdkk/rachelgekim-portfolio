import React, { useEffect } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import "./portfolio.css";

const ItemPopup = (props) => {
  const { children } = props;

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
        {children}
      </div>
    </div>
  );
};

export default ItemPopup;
