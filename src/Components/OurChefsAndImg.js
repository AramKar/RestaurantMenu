import React from "react";
import './OurChefsAndImg.css'
import OurChefs from './OurChefs';

function OurChefsAndImg() {
    return(
        <div className="our-chefs-and-img">
            <div className="OurChefsPage">
                <OurChefs></OurChefs>
            </div>
        <div className="last-img-cont">
            <img className = "last-img" src = "https://s3-alpha-sig.figma.com/img/efa7/a798/d0c46c43e55f909ab30a8c90a91f8f17?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FbLJamM2U5TqREhI4yV81C9ZxKDN29~vOXu3AWDxzl2uZj0NAj7V4AJ0QqAKKF1Bou584iylj8cFvwE5XokPVJxD6bV9Y04T4JF47jc8xfqIrhYQDwWSZ8q9VJOBQhkQrBz3EwaxY3Iw0LPTfkFmfkgwF1B6G2eB~Vf3CVIEemUB2iBSXxNE5l4o7ZJ8ITJEflL-yjfagwrsaEWf2MJ0tNn2rRPUv6yw8piA1QJimHZ4yxyZXGHWKmJf9pE8HTE0bCpLosfmwJl4g8-wXjb8RqDNoR7hyRIQUDPrNoRkEb6bbguBgZGfGgnRB~Pa8f0~JBTex87QNUTDEGAiWd3JAw__"></img>
        </div>
    </div>);
}

export default OurChefsAndImg;





























