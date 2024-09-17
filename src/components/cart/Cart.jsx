import React from "react";
import set4 from "/images/set4.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartC";
import { IoAddOutline } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const router = useNavigate();
  const submit = () => {
    router("/checkout");
  };

  return (
    <section className="py-20">
      <div className="max-width">
        <h1 className="text-4xl font-bold max-md:text-2xl text-center mb-10">
          Your Shopping Cart
        </h1>
        <div className=" flex w-full max-md:flex-col  items-center lg:justify-around  bg-white gap-8  text-black text-sm">
          <div className=" flex flex-col justify-start gap-5">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex max-md:flex-col  justify-between  lg:gap-20 items-center"
              >
                <div className="flex  lg:gap-14  gap-4 items-center">
                  <Link to= {`/product/${item.id}`}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="rounded-md lg:h-[180px] h-[180px] lg:w-[300px] w-3/4"
                    />
                  </Link>
                  <div className="flex flex-col w-full">
                  <Link to= {`/product/${item.id}`}>
                    <h1 className="lg:text-2xl text-lg font-bold">
                      {item.title}
                    </h1></Link>
                    <p className="text-gray-600 lg:text-xl text-md">
                      Rs {new Intl.NumberFormat().format(item.price)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center border-solid border-grey border-2 rounded-full lg:px-2 lg:py-1 lg:gap-3">
                  <button
                    className="px-4 py-2  text-black  font-bold uppercase rounded focus:outline-none "
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    <IoAddOutline size={24} />
                  </button>
                  <p className="text-xl font-semibold">{item.quantity}</p>
                  <button
                    className="px-4 py-2  text-black  font-bold uppercase rounded focus:outline-none "
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    <LuMinus size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div className="flex flex-col gap-y-2 mt-20 ">
              <h1 className="text-2xl font-bold ">
                Total : Rs {new Intl.NumberFormat().format(getCartTotal())}
              </h1>
              <button
                className="px-4 py-2 bg-brown text-white lg:text-lg font-bold uppercase  rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear cart
              </button>
            </div>
          ) : (
            <h1 className="text-2xl text-center font-bold">
              {/* Your cart is empty */}
            </h1>
          )}
        </div>

      { cartItems.length > 0 &&  <div className="flex items-center justify-center mt-2">
          <Link
            to="/checkout"
            className="border-solid border-black max-md:px-6 max-md:py-3 max-md:text-lg border-2 font-semibold text-center px-8 py-4 text-xl rounded-full mt-10"
          >
            Checkout
          </Link>
        </div>}
      </div>
    </section>
  );
};

export default Cart;
