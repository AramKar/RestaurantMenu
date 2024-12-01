import React, { useState } from "react";
import "./Menu.css"
import callContact from '../image/call-contact.png';
import shoppingCard from '../image/shopping-card.png';



function MenuParents({count, setCount, burgerTitle, burgerCardData, setBurgerCardData, selectedBurger, SetSelectedBurger}) {
    const[popup, SetPopup] = useState(false);

    let popUpOpen = () => {
        if(popup) {
            SetPopup(!popup)
        } else {
            SetPopup(true)
        }
    }

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
                <div className="shopping-card-cont">
                    <div className="shopping-number" >{count}</div>
                    <img onClick = {popUpOpen} src = {shoppingCard} class = "shopping-cart"></img>
                    {popup ? (
                        <div className="PopUp">
                            {selectedBurger.map((item) => {
                                console.log(item, "basketItem")
                                return <div >
                                    <p style = {{color: "#D67E34", fontSize: "45px", fontFamily: "cursive"}}>{item.title}</p>
                                    <img src ={item.img}></img>
                                    <p style = {{color: "#D67E34", fontSize: "28px", fontFamily: "cursive"}}>Price: {item.price}$</p>
                                </div>
                            })}
                        </div>
                    ) : null}

                </div>
                <div className = "straight-border"></div>
                <div className = "contact">
                    <div className="contact-number">
                        <img src = {callContact} class = "contact-call"></img>
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










