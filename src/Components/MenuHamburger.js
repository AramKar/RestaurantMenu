import React from "react";
import './MenuHamburger.css';
import HamburgersVariety from '../Components/HamburgersVariety.js';
import WelcomePart from "./WelcomePart.js";


function MenuHamburger({count, SetCount, burgerCardData, setBurgerCardData, selectedBurger, SetSelectedBurger}) {
    return(
        <div className="page4">
            <div className="our-menu">
                <div className="our-menu-cont"><span>Наше меню</span></div>
                <div className="all-hamburgers-cont">
                    {
                        burgerCardData.map((item) => {
                            return <HamburgersVariety title = {item.title} price = {item.price} count = {count} SetCount={SetCount} item = {item} SetSelectedBurger = {SetSelectedBurger } selectedBurger = {selectedBurger}></HamburgersVariety>
                        })
                    }
                </div>
            </div>
        </div>
    );
}


export default MenuHamburger;















