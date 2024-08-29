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

<div className="lg:w-full flex max-md:flex-col lg:justify-between gap-x-4 gap-y-4 items-center">
        <div className="flex lg:w-[40%] w-full  items-center  flex-wrap  gap-3">
                <img src={set1} alt=""  className="object-cover max-md:w-1/3 " />
                <img src={set2} alt=""  className="object-cover lg:w-[84%] w-1/2"/>
                <img src={set6} alt="" className="object-cover" />
                <img src={set7} alt="" className="object-cover lg:w-[65%] w-3/4 "/>

               
             
        </div>
        
        <img src={set3} alt=""  className="lg:w-1/4 w-1/2 object-cover"/>

        <div className="flex lg:w-[40%] w-full max-md:flex-col max-md:items-center lg:flex-wrap gap-3">
        <img src={set4} alt=""  className="w-[51%] max-md:w-2/3"/>
        <img src={set5} alt=""  className=""/>
        <img src={set8} alt="" className="h-full" />
        <img src={set9} alt="" className="w-1/2 max-md:w-2/3" />
        </div>

        </div>
      </div>
    </section>
  );
};

export default Setup;
