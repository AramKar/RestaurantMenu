import React from "react";
import './Fooddesk.css';
import kettleimg from "../image/kettle.png"

function DescriptionFood(props) {
    return (
    <div className="food-types">
        <div className="food-type1">
            <img className="kettle" src={kettleimg} alt="kettle" />
            <span className="magical-atmosphere">{props.type}</span>
            <span className="magical-atmosphere-text">{props.text}</span>
        </div>
    </div>
    )
}

export default DescriptionFood;



























