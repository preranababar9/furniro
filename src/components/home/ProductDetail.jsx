import React, { useEffect, useState } from "react";
import { getProductsById } from "../../../services/products";
import { useParams } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartC";

const ProductDetail = ({ product }) => {
  const { id } = useParams(); // Extract the product ID from the URL
  const [detail, setDetail] = useState(null);

  const [count , setCount] = useState(1);

  const router = useNavigate();
  const { cartItems, addToCart, getCartTotal } = useContext(CartContext);

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
    window.scrollTo(0, 0);
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
            <img
              src={detail.imageUrl}
              alt=""
              className="h-3/4 w-full object-cover max-md:h-1/3 "
            />
          </div>

          {/* descpritions */}

          <div className="lg:w-1/2">
            {}
            <h2 className="text-4xl font-regular pb-2">{detail.title}</h2>
            <p className="text-xl  font-medium pb-2">{detail.shortdesc}</p>
            <p className="text-xl  text-offgrey pb-4">
              Rs {new Intl.NumberFormat().format(detail.price)}
            </p>
            <p className="text-lg max-md:text-md font-medium lg:w-3/4 pb-4">
              {detail.des}
            </p>

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
              </div>
            </div>

            <div className="flex gap-5">
              <p className="text-lg tracking-wide pb-2 text-offgrey">Color :</p>
              <div className="flex gap-5 pb-5">
                <button className="rounded-full bg-brown h-8 w-8 text-brown"></button>
                <button className="rounded-full bg-blue-300 h-8 w-8 text-brown"></button>
                <button className="rounded-full bg-black h-8 w-8 text-brown"></button>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 items-center">
              <div className="flex items-center border-solid border-black border-2 rounded-lg lg:px-3 lg:py-1 lg:gap-3">
                <button
                   onClick={() => setCount((prev) => prev + 1 )}
                  
                 className="px-4 py-2  text-black  font-bold uppercase rounded focus:outline-none ">
                  <IoAddOutline size={24} 
                />
                
                </button>
                <p className="text-xl font-semibold">{count}</p>
                <button 
                 onClick={() => setCount((prev) => prev>=2? prev-1 : prev)}
                className="px-4 py-2  text-black  font-bold uppercase rounded focus:outline-none ">
                  <LuMinus size={24} />
                </button>
              </div>

              <div>
                <button
                  onClick={() => {
                    addToCart(detail); router("/cart")
                  }}
                  className="border-2 border-solid border-black lg:text-lg rounded-lg w-full lg:px-10 px-2 py-3"
                >
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
