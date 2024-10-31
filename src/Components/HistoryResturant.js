import React from "react";
import './HistoryResturant.css'

function History() {
    return(
        <div className="history-sector">
            <span className="history-title">
                Наша <span className="history-last-word">История</span>
            </span><br></br>
            <span className="history-text">Как и у любого другого самобытного места, у нас есть<br></br>
            своя, особая история. Идея ресторана пришла <br></br>
            основателям неожиданно. Во время прогулки по лесу<br></br>
            создатель нашего ресторана застрял в сотнях<br></br>
            километров от ближайшего населенного пункта. Вдали<br></br>
            от цивилизации и связи им пришлось навремя<br></br>
            обустровать себе нехитрый быт, добывать и <br></br>
            готовить себе еду.</span>

            <div className="history-numbers">
                <div className="drink-quantity">
                    <span className="drink-number">93</span>
                    <span className="drink">Напитки</span>
                </div>
                <div className="food-quantity">
                    <span className="food-number">206</span>
                    <span className="food">Еда</span>
                </div>
                <div className="snacks-quantity">
                    <span className="snack-number">71</span>
                    <span className="snack">Закуски</span>
                </div>
            </div>
        </div>
    )
}


export default History;


















