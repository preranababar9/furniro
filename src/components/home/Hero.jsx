import React from 'react'
import hero from "/images/hero.svg";

const Hero = () => {
  return (
        <section className=''>
    <div className='relative'>

        <img src={hero} alt="" className='h-[90vh] lg:w-full object-cover' />

        <div className='bg-peach lg:h-[56%]  max-md:text-center lg:w-[38%] w-100vw absolute rounded-lg lg:px-12 py-8 max-lg:left-[50%] max-md:left-4 px-4 lg:top-[30%]  top-28 lg:right-[10%] max-md:right-4 max-lg:right-10'>
        <p className=' pt-2 font-regular font-semibold text-lg  pb-2'>New Arrival</p>
        <h1 className='text-brown font-medium font-bold lg:text-4xl  text-3xl lg:w-3/4 tracking-normal pb-3'>Discover Our New Collection</h1>
        <p className='text-black pb-6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

        <button className='bg-brown  text-white md:px-12 px-8 uppercase font-bold text-sm py-4'>Buy Now</button>
        </div>
        </div>
        </section>
  )
}

export default Hero