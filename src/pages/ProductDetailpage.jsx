import React from 'react'
import Header from '../components/common/Header'
import ProductDetail from '../components/home/ProductDetail'
import Card from '../components/common/Card'
import Footer from '../components/common/Footer'
import Product from '../components/home/Product'

const ProductDetailpage = () => {
  return (
    <div>
        <Header/>
        <ProductDetail/>
        <Card/>
        <Product/>
        <Footer/>
    </div>
  )
}

export default ProductDetailpage