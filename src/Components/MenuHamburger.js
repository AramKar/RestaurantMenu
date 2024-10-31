import React from "react";
import './MenuHamburger.css';
import HamburgersVariety from '../Components/HamburgersVariety.js';
import VisitorGallerydishes from './VisitorGallerydishes.js'



function MenuHamburger() {
    return(
        <div className="page4">
            <div className="our-menu">
                <div className="our-menu-cont"><span>Наше меню</span></div>
                <div className="all-hamburgers-cont">

                    <HamburgersVariety price = "420" recomended></HamburgersVariety>
                    <HamburgersVariety price = "590"></HamburgersVariety>
                    <HamburgersVariety price = "2450"></HamburgersVariety>
                </div>
            </div>
        </div>
    );
}


export default MenuHamburger;















