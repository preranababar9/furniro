import React from 'react'
import Login from "../components/user/Login"
import Header from '../components/common/Header'
import Contactpg from '../components/contact/Contactpg'
import Footer from '../components/common/Footer'
import Card from '../components/common/Card'

const Userloginpage = () => {
  return (
    <div>
         <Header/>
      <Login/>
         <Card/>
      <Contactpg/>
      <Footer/>
        </div>
  )
}

export default Userloginpage