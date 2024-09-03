import React from 'react';
import sofa from "/images/sofa.svg";
import { FaMinus } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";

const ProductDetail = () => {
  return (
        <section className='py-20 '>
    <div className='max-width'>
      <div className='flex max-md:flex-col gap-y-5 '>
        {/* images */}
<div className='lg:w-1/2'>
        <div className='h-full lg:w-4/5 lg:py-16  py-10 px-2 bg-pink'>
<img src={sofa} alt="" className='h-full' /></div>
</div>

{/* descpritions */}

<div className='lg:w-1/2'>
       <h2 className='text-4xl  pb-4'>Agorda Sofa</h2>
       <p  className='text-2xl  text-offgrey pb-4'>Rs.2,50,000</p>
       <p  className='text-md lg:w-3/4 pb-6'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

<p className='text-lg tracking-wide pb-4 text-offgrey '>Size</p>
<div className='flex gap-5 pb-6'>
        <button className='hover:bg-brown bg-peach rounded-lg text-black h-8 w-8  hover:text-white'>L</button>
        <button className='hover:bg-brown bg-peach rounded-lg text-black h-8 w-8  hover:text-white'>XL</button>
        <button className='hover:bg-brown bg-peach rounded-lg text-black h-8 w-8  hover:text-white'>XS</button>
</div>

<p className='text-lg tracking-wide pb-4 text-offgrey'>Color</p>
<div className='flex gap-5 pb-10'>
        <button className='rounded-full bg-brown h-8 w-8 text-brown'></button>
        <button className='rounded-full bg-blue-300 h-8 w-8 text-brown'></button>
        <button className='rounded-full bg-black h-8 w-8 text-brown'></button>
</div>

<div className='flex flex-wrap gap-10 items-center'>
        <div className='flex items-center gap-6 border-2 border-solid border-offgrey rounded-lg lg:w-1/4  w-1/2 py-3 max-md:px-10  justify-center'>
        {/* quantity */}
        <button className='   '><FaMinus size={16} /></button>
       <input type="number" placeholder='1' className='lg:w-1/4 w-full pl-4 text-lg'/>
        <button className='   '><MdAdd size={20}  /></button>
        </div>

        <div>
                <button className='border-2 border-solid border-black lg:text-lg rounded-lg w-full lg:px-10 px-2 py-3'>Add to Cart</button>
        </div>
</div>

</div>
      </div>


        </div>
    </section>
  )
}

export default ProductDetail