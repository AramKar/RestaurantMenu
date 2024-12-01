import logo from './logo.svg';
import './App.css';
import WelcomePart from './Components/WelcomePart.js';
import HistoryPart from './Components/Historypart.js'
import AssortmentFoods from './Components/AssortmentFoods.js'
import MenuHamburger from "./Components/MenuHamburger.js";
import VisitorGallerydishes from './Components/VisitorGallerydishes.js'
import OurChefsAndImg from './Components/OurChefsAndImg.js';
import { useState } from 'react';
import burgerImg from "./image/burgerImg.png";


function App() {
  const [count, SetCount] = useState(0);
  const [selectedBurger, SetSelectedBurger] = useState([])
  const [burgerCardData, setBurgerCardData]=useState([
    {
      title:"Burger Mini", price: 400, recomended:true, img: "/images/burgerImg.png",
    },


    {
      title:"Burger Medium", price:500, img: "/images/burgerImg.png",
    },
    {
      title:"Burger Maxi", price:600, img: "/images/burgerImg.png",
    }
])

  return (
    <div>
      <WelcomePart count = {count} SetCount = {SetCount} burgerCardData = {burgerCardData} setBurgerCardData= {setBurgerCardData} selectedBurger = {selectedBurger} SetSelectedBurger = {SetSelectedBurger}/>
      <HistoryPart></HistoryPart>
      <AssortmentFoods></AssortmentFoods>
      <MenuHamburger count = {count} SetCount = {SetCount} burgerCardData = {burgerCardData} setBurgerCardData= {setBurgerCardData} selectedBurger = {selectedBurger} SetSelectedBurger = {SetSelectedBurger}></MenuHamburger>
      <VisitorGallerydishes></VisitorGallerydishes>
      <OurChefsAndImg></OurChefsAndImg>
    </div>
  );
}

export default App;



















