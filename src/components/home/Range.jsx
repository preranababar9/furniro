import React, { useEffect, useState } from "react";
import range1 from "/images/range1.svg";
import range2 from "/images/range2.svg";
import range3 from "/images/range3.svg";
import { getAllCategoryData } from "../../../services/categories";

const Range = () => {
  const [rangeData, setRangeData] = useState([]);

  const fetchCategoryData = async () => {
    try {
      const categoryResponse = await getAllCategoryData();
      setRangeData(categoryResponse);
      // console.log(categoryResponse);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    console.log("Fetching category data");
    fetchCategoryData();
  }, []); // Dependency array ensures this runs only once

  return (
    <section className="py-20">
      <div className="max-width">
        <div className="text-center pb-16">
          <h2 className="font-black font-bold text-3xl ">Browse The Range</h2>
          <p className="text-grey">
            Discover our exclusive range of stylish and functional furniture
          </p>
        </div>

        <div className="flex  justify-around gap-y-10 flex-wrap">
          {rangeData.length > 0 ? ( // conditional rendering
            rangeData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={item.imageUrl} alt="" className="object-cover" />
                <p className="text-normal font-bold text-xl pt-6">
                  {item.title}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center">Error fetching the data from firebase. We will get back to you soon.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Range;
