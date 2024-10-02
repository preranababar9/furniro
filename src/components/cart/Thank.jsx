import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Thank = () => {
  return (
       <section className='py-20'>
 <div className='max-width'>
       <div className='flex  flex-col lg:pt-10  items-center'>
       <IoCheckmarkCircle size={100}   className='text-brown'/>


        <h3 className='lg:text-3xl py-5 text-xl font-bold  text-center'>Your order is confirmed Succesfully!!</h3>
       
        <p className='lg:text-md uppercase  text-sm text-center font-semibold py-3'>Your Order is on it's way. We will deliver your order within 2 to 3 business days. </p>
        <p className='text-xl py-5 text-center font-medium '>Thank you for Shopping from Furniro!</p>
        <Link to="/" className='bg-brown text-white lg:py-4  py-3 px-8 rounded-lg  font-bold text-lg my-3'>Continue Shopping</Link>


       </div>
        </div>
       </section>

   
  )
}

export default Thank