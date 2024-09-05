import React from 'react'
import Header from '../components/common/Header';
import Hero from '../components/home/Hero';
import Inspire from '../components/home/Inspire';
import Product from '../components/home/Product';
import Range from '../components/home/Range';
import Setup from '../components/home/Setup';
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Inspire/>
      <Range/>
      <Product/>
      
      <Setup/>
      <Footer/>
    </div>
  )
}

export default Home