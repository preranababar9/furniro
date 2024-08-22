import React from 'react'
import hero from "/images/hero.svg";

const Hero = () => {
  return (
        <section className=''>
    <div className='relative'>

        <img src={hero} alt="" className='h-[90vh] lg:w-full object-cover' />

        <div className='bg-peach h-[55%] lg:w-[38%] absolute rounded-lg lg:px-12 py-10 top-[30%] right-[10%]'>
        <p className=' pt-2 font-regular font-semibold text-lg pb-2'>New Arrival</p>
        <h1 className='text-brown font-medium font-bold lg:text-5xl  text-3xl w-3/4 tracking-normal pb-3'>Discover Our New Collection</h1>
        <p className='text-black pb-10'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

        <button className='bg-brown text-white px-12 uppercase font-bold text-sm py-4'>Buy Now</button>
        </div>
        </div>
        </section>
  )
}

export default Hero