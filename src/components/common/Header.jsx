import React from 'react'
import { Link } from "react-router-dom";
import navlogo from "/logo/navlogo.svg";
import account from "/icons/account.svg";
import search from "/icons/nav-search.svg";
import wishlist from "/icons/wishlist.svg";
import cart from "/icons/cart.svg";




const Header = () => {
  return (
   
    <div>
      <div className='flex justify-between max-width  py-4 items-center '>
    <img src={navlogo} alt="" />

    <ul className='flex gap-14 font-black font-normal text-xl max-md:hidden '>

    <li className='hover:underline hover:underline-offset-4 hover:scale-105'><Link to="/home">Home</Link></li>
    <li className='hover:underline hover:underline-offset-4 hover:scale-105'><Link to="/shop">Shop</Link></li>
    <li className='hover:underline hover:underline-offset-4 hover:scale-105'><Link>About</Link></li>
    <li className='hover:underline hover:underline-offset-4 hover:scale-105'><Link>Contact</Link></li>
    </ul>

<div className='flex lg:gap-14'>
    <img src={account} alt=""  className='h-6'/>
    <img src={search} alt=""   className='h-6'/>
    <img src={wishlist} alt="" className='h-6'/>
    <img src={cart} alt=""     className='h-6'/></div>
      </div>
      </div>
   
  )
}

export default Header