import React, { useState } from 'react';
import "./portfolio.css";
import Menu from "./Menu.jsx";

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((currElem) => {
            return currElem.category === categoryItem;
        });

        setItems(updatedItems);
    }

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Work</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="work__item" onClick={() => filterItem("School")}>School</span>
                <span className="work__item" onClick={() => filterItem("Games")}>Games</span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const{ id, image, title, category, link } = elem;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            {link && (
                                <a href={link} target="_blank" rel="noreferrer" className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;