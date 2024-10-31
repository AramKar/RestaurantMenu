import logo from './logo.svg';
import './App.css';
import MenuParents from './Components/Menu.js';
import WelcomeText from './Components/WelcomeRest.js';
import DescriptionFood from './Components/Fooddesc.js';
import History from './Components/HistoryResturant.js';
import ResturantHistoryImg from './Components/HistoryImages.js'
import kettleimg from "../src/image/kettle.png"
import WelcomePart from './Components/WelcomePart.js';
import HistoryPart from './Components/Historypart.js'
import AssortmentFoods from './Components/AssortmentFoods.js'
import MenuHamburger from "./Components/MenuHamburger.js";
import VisitorGallerydishes from './Components/VisitorGallerydishes.js'
import OurChefsAndImg from './Components/OurChefsAndImg.js';


function App() {
  return (
    <div>
      <WelcomePart/>
      <HistoryPart></HistoryPart>
      <AssortmentFoods></AssortmentFoods>
      <MenuHamburger></MenuHamburger>
      <VisitorGallerydishes></VisitorGallerydishes>
      <OurChefsAndImg></OurChefsAndImg>
    </div>
  );
}

export default App;
























