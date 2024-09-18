import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="">
      {" "}
      <hr></hr>
      <div className="max-width ">
        <div className="flex max-md:flex-col justify-between max-md:gap-y-5 py-10">
          <div className="">
            <h3 className="font-medium font-bold text-4xl lg:pb-10 pb-4">
              furniro.
            </h3>
            <p className="text-offgrey lg:w-3/5 ">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          <div className="flex flex-col  lg:gap-10 gap-4">
            <p className="text-lg text-offgrey font-normal ">Links</p>
            <ul className=" flex flex-col max-md:flex-col lg:gap-10 gap-4 font-semibold text-[#000000] text-xl ">
              <li>
                <Link  to="/home">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link  to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:gap-10 gap-4">
            <p className="text-lg text-offgrey font-normal">Help</p>
            <ul className=" flex flex-col lg:gap-10 gap-4 font-semibold text-[#000000]  text-xl  ">
              <li>
                <Link>Payment Options</Link>
              </li>
              <li>
                <Link>Returns</Link>
              </li>
              <li>
                <Link>Privacy Policies</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <p className="text-lg text-offgrey font-normal lg:pb-10 pb-4">
              Newsletter
            </p>

            <div className="flex gap-4 flex-wrap gap-y-4">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="text-offgrey font-normal lg:text-lg text-md outline-none border-b-2 border-gray-300  "
              />

              <p className="lg:text-lg text-md font-semibold  underline underline-offset-4 uppercase">
                Subscribe
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <p className="py-10 font-semibold text-center text-lg">
          2024 furniro. All rights reverved
        </p>
      </div>
    </section>
  );
};

export default Footer;
