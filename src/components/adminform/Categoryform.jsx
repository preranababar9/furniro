import React, { useState } from "react";
import Admin from "../../pages/Admin";
import { addCategory } from "../../../services/categories";
import { v4 } from "uuid";

const Categoryform = () => {
  const [data, setData] = useState({
    title: "",
    tag: "",
  });

  const setCategory = async (e) => {
e.preventDefault();
    try {
      const d = {
        ...data,
        id: v4(),
      };
      await addCategory(d);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <section className="py-10 w-4/5">
      <div className="">
        <div className="">
          <form onSubmit={setCategory} className="flex flex-wrap gap-5">
            <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Category Title
              </label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder=" Enter Category Title"
                type="text"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </div>

            <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Category Tag
              </label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder=" Enter Tags"
                type="text"
                value={data.tag}
                onChange={(e) => setData({ ...data, tag: e.target.value })}
              />
            </div>

            {/* <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Category Image
              </label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder="Category Image"
                type="image"
                src=""
              />
            </div> */}

            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Categoryform;
