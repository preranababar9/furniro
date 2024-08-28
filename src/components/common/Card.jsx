import React from "react";
import card1 from "/icons/card1.svg";
import card2 from "/icons/card2.svg";
import card3 from "/icons/card3.svg";
import card4 from "/icons/card4.svg";


const Card = () => {
  return (
    <section className="mt-10 w-full bg-[#FAF3EA]">
      <div className="max-width py-20 flex max-md:flex-col items-center gap-y-20 justify-between ">

{card.map((item, index) => (
  <div key={index} className="flex gap-2 items-center  ">
  <img src={item.img} alt="" />
  <div>
  <h4 className="lg:text-2xl text-xl font-regular font-semibold">{item.title}</h4>
  <p className="text-md text-[#898989]">{item.des}</p>
  </div>
</div>
))}
      

      


      </div>
    </section>
  );
};

export default Card;

const card = [
        {
                img : card1,
                title : "High Quality",
                des : "Crafted from top materials"
        },
        {
                img : card2,
                title : "Warranty Protection",
                des : "Over 2 years"
        },
        {
                img : card3,
                title : "Free Shipping",
                des : "Order over 150 $"
        },
        {
                img : card4,
                title : "24 / 7 Support",
                des : "Dedicated support"
        },
        
        
]
