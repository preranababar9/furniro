import React, { useState } from "react";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { AddProduct } from "../../../services/products";

const ProductDetailform = () => {
  const [product, setProduct] = useState({
    title: "",
    shortdesc: "",
    des: "",
    price: "",
  });

  const setData = async (e) => {
    e.preventDefault();
    try {
      const p = {
        ...product,
        id: v4(),
      };
      await AddProduct(p);
      toast.success("Product added successfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
      toast.error("Some Error Occurred!", {
        position: "top-center",
      });
      return error;
    }
  };
  return (
    <section className="py-10 w-4/5">
      <div className="">
        <div className="">
          <form  onSubmit={setData} className="flex items-center flex-wrap gap-5">
            <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Product Title
              </label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder=" Enter Product Title"
                type="text"
                value={product.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
              />
            </div>

            <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Short Product Description
              </label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder=" Enter Short Product Description "
                type="text"
                value={product.shortdesc}
                onChange={(e) =>
                  setProduct({ ...product, shortdesc: e.target.value })
                }
              />
            </div>

            <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Product Description
              </label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder="Enter Product Description"
                type="text"
                value={product.des}
                onChange={(e) =>
                  setProduct({ ...product, des: e.target.value })
                }
              />
            </div>

            <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Product Price
              </label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder=" Enter Product Price"
                type="number"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 mt-5 py-3"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailform;
