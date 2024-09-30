import { addCategory } from "../../../services/categories";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { addFile } from "../../../utilis/file";
import { useState } from "react";

const Categoryform = () => {
  const [data, setData] = useState({
    title: "",
    tag: "",
    imageUrl: "",
  });

  const setCategory = async (e) => {
    e.preventDefault();
    try {
      const url = await addFile(data.imageUrl, `categories/${v4()}`, v4());// 3 arguments as file url, folder/file path , filename as unique id
      setData({ ...data, imageUrl: url });

      const d = {
        title: data.title,
        tag: data.tag,
        imageUrl: url,
        id: v4(), // for getting unique id
      };
      await addCategory(d); // add into the document of db

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
            <div className="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category Title
              </label>
              <input
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder=" Enter Category Title"
                type="text"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </div>

            <div className="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category Tag
              </label>
              <input
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder=" Enter Tags"
                type="text"
                value={data.tag}
                onChange={(e) => setData({ ...data, tag: e.target.value })}
              />
            </div>

            <div className="w-full max-w-xs p-5 bg-white rounded-lg ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category Image
              </label>
              <input
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
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
