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
  const [currProject, setcurrProject] = useState("");
  const [currLink, setCurrLink] = useState("");

  return (
    <section className="portfolio" id="portfolio">
      <PortfolioItem
        colorTop="#BE9F3B"
        colorMid="#859B58"
        colorBot="#DAFFFF"
        imgsrc={AltaruneThumbnail}
        imgalt="Altarune thumbnail"
        onClick={() => {
          setcurrProject("altarune");
          setCurrLink("https://github.com/rhdmsdkk/Rachel-Altarune");
          document.body.style.overflow = "hidden";
        }}
      />
      <PortfolioItem
        colorTop="#DF6C82"
        colorMid="#ECC849"
        colorBot="#7AA8E4"
        imgsrc={PopSignThumbnail}
        imgalt="PopSign thumbnail"
        onClick={() => {
          setcurrProject("popsign");
          setCurrLink("https://www.popsign.org/");
          document.body.style.overflow = "hidden";
        }}
      />
      <PortfolioItem
        colorTop="#AD9C83"
        colorMid="#8E7C60"
        colorBot="#DDCBB0"
        imgsrc={ShootyGirlThumbnail}
        imgalt="Shooty Girl thumbnail"
        onClick={() => {
          setcurrProject("shooty");
          setCurrLink("https://rhdmsdkk.github.io/shooty-girl-play/");
          document.body.style.overflow = "hidden";
        }}
      />
      <PortfolioItem
        colorTop="#74C178"
        colorMid="#45813D"
        colorBot="#FFFFFF"
        imgsrc={GreenPlateThumbnail}
        imgalt="GreenPlate thumbnail"
        onClick={() => {
          setcurrProject("greenplate");
          setCurrLink("https://github.com/jeffreycjj6/GreenPlate");
          document.body.style.overflow = "hidden";
        }}
      />
      <PortfolioItem
        colorTop="#EB9F46"
        colorMid="#2C2E30"
        colorBot="#FAFAF7"
        imgsrc={ActionThumbnail}
        imgalt="Action game thumbnail"
        onClick={() => {
          setcurrProject("action");
          setCurrLink("https://github.com/rhdmsdkk/combat-game");
          document.body.style.overflow = "hidden";
        }}
      />
      {currProject && (
        <ItemPopup
          close={() => {
            setcurrProject("");
            setCurrLink("");
            document.body.style.overflow = "";
          }}
          project={currProject}
          link={currLink}
        />
      )}
    </section>
  );
};

export default Portfolio;
