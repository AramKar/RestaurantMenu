import React from "react";
import History from "./HistoryResturant";
import ResturantHistoryImg from "./HistoryImages";
import OrderPart from './OrderPart'
import "./HistoryPart.css";


function HistoryPart() {
    return(  
    <div className="page2">
        <div className='page2-sector1'>
            <History></History>
        </div>
        
        <div className='page2-sector2'>
            <ResturantHistoryImg></ResturantHistoryImg>
        </div>
        <div className="page2-sector3">
            <OrderPart></OrderPart>
        </div>
  </div>);
}

export default HistoryPart;






