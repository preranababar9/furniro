import React from "react";
import set1 from "/images/set1.svg";
import set2 from "/images/set2.svg";
import set3 from "/images/set3.svg";
import set4 from "/images/set4.svg";
import set5 from "/images/set5.svg";
import set6 from "/images/set6.svg";
import set7 from "/images/set7.svg";
import set8 from "/images/set8.svg";
import set9 from "/images/set9.svg";






const Setup = () => {
  return (
    <section className="py-20">
      <div>
        <div className="text-center pb-16">
          <p className="text-grey">Share your setup with</p>
          <h2 className="font-black font-bold text-3xl ">#FuniroFurniture</h2>
        </div>

<div className="lg:w-full flex max-md:flex-col justify-between gap-x-3 items-center">
        <div className="flex lg:w-[40%] w-full  items-center  lg:flex-wrap gap-6">
                <img src={set1} alt=""  className="object-cover" />
                <img src={set2} alt=""  className="object-cover"/>
                <img src={set6} alt="" className="object-cover" />
                <img src={set7} alt="" className="object-cover"/>

               
             
        </div>
        
        <img src={set3} alt=""  className="w-1/4 object-cover"/>

        <div className="flex lg:w-[40%] w-full lg:flex-wrap gap-6">
        <img src={set4} alt=""  className=""/>
        <img src={set5} alt=""  className=""/>
        <img src={set8} alt="" />
        <img src={set9} alt="" />
        </div>

        </div>
      </div>
    </section>
  );
};

export default Setup;
