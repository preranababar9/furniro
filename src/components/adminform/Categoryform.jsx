import React, { useState } from "react";
import Admin from "../../pages/Admin";
import { addCategory } from "../../../services/categories";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { db } from "../../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { addFile } from "../../../utilis/file";

const Categoryform = () => {
  const [data, setData] = useState({
    title: "",
    tag: "",
    imageUrl: "",
  });

  const setCategory = async (e) => {
    e.preventDefault();
    try {
      const url = await addFile(data.imageUrl, `categories/${v4()}`, v4());
      setData({ ...data, imageUrl: url });

      const d = {
        title: data.title,
        tag: data.tag,
        imageUrl: url,
        id: v4(), // for getting unique id
      };
      await addCategory(d);

      toast.success("Category added successfully!", {
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
          <form
            onSubmit={setCategory}
            className="flex items-center flex-wrap gap-5"
          >
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

            <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Category Image
              </label>
              <input
                class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder="Category Image"
                type="file"
                // value={data.imageUrl}
                onChange={(e) =>
                  setData({ ...data, imageUrl: e.target.files[0] })
                }
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 mt-3 py-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Categoryform;
