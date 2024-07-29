import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popuar from '../Components/Popular/Popuar'
import Offers from '../Components/Offers/Offers'
import NewCollections from "../Components/NewCollections/NewCollections"
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popuar/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop