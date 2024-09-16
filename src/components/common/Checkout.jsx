import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartC";

const Checkout = () => {
  const { cartItems, getCartTotal } = useContext(CartContext);

  return (
    <section className="py-20">
      <div className="max-width">
        <div className=" flex max-md:flex-col justify-evenly  ">
          <div className=" lg:w-1/2 flex flex-col items-center">
            <h3 className="text-center text-3xl font-bold mb-5">
              Billing Details
            </h3>
            <form className="">
              <div className="flex ">
                <div class=" py-5 bg-white px-5 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-4">
                    First Name
                  </label>
                  <input
                    class="text-sm custom-input py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder=""
                    type="text"
                  />
                </div>

                <div class="py-5 bg-white px-5 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-4">
                    Last Name
                  </label>
                  <input
                    class="text-sm custom-input  py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div>

              <div>
                <div class=" w-full py-5 px-5 bg-white rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-4">
                    Country/Region
                  </label>
                  <input
                    class="text-sm custom-input py-4 border  w-full  border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder=""
                    type="text"
                  />
                </div>

                <div class=" w-full py-5 bg-white px-5 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-4">
                    Street Address
                  </label>
                  <input
                    class="text-sm custom-input w-full py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder=""
                    type="text"
                  />
                </div>

                <div class=" w-full py-5 bg-white px-5 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-4">
                    Town/City
                  </label>
                  <input
                    class="text-sm custom-input w-full py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder=""
                    type="text"
                  />
                </div>

                <div class=" w-full py-5 bg-white px-5 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-4">
                    ZIP Code
                  </label>
                  <input
                    class="text-sm custom-input w-full py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder=""
                    type="number"
                  />
                </div>

                <div class=" w-full py-5 bg-white px-5 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-4">
                    Phone No
                  </label>
                  <input
                    class="text-sm custom-input w-full py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder=""
                    type="number"
                  />
                </div>

                <div class=" w-full py-5 bg-white px-5 rounded-lg ">
                  <label class="block text-gray-700 text-sm font-semibold mb-4">
                    Email Address
                  </label>
                  <input
                    class="text-sm custom-input w-full py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder=""
                    type="email"
                  />
                </div>

                <input
                  class="text-sm custom-input w-full py-4 mt-8 px-3  border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder="Additional Information"
                  type="text"
                />
              </div>
            </form>
          </div>

          <div className="mt-10 w-1/2">
            <div className="flex flex-col gap-y-2">
              <div className="flex justify-evenly  pb-5">
                <p className="text-xl font-bold">Product</p>
                <p className="text-xl font-bold">Subtotal</p>
              </div>
              {cartItems.map((item, index) => (
                <div key={index} className="flex  justify-evenly pb-2">
                  <p className="text-lg  text-offgrey">
                    {item.title} X {item.quantity}
                  </p>
                  <p className="text-lg  ">
                    {" "}
                    Rs {new Intl.NumberFormat().format(item.price)}{" "}
                  </p>
                </div>
              ))}

              {/* <div className="flex justify-evenly pb-5">
                             <p className="text-lg ">Subtotal</p>
                             <p className="text-lg ">price</p>
                     </div> */}

              <div className="flex justify-evenly pb-5">
                <p className="text-lg ">Total</p>
                <p className="text-2xl text-brown font-bold ">
                  {" "}
                  Rs {new Intl.NumberFormat().format(getCartTotal())}
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
