import React from "react";
import set4 from "/images/set4.svg";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  return (
    <section className="py-20">
      <div className="max-width">
        <div className="flex w-full max-md:flex-col lg:gap-5 gap-y-5">
          {/* cart columns div */}
          <table className="table-fixed lg:w-3/4  ">
            {/* title  */}
            <thead className=" bg-[#F9F1E7] h-1/4 text-lg font-semibold">
              <tr>
                <th className="">Product</th>
                <th className="">Price</th>
                <th className="">Quantity</th>
                <th className="">Subtotal</th>
                <th className="">Remove</th>
              </tr>
            </thead>

            {/* Products */}
            <tbody className="w-full">
              <tr className="">
                <td className="">
                  {" "}
                  <img src={set4} alt="" className="mx-auto pb-2 w-1/2 " />
                  <p className=" text-center font-semibold text-lg">
                    Queen Size Bed
                  </p>
                </td>
                <td className="text-offgrey text-xl text-center">
                  {" "}
                  Rs. 1,00,000
                </td>
                <td className="text-xl   text-center"> 1</td>
                <td className="text-xl   text-center"> Rs. 1,00,000</td>
                <td>
                  {" "}
                  <MdDelete size={40} className="text-brown mx-auto" />
                </td>{" "}
              </tr>

              <tr className="">
                <td className="">
                  {" "}
                  <img src={set4} alt="" className="mx-auto pb-2 w-1/2 " />
                  <p className=" text-center font-semibold text-lg">
                    Queen Size Bed
                  </p>
                </td>
                <td className="text-offgrey text-xl text-center">
                  {" "}
                  Rs. 1,00,000
                </td>
                <td className="text-xl   text-center"> 1</td>
                <td className="text-xl   text-center"> Rs. 1,00,000</td>
                <td>
                  {" "}
                  <MdDelete size={40} className="text-brown mx-auto" />
                </td>{" "}
              </tr>
            </tbody>
          </table>

          {/* cart totals div */}
          <div className="lg:w-1/4  flex-col justify-center items-center bg-[#F9F1E7] py-5">
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

