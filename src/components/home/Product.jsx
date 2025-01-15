import { useEffect } from "react";
import { getAllProducts } from "../../../services/products";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/reducers/ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productData.data);

  const fetchProduct = async () => {
    try {
      const response = await getAllProducts();
     // Check if the response is an array before setting the state
     if (Array.isArray(response)) {
      dispatch(setData(response));
    } else {
      console.error("Expected an array, but got:", response);
      setData([]); // Default to an empty array if the data format is unexpected
    }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [dispatch]);

  const router = useNavigate();
  const redirect = (id) => {
    router(`/product/${id}`);
  };

  // console.log(data);

  return (
    <section className="py-20">
      <div className="max-width">
        <div className="text-center pb-16">
          <h2 className="font-black font-bold text-3xl ">Our Products </h2>
        </div>

        <div className="flex  flex-wrap justify-evenly  gap-y-4">
          {productData.map((item, index) => (
            <div
            onClick={() =>redirect(item.id)}
              key={index}
              className="flex flex-col   relative items-center"
            >
              <img
                src={item.imageUrl}
                alt=""
                className="h-[300px] w-[300px] object-cover"
              />

              <div className="bg-offwhite w-full px-4 py-5 ">
                <h3 className="font-medium font-semibold text-xl pb-1">
                  {item.title}
                </h3>
                <p className="text-grey text-md pb-1">{item.shortdesc}</p>
                <p className="">Rs {(new Intl.NumberFormat().format(item.price))}</p>
              </div>
            </div>
          ))}

          {/* layer 
              <div className="bg-[#3A3A3A] absolute bottom-0 left-0 overflow-hidden right-0 w-full px-4 py-10 ">
        <button className="text-brown text-lg text-bold bg-blue-200 px-8 py-3">
          Add to Cart
        </button>

        <div className="flex justify-evenly gap-2 text-white">
          <img src={share} alt="" className="" />
          <p>Share</p>

          <img src={compare} alt="" />
          <p>Compare</p>

          <img src={heart} alt="" />
          <p>Like</p>
        </div>
      </div>
      */}
        </div>
      </div>
    </section>
  );
};

export default Product;
