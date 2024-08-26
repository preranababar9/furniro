import React from "react";
import set4 from "/images/set4.svg";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  return (
    <section className="py-20">
      <div className="max-width">
        <div className="flex w-full max-md:flex-col lg:gap-5 gap-y-5">
          {/* cart columns div */}
          <div className="lg:w-3/4">
            {/* title  */}
            <div className="flex justify-evenly bg-[#F9F1E7] py-4 mb-10 text-lg font-semibold">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
              <p>Subtotal</p>
            </div>

            {/* Products */}
            <div className="w-full flex  justify-evenly items-center">
              <div className=" w-1/5 flex gap-4 items-center">
                <img src={set4} alt="" className=" w-1/2" />

                <p className="text-offgrey text-lg">Queen Size Bed</p>
              </div>

              <p className="text-offgrey text-lg">Rs. 1,00,000</p>

              <p className="text-lg">1</p>
              <p className="text-lg">Rs. 1,00,000</p>

              <MdDelete size={32} className="text-brown" />
            </div>
          </div>

          {/* cart totals div */}
          <div className="lg:w-1/4  flex-col items-center bg-[#F9F1E7] py-5">
            <h4 className="text-3xl font-bold text-center">Cart Totals</h4>

            <div className="flex mt-10 gap-10 justify-evenly">
              <p className="text-lg font-semibold">Subtotal</p>
              <p className="text-lg font-semibold text-offgrey">Rs.1,00,000</p>
            </div>

            <div className="flex mt-5 gap-10 justify-evenly">
              <p className="text-lg font-semibold">Total</p>
              <p className="text-lg font-semibold text-brown">Rs.1,00,000</p>
            </div>

            <button className=" border-2 border-solid mt-10 py-3  w-2/5 px-1 rounded-full  border-black">
              Check out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
