import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import PopSignThumbnail from "../../assets/thumbnails/thumbnail_popsign.png";
import ShootyGirlThumbnail from "../../assets/thumbnails/thumbnail_shootygirl.png";
import ActionThumbnail from "../../assets/thumbnails/thumbnail_action.png";
import AltaruneThumbnail from "../../assets/thumbnails/thumbnail_altarune.png";
import GreenPlateThumbnail from "../../assets/thumbnails/thumbnail_greenplate.png";
import "./portfolio.css";
import ItemPopup from "./ItemPopup";

const Portfolio = () => {
  const [currPopup, setCurrPopup] = useState("");

  return (
    <section className="portfolio" id="portfolio">
      <PortfolioItem
        colorTop="#BE9F3B"
        colorMid="#859B58"
        colorBot="#DAFFFF"
        imgsrc={AltaruneThumbnail}
        imgalt="PopSign thumbnail"
        onClick={() => {
          setCurrPopup("altarune");
        }}
      />
      <PortfolioItem
        colorTop="#DF6C82"
        colorMid="#ECC849"
        colorBot="#7AA8E4"
        imgsrc={PopSignThumbnail}
        imgalt="PopSign thumbnail"
        onClick={() => {
          setCurrPopup("popsign");
        }}
      />
      <PortfolioItem
        colorTop="#AD9C83"
        colorMid="#8E7C60"
        colorBot="#DDCBB0"
        imgsrc={ShootyGirlThumbnail}
        imgalt="Shooty Girl thumbnail"
        onClick={() => {
          setCurrPopup("shooty");
        }}
      />
      <PortfolioItem
        colorTop="#EB9F46"
        colorMid="#2C2E30"
        colorBot="#FAFAF7"
        imgsrc={ActionThumbnail}
        imgalt="Action game thumbnail"
        onClick={() => {
          setCurrPopup("action");
        }}
      />
      <PortfolioItem
        colorTop="#74C178"
        colorMid="#45813D"
        colorBot="#FFFFFF"
        imgsrc={GreenPlateThumbnail}
        imgalt="GreenPlate thumbnail"
        onClick={() => {
          setCurrPopup("greenplate");
        }}
      />
      {currPopup && (
        <ItemPopup
          close={() => {
            setCurrPopup("");
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              width: "100%",
              height: "100%",
            }}
          >
            hello
          </div>
        </ItemPopup>
      )}
    </section>
  );
};

export default Portfolio;
