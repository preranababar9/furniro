import React from "react";

const Checkout = () => {
  return (
    <section className="py-20">
      <div className="max-width">
        <div className="flex  ">
          <div className="w-1/2 flex flex-col items-center">
            <h3 className="text-center text-3xl font-bold mb-5">Billing Details</h3>
            <form className="">
                <div className="flex gap-5">
                        
              <div class=" py-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-semibold mb-4">
                  First Name
                </label>
                <input
                  class="text-sm custom-input py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder=""
                  type="text"
                />
              </div>    

              <div class="py-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-semibold mb-4">
                  First Name
                </label>
                <input
                  class="text-sm custom-input  py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder=""
                  type="text"
                />
              </div>  

           
              </div>

              <div>
              <div class=" w-full py-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-semibold mb-4">
                 Country/Region
                </label>
                <input
                  class="text-sm custom-input py-4 border  w-full border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder=""
                  type="text"
                />
              </div>  


              <div class=" w-full py-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-semibold mb-4">
                 Street Address
                </label>
                <input
                  class="text-sm custom-input w-full py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder=""
                  type="text"
                />
              </div>  


              <div class=" w-full py-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-semibold mb-4">
                Town/City
                </label>
                <input
                  class="text-sm custom-input w-full py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder=""
                  type="text"
                />
              </div>  

              <div class=" w-full py-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-semibold mb-4">
                ZIP Code
                </label>
                <input
                  class="text-sm custom-input w-full py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder=""
                  type="number"
                />
              </div>  

              <div class=" w-full py-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-semibold mb-4">
                Phone No
                </label>
                <input
                  class="text-sm custom-input w-full py-4 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder=""
                  type="number"
                />
              </div>  

              <div class=" w-full py-5 bg-white rounded-lg ">
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
                  class="text-sm custom-input w-full py-4 mt-8 px-3 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder="Additional Information"
                  type="text"
                />

              </div>

             
            </form>
          </div>


          <div>
                
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
