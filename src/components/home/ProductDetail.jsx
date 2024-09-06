import React, { useEffect, useState } from "react";
import sofa from "/images/sofa.svg";
import { FaMinus } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { getProductsById } from "../../../services/products";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  const [detail, setDetail] = useState(null);

  const fetchDetail = async () => {
    try {
      const response = await getProductsById(id);
      setDetail(response);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  useEffect(() => {
    console.log("product detail fetched");

    fetchDetail();
  }, []);

  // Show loading state until detail is fetched
  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20 ">
      <div className="max-width">
        <div className="flex max-md:flex-col gap-y-5 gap-10  ">
          {/* images */}

          <div className="lg:w-1/2">
           
              <img src={detail.imageUrl} alt="" className="h-3/4 w-full object-cover max-md:h-1/3 " />
           
          </div>

          {/* descpritions */}

          <div className="lg:w-1/2">
            {}
            <h2 className="text-4xl font-regular pb-2">{detail.title}</h2>
            <p className="text-xl  font-medium pb-2">{detail.shortdesc}</p>
            <p className="text-xl  text-offgrey pb-4">{detail.price}</p>
            <p className="text-lg max-md:text-md font-medium lg:w-3/4 pb-4">{detail.des}</p>

<div className="flex gap-5">
            <p className="text-lg tracking-wide pb-4 text-offgrey ">Size :</p>
            <div className="flex gap-5 pb-6">
              <button className="hover:bg-brown bg-peach rounded-lg text-black h-8 w-8  hover:text-white">
                L
              </button>
              <button className="hover:bg-brown bg-peach rounded-lg text-black h-8 w-8  hover:text-white">
                XL
              </button>
              <button className="hover:bg-brown bg-peach rounded-lg text-black h-8 w-8  hover:text-white">
                XS
              </button>
            </div></div>

<div className="flex gap-5">
            <p className="text-lg tracking-wide pb-4 text-offgrey">Color :</p>
            <div className="flex gap-5 pb-10">
              <button className="rounded-full bg-brown h-8 w-8 text-brown"></button>
              <button className="rounded-full bg-blue-300 h-8 w-8 text-brown"></button>
              <button className="rounded-full bg-black h-8 w-8 text-brown"></button>
            </div></div>

            <div className="flex flex-wrap gap-10 items-center">
              <div className="flex items-center gap-6 border-2 border-solid border-offgrey rounded-lg lg:w-1/4  w-1/2 py-3 max-md:px-10  justify-center">
                {/* quantity */}
                <button className="   ">
                  <FaMinus size={16} />
                </button>
                <input
                  type="number"
                  placeholder="1"
                  className="lg:w-1/4 w-full pl-4 text-lg"
                />
                <button className="   ">
                  <MdAdd size={20} />
                </button>
              </div>

              <div>
                <button className="border-2 border-solid border-black lg:text-lg rounded-lg w-full lg:px-10 px-2 py-3">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
