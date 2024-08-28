import React from 'react'
import Signuplogin from '../components/Signuplogin'
import Header from '../components/common/Header'
import Contactpg from '../components/contact/Contactpg'
import Footer from '../components/common/Footer'
import Card from '../components/common/Card'

const Signup = () => {
  return (
    <div>
      <Header/>
      <Signuplogin/>
      <Card/>
      <Contactpg/>
      <Footer/>
    </div>
  )
}

export default Signup