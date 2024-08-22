import React from 'react'
import Header from '../components/common/Header'
import Hero from '../components/Home/Hero'
import Inspire from '../components/Home/Inspire'
import Product from '../components/Home/Product'
import Range from '../components/Home/Range'
import Setup from '../components/Home/Setup'
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Inspire/>
      <Product/>
      <Range/>
      <Setup/>
      <Footer/>
    </div>
  )
}

export default Home