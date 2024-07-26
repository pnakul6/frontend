import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popuar from '../Components/Popular/Popuar'
import Offers from '../Components/Offers/Offers'
import NewCollections from "../Components/NewCollections/NewCollections"
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popuar/>
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop