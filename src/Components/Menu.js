import React from "react";
import "./Menu.css"

function MenuParents() {
    return(
      <div>
            <div className = "page-logo">
                <div className = "logo-square"></div>
                <div className ="logo-square2"></div>
            </div>
            <div className="page-menu">
                <div className="menu-spans">
                    <span>ГЛАВНАЯ</span>
                    <span>МЕНЮ</span>
                    <span>О НАС</span>
                    <span>БРОНЬ</span>
                </div>
                <img src = "https://png.pngtree.com/element_our/20190531/ourmid/pngtree-grey-shopping-cart-free-map-image_1280880.jpg" class = "shopping-cart"></img>
                <div className = "straight-border"></div>
                <div className = "contact">
                    <div className="contact-number">
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTb6SBl9dD2zzyFKh5VbzO-_LuF7vRM5zkg&s" class = "contact-call"></img>
                        <span className = "number">+999-888-76-54</span>
                    </div>
                    <div className="call-order-text">
                        <span className="order-text">Свяжитесь с нами для бронирования</span>
                    </div>
                </div>
                <button className="order-button">ЗАКАЗ СТОЛИКА</button>
            </div>
        </div>
        
    )
}

export default MenuParents;










