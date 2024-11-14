import logo from './logo.svg';
import './App.css';
import WelcomePart from './Components/WelcomePart.js';
import HistoryPart from './Components/Historypart.js'
import AssortmentFoods from './Components/AssortmentFoods.js'
import MenuHamburger from "./Components/MenuHamburger.js";
import VisitorGallerydishes from './Components/VisitorGallerydishes.js'
import OurChefsAndImg from './Components/OurChefsAndImg.js';
import { useState } from 'react';


function App() {
  const [count, SetCount] = useState(0);


  return (
    <div>
      <WelcomePart count = {count} SetCount = {SetCount}/>
      <HistoryPart></HistoryPart>
      <AssortmentFoods></AssortmentFoods>
      <MenuHamburger count = {count} SetCount = {SetCount}></MenuHamburger>
      <VisitorGallerydishes></VisitorGallerydishes>
      <OurChefsAndImg></OurChefsAndImg>
    </div>
  );
}

export default App;
























