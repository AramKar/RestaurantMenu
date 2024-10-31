import React from "react";
import './OurDishes.css';
import BurgerTypes from './BurgerTypes';

function OurDishess() {
    return(
        <div className="our-dishes">
            <div className="our-dishes-title-cont"><span className="our-dishes-title">Наши <span style = {{color: "#BC9060"}}>Блюда</span></span></div>
            <div className="burger-menu-cont">
                <div className="burger-menu-img">
                    <img className = "pizza-img" src = "https://s3-alpha-sig.figma.com/img/eec3/2571/057ff3665c346c8148ff94f69519f217?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6rGZD99yOYTOA6tAf~2XPHrHAzmoiJjy332KGxRDkqm7OKjY~qo6KhI9A5KlpcmrXQq4j20bZWUtRDG~j8EtN3AMiJEG2~oRd13XC1PEv415XygzEg187f7FIOeTLnRbrgexgyKsLqRhw5zvyH2q29bPdL9poxlcK21qUcXcnRWO8larF5RJTe1OkOYAoxqwrrbPii~RrJWFWA~blG6S1VBD1pCPVvCt0Rl5rQG5aV1eRLu7Pp2rf7N0XE0DfSuX6E~1rZ6hybyPRO1h6Q-PLDomDhRHqRmcw9HzKB12afoBOeQg69AuJSBnczECONUIgi82B2cyv74SL6oAC9mvQ__"></img>
                </div>
                <div className="burger-menu-list">
                    <BurgerTypes text = "Гамбургер " price = "250 ₽"></BurgerTypes>
                    <BurgerTypes text = "Гамбургер max"  price = "270 ₽"></BurgerTypes>
                    <BurgerTypes text = "Pizza"  price = "820 ₽"></BurgerTypes>
                </div>
            </div>
        </div>
    );
}

export default OurDishess;
















