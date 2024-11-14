import React from "react";
import './MenuHamburger.css';
import HamburgersVariety from '../Components/HamburgersVariety.js';


function MenuHamburger({count, SetCount}) {
    console.log(SetCount, "SetCount")
    return(
        <div className="page4">
            <div className="our-menu">
                <div className="our-menu-cont"><span>Наше меню</span></div>
                <div className="all-hamburgers-cont">
                    
                    <HamburgersVariety price = "420" recomended count = {count} SetCount = {SetCount}></HamburgersVariety>
                    <HamburgersVariety price = "590" count = {count} SetCount = {SetCount}></HamburgersVariety>
                    <HamburgersVariety price = "2450" count = {count} SetCount = {SetCount}></HamburgersVariety>
                </div>
            </div>
        </div>
    );
}


export default MenuHamburger;















