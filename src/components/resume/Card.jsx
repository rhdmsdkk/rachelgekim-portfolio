import React from "react";

const Card = (props) => {
    if (props.icon === "icon-briefcase") {
        return (
            <div className="timeline__item">
                <i className={props.icon}></i>
                <span className="timeline__date">{props.year}</span>
                <h3 className="timeline__exTitle">{props.title}</h3>
                <span className="timeline__company">{props.company}</span>
                <p className="timeline__text">{props.desc}</p>
            </div>
        )
    }
    else if (props.icon === "icon-layers") {
        return (
            <div className="timeline__item">
                <i className={props.icon}></i>
                <span className="timeline__date">{props.year}</span>
                <h3 className="timeline__title">{props.title}</h3>
                <p className="timeline__text">{props.desc}</p>
            </div>
        )
    }
    return null;
}

export default Card;