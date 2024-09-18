import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Product from '../components/home/Product'
import Thank from '../components/cart/Thank'

const Order = () => {
  return (
    <div>
        <Header/>
        <Thank/>
      <Product/>
        <Footer/>

    </div>
  )
}

export default Order