import React from "react";
import product1 from "/images/product1.svg";

const Product = () => {
  return (
    <section className="py-20">
      <div className="max-width">
        <div className="text-center pb-16">
          <h2 className="font-black font-bold text-3xl ">Our Products</h2>
        </div>

        <div className="flex  flex-wrap justify-evenly gap-y-4">
          {product.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={product1} alt="" />
              <div className="bg-offwhite w-full px-4 py-5 ">
                <h3 className="font-medium font-semibold text-xl pb-1">
                  Syltherine
                </h3>
                <p className="text-grey text-md pb-1">Stylish cafe chair</p>
                <p className="">Rp 2,500,000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

const product = [
  {
    productimg: product1,
    title: "Syltherine",
    desc: " Stylish cafe chair",
    price: "Rp 2,500,000",
  },
  {
    productimg: product1,
    title: "Syltherine",
    desc: " Stylish cafe chair",
    price: "Rp 2,500,000",
  },
  {
    productimg: product1,
    title: "Syltherine",
    desc: " Stylish cafe chair",
    price: "Rp 2,500,000",
  },
  {
    productimg: product1,
    title: "Syltherine",
    desc: " Stylish cafe chair",
    price: "Rp 2,500,000",
  },
  {
    productimg: product1,
    title: "Syltherine",
    desc: " Stylish cafe chair",
    price: "Rp 2,500,000",
  },
  {
    productimg: product1,
    title: "Syltherine",
    desc: " Stylish cafe chair",
    price: "Rp 2,500,000",
  },
  {
    productimg: product1,
    title: "Syltherine",
    desc: " Stylish cafe chair",
    price: "Rp 2,500,000",
  },
  {
    productimg: product1,
    title: "Syltherine",
    desc: " Stylish cafe chair",
    price: "Rp 2,500,000",
  },
];
