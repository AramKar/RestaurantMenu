import React from 'react'
import MenuParents from './Menu'
import DescriptionFood from './Fooddesc'
import WelcomeText from './WelcomeRest'
import './WelcomePart.css'

const WelcomePart = ({count,SetCount, burgerCardData, setBurgerCardData, selectedBurger, SetSelectedBurger} ) => {
  return (
    <div className='page1'>
    <div className='page1-chef-sector'>
        <MenuParents count = {count} SetCount = {SetCount} burgerCardData = {burgerCardData} setBurgerCardData= {setBurgerCardData} selectedBurger = {selectedBurger} SetSelectedBurger = {SetSelectedBurger}></MenuParents>
        <WelcomeText></WelcomeText>
    </div>
    <div className='page1-sector2'>
        <DescriptionFood type = "Магическая Атмосфера" text = "В нашем заведении царит  магическая атмосфера наполненная вкусными ароматами" ></DescriptionFood>
        <DescriptionFood type = "Лучшее качество Еды" text = "Качество нашей Еды - отменное!"></DescriptionFood>
        <DescriptionFood type = "Недорогая Еда" text = "Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!"></DescriptionFood> 
    </div>
  </div>
  )
}

export default WelcomePart;