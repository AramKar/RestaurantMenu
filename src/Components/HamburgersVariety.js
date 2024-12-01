import {useState}  from 'react';
import React from "react";
import './HamburgersVariety.css';


function HamburgersVariety({count, SetCount, price, title, recomended, burgerCardData, setBurgerCardData, item, selectedBurger, SetSelectedBurger}) {
    const [localCounter, setLocalCounter] = useState(0);

    let MinusCounter = () => {
        if (localCounter > 0) {
            setLocalCounter(localCounter - 1);
        } else {
            setLocalCounter(0);
        }
    };

    let PlusCounter = () => {
        setLocalCounter(localCounter + 1);
    };

    let MyBasket = () => {
        SetCount((prev) => prev + localCounter);
        console.log(item)
        SetSelectedBurger((prev) => [...prev, item])
        // setBurgerCardData((prev) => [...prev, {burgerName: title}]);
    };
 
    return (
        <div className="burger-variety-cont">
            <div className="recomended-cont">
                {recomended == true ? <button  className='recomended'>RECOMMENDED</button> : null}
            </div>
            <div className="hamburger-img-cont">
                <img
                    src="https://s3-alpha-sig.figma.com/img/b809/7ea6/cc3a738cc3c595dce4f51cc20347632d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OUA8CbpO~zIW-~rRpWiadKnaSyqMo8Z1YxQxIC~V-pIPfGm3qjCl4zFM7iY62ilfvdXRq0ctrVQnO4QnVVWMBXHSVRdh8t5ioZazk~B-Pz5LesCpVLM2LWo~R934VAQck8TKFvBE-AixbbeRSTjfl-ma4JlD2XpfXIB5xoy6WLARQNWvg5UGkSYooMCH6ndTNsNGqTuvSZxI~6ZeMOf-fdFr2iRKVlAGRgUt2hUeR9IGofohXfE0HYXmmlsRAvxe7ExWRMADX25fz5jH60FtrGc1NaBhDmsvh1L9DAF7ZoETEN8VK-HVNzx-a6MtS38-hmQkVpO5IOKDOiZ2p8OeTA__"
                />
            </div>
            <div className="burger-img-design">
                <span>{price}</span>
            </div>
            <div className="hamburger-size-cont">
                <span className="hamburger-size">{title}</span>
            </div>
            <div className="hamburger-description-cont">
                <span className="hamburger-description">Максимально толстый слой мяса</span>
            </div>
            <button className="hamburger-order">ЗАКАЗАТЬ</button>

            <div className="burger-quantity">
                <button onClick={MinusCounter} className="minus-button">
                    -
                </button>
                <h3 className='zero-count'>{localCounter}</h3>
                <button onClick={PlusCounter} className="plus-button">
                    +
                </button>
                <button className="add-basket" onClick={MyBasket}>
                    Add Basket
                </button>
            </div>
        </div>
    );
}

export default HamburgersVariety;














