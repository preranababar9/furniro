import React from 'react'
import Signup from '../components/user/Signup'
import Header from '../components/common/Header'
import Contactpg from '../components/contact/Contactpg'
import Footer from '../components/common/Footer'
import Card from '../components/common/Card'

const Register = () => {
  return (
    <div>
      <Header/>
      <Signup/>
      <Card/>
      <Contactpg/>
      <Footer/>
    </div>
  )
}

export default Register