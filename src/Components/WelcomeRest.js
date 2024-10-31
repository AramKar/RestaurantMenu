import React from "react";
import './WelcomeRest.css';



function WelcomeText() {
    return (
        <div className="welcome-sector">
            <div className="welcome-texts">
                <span className="welcome-text1">Добро пожаловать в</span><br></br>
                <span className="welcome-text2">Наш ресторан</span>
                <div className="home-food-good">
                    <div className="left-line"></div>
                    <span className="home-food-text">ДОМ ЛУЧШЕЙ ЕДЫ</span>
                    <div className="right-line"></div>
                </div>
                
            </div>
            <button class = "view-menu">VIEW MENU</button>
        </div>
    )
}

export default WelcomeText;























