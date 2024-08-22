import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   
    <section className='pt-20'> <hr></hr>
    <div className='max-width '>
      <div className='flex max-md:flex-col justify-between  py-10'>

        <div className=''>
          <h3 className='font-medium font-bold text-4xl pb-10'>furniro.</h3>
          <p className='text-offgrey w-3/5 '>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>

        <div className='flex flex-col gap-10'>
      <p className='text-lg text-offgrey font-normal '>Links</p>
      <ul className=' flex flex-col gap-10 font-semibold text-[#000000] text-xl '>

    <li><Link to="/home">Home</Link></li>
    <li><Link>Shop</Link></li>
    <li><Link>About</Link></li>
    <li><Link>Contact</Link></li>
    </ul>
        </div>


        
        <div className='flex flex-col gap-10'>
      <p className='text-lg text-offgrey font-normal'>Help</p>
      <ul className=' flex flex-col gap-10 font-semibold text-[#000000]  text-xl  '>

    <li><Link>Payment Options</Link></li>
    <li><Link>Returns</Link></li>
    <li><Link>Privacy Policies</Link></li>
    
    </ul>
        </div>

        <div className='flex flex-col'>
        <p className='text-lg text-offgrey font-normal pb-10'>Newsletter</p>

        <div className='flex gap-6'><p className='text-lg underline underline-offset-4 text-offgrey font-normal  pb-2'>Enter your Email Address</p>
        <p className='text-lg  font-semibold pb-2 underline underline-offset-4 uppercase'>Subscribe</p></div>
        </div>


      </div>

      <hr></hr>

      <p className='py-10 font-semibold text-lg'>2024 furniro. All rights reverved</p>
      </div>
    </section>
  )
}

export default Footer