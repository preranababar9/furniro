import React, { useEffect, useState } from "react";
import range1 from "/images/range1.svg";
import range2 from "/images/range2.svg";
import range3 from "/images/range3.svg";
import { getAllCategoryData } from "../../../services/categories";

const Range = () => {
  const [categoryData, setCategoryData] = useState([]);

  const getCategoryData = async () => {
    try {
      const response = await getAllCategoryData();
      setCategoryData(response);
      console.log(response);
      
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    console.log("hjfjhf");
    
    getCategoryData;
  }, []);

  console.log(categoryData);
  
  return (
    <section className="py-20">
      <div className="max-width">
        <div className="text-center pb-16">
          <h2 className="font-black font-bold text-3xl ">Browse The Range</h2>
          <p className="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex  justify-around gap-y-10 flex-wrap">
          {range.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.img} alt="" className="object-cover" />
              <p className="text-normal font-bold text-xl pt-6">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Range;

const range = [
  {
    img: range1,
    name: "Dining",
  },
  {
    img: range2,
    name: "Living",
  },
  {
    img: range3,
    name: "Bedroom",
  },
];
