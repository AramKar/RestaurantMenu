import React from "react";
import './VisitorGallerydishes.css'
import GalleryDishesPage from './GalleryDishesPage';

function VisitorGallerydishes() {
    return(
        <div className="visitor-gallerydishes">
            <div className="visitor-opinion">
                <div className="visitor-opinion-content">
                    <div className="opinion-text-cont"><span className="opinion-text">
                    Я надолго запомню мой День рождения, проведённый в этом ресторане! 
                    Кусочек родной<br></br> Армении!!! Отдельное спасибо за комплепент в виде 
                    фруктовой тарелки. Будем<br></br> рекомендовать этот ресторан своим друзьям и 
                    родственникам также за рубежом,<br></br> путешествующих в Санкт-Петербург!!!</span></div>
                    <div><img className = 'visitor-img' src = "https://s3-alpha-sig.figma.com/img/9ae6/d714/cac3ffbca7363e42e864eca2179f992e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUHbBRKPcKDO7BKsHbk5MNQYLavW8D-0a9R~OcO4446yMECRbfISci4vl6a095UazKjV9MRRNgYBhCgbpdK-3y3b8mKawpwp1Cm8v~ycacM3sRCpzTxy4buT7o5SfGHxpNbq9079sq5XvKEbhmxVA7wm2-rPFEyqDOCc5pYYWNY5f4sV8vsSI2jE~U25-S6Fe4O7qevkTi2UpkiT5rkaoTiH4-SDzwW5fYTh3yxW2E9MpYp-IGwnO7Rkqa2WsKIG0RVIf-XiBR3C3Aw7yfdbJS4GGPVs6hhi~iviLeaVKdHqKKV-znEdmuPHGDOsWUBitsZbzbynvJk6QSx~p3q8WQ__"></img></div>
                    <div className="visitor-text-cont"><span className="visitor-text">Посетитель</span></div>
                    <div className="visitor-name-cont"><span className="visitor-name">Николай</span></div>
                    <div className="opinion-pages">
                        <div className="page1-circle"></div>
                        <div className="page2-circle"></div>
                        <div className="page3-circle"></div>
                    </div>
                </div>
            </div>
            <GalleryDishesPage></GalleryDishesPage>
        </div>
    );
}

export default VisitorGallerydishes;
























