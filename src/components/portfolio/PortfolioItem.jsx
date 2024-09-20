import React from "react";
import "./portfolio.css";

const PortfolioItem = (props) => {
  return (
    <div className="portfolio__item">
      <div
        className="portfolio__item__top"
        style={{ backgroundColor: props.colorTop, cursor: "pointer" }}
        onClick={props.onClick}
      >
        <img
          className="portfolio__item__image"
          src={props.imgsrc}
          alt={props.imgalt}
        />
      </div>
      <div
        className="portfolio__item__mid"
        style={{ backgroundColor: props.colorMid }}
      ></div>
      <div
        className="portfolio__item__bot"
        style={{ backgroundColor: props.colorBot }}
      ></div>
    </div>
  );
};

export default PortfolioItem;
