import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartC";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getCartTotal } = useContext(CartContext);

  return (
    <section className="py-20">
      <div className="max-width">
        <div className=" flex max-md:flex-col w-full   max-md:items-center  ">
          <div className=" flex flex-col w-3/5 items-center">
            <h3 className="text-center lg:text-3xl text-2xl font-bold mb-5">
              Billing Details
            </h3>
            <form className="">
              <div className="flex ">
                <div class=" py-2 bg-white px-4 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-2">
                    First Name
                  </label>
                  <input
                    class="text-sm custom-input py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100 max-md:w-[132px] w-[235px] h-10"
                    placeholder=""
                    type="text"
                  />
                </div>

                <div class="py-2 bg-white px-4 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    class="text-sm custom-input  py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100 max-md:w-[132px] w-[235px] h-10"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div>

              <div>
                <div class=" w-full py-2 px-4 bg-white rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-2">
                    Country/Region
                  </label>
                  <input
                    class="text-sm custom-input py-4 border  w-[500px]  border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100 max-md:w-[300px] h-10"
                    placeholder=""
                    type="text"
                  />
                </div>

                <div class=" w-full py-3 bg-white px-4 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-2">
                    Street Address
                  </label>
                  <input
                    class="text-sm custom-input py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100 max-md:w-[300px] h-10 w-[500px] "
                    placeholder=""
                    type="text"
                  />
                </div>

                <div class=" w-full py-3 bg-white px-4 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-2">
                    Town/City
                  </label>
                  <input
                    class="text-sm custom-input  py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100 max-md:w-[300px] h-10 w-[500px] "
                    placeholder=""
                    type="text"
                  />
                </div>

                <div class=" w-full py-3 bg-white px-4 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-2">
                    ZIP Code
                  </label>
                  <input
                    class="text-sm custom-input  py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100 max-md:w-[300px] h-10 w-[500px] "
                    placeholder=""
                    type="number"
                  />
                </div>

                <div class=" w-full py-3 bg-white px-4 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-2">
                    Phone No
                  </label>
                  <input
                    class="text-sm custom-input  py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100 max-md:w-[300px] h-10 w-[500px] "
                    placeholder=""
                    type="number"
                  />
                </div>

                <div class=" w-full py-3 bg-white px-4 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    class="text-sm custom-input py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100 max-md:w-[300px] h-10 w-[500px] "
                    placeholder=""
                    type="email"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="mt-10  lg:w-2/5  mx-auto overflow-auto ">
            <table class="table-auto lg:w-3/4  text-left ">
              <thead>
                <tr>
                  <th class="px-2  py-3 text-gray-900 lg:text-2xl text-xl   ">
                    Product
                  </th>
                  <th class="px-2   py-3 text-gray-900 lg:text-2xl  text-xl   ">
                    Subtotal
                  </th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, index) => (
                  <tr>
                    <td class="px-4 py-3 lg:text-xl text-md ">
                      {" "}
                      {item.title} X {item.quantity}
                    </td>
                    <td class="px-4 py-3 lg:text-xl text-md  ">
                      {" "}
                      Rs {new Intl.NumberFormat().format(item.price)}{" "}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td class="px-4 lg:text-2xl text-xl font-bold    py-3">
                    Total
                  </td>

                  <td class="px-4 py-3 lg:text-2xl text-lg text-brown font-bold ">
                    Rs {new Intl.NumberFormat().format(getCartTotal())}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-center lg:mr-44 lg:text-xl text-lg font-bold rounded-lg bg-brown py-3 text-white  mt-10">
              <Link to="/order">Confirm Order</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
