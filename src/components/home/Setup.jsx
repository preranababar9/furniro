import React from "react";
import set1 from "/images/set1.jpg";
import set2 from "/images/set2.jpg";
import set3 from "/images/set3.svg";
import set4 from "/images/set4.svg";
import set5 from "/images/set5.svg";
import set6 from "/images/set6.jpg";
import set7 from "/images/set7.jpg";
import set8 from "/images/set8.jpg";
import set9 from "/images/set9.svg";
import Marquee from "react-fast-marquee";

const Setup = () => {
  return (
    <section className="py-20">
      <div>
        <div className="text-center pb-16">
          <p className="text-grey">Share your setup with</p>
          <h2 className="font-black font-bold text-3xl ">#FuniroFurniture</h2>
        </div>

        <div className="mb-10">
          <Marquee direction="right" pauseOnHover>
            {" "}
            <img src={set1} alt="" className="h-60 w-58 object-cover mr-10 " />
            <img src={set2} alt="" className="h-60 w-58 object-cover mr-10 " />
            <img src={set6} alt="" className="h-60 w-58 object-cover mr-10" />
            <img src={set7} alt="" className="h-60 w-58 object-cover mr-10" />
            <img src={set3} alt="" className="h-60 w-58 object-cover mr-10" />
            <img src={set1} alt="" className="h-60 w-58 object-cover mr-10 " />
            <img src={set2} alt="" className="h-60 w-58 object-cover mr-10 " />
            <img src={set6} alt="" className="h-60 w-58 object-cover mr-10" />
            <img src={set7} alt="" className="h-60 w-58 object-cover mr-10" />
            <img src={set3} alt="" className="h-60 w-58 object-cover mr-10" />{" "}
          </Marquee>
        </div>

       <Marquee direction="left" pauseOnHover><img src={set4} alt="" className="h-60 w-58 object-cover mr-10 " />
        <img src={set5} alt="" className="h-60 w-58 object-cover mr-10 " />
        <img src={set8} alt="" className="h-60 w-58 object-cover mr-10 " />
        <img src={set9} alt="" className="h-60 w-48 object-cover mr-10 " />
        <img src={set5} alt="" className="h-60 w-58 object-cover mr-10 " />
        <img src={set8} alt="" className="h-60 w-58 object-cover mr-10 " />
        <img src={set9} alt="" className="h-60 w-48 object-cover mr-10 " />
        </Marquee> 
      </div>
    </section>
  );
};

export default Setup;
