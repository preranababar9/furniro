import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navlogo from "/logo/navlogo.svg";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CartContext } from "../../context/CartC";
import { useContext } from "react";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const[user, setUser] = useState(false);

  const router = useNavigate();

  const { cartItems,   addMultiple } = useContext(CartContext);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);

  useEffect(() => {
    const user = localStorage.getItem("email");
    setUser(user);
  },[router])

  return (
    <div>
      <div className="flex justify-between   max-width  py-4 items-center ">
        <Link to="/" className="z-30">
        <img src={navlogo} alt="" className="max-md:h-10  max-md:w-3/4" /></Link>

        <ul className="flex gap-14 max-md:gap-2 font-black font-normal text-xl max-md:hidden ">
          <li className="hover:underline hover:underline-offset-4 hover:scale-105">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:scale-105">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:scale-105">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:scale-105">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
       

        <div className="flex z-30 gap-5">
          {/* <button>
            {" "}
            <IoIosSearch size={28} className="font-bold  md:hidden" />
          </button> */}
          {!menu ? (
            <button
              className="md:hidden"
              onClick={() => {
                setMenu(true);
                setToggle(true);
              }}
            >
              {" "}
              <IoMenu className="text-black  " size={36} />
            </button>
          ) : (
            <button
              className="md:hidden "
              onClick={() => {
                setMenu(false);
                setToggle(false);
              }}
            >
              {" "}
              <RxCross1 className="text-black   " size={28} />
            </button>
          )}
        </div>
        {menu && (
          <div className="flex flex-col absolute left-0 top-0 pt-24 px-16  z-10 bg-white gap-y-3  h-[100vh] w-full  items-start">
            <div>
              <ul className="flex flex-col gap-5 font-black font-normal text-2xl justify-start ">
                <li className="hover:underline hover:underline-offset-4 hover:scale-105">
                  <Link to="/home">Home</Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:scale-105">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:scale-105">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:scale-105">
                  <Link to="/cart">Cart</Link>
                </li>
                {/* <li className="hover:underline hover:underline-offset-4 hover:scale-105">
                  <Link to="">Wishlist</Link>
                </li> */}
                <li className="hover:underline hover:underline-offset-4 hover:scale-105">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* <button className="bg-black text-white font-semibold py-3 px-4 mt-4 rounded-lg">
              <Link to="/register">SignUp / Login</Link>
            </button> */}

            {user ? (
                <button 
                onClick={() => {
                  localStorage.removeItem("email");
                  router("/")
                }}
                className="bg-black text-white font-semibold py-3 px-4 mt-4 rounded-lg">
                <Link to="/" >Logout</Link>
              </button>
            ) : (
              <button className="bg-black text-white font-semibold py-3 px-4 mt-4 rounded-lg">
              <Link to="/register">SignUp / Login</Link>
            </button>
            )}
          </div>
        )}

        <div className="flex lg:gap-10 max-md:gap-4 max-md:hidden items-center">
          
        {user ? (
            <div
            onClick={() => {
              localStorage.removeItem("email");
              router("/login");
            }}
            >
              <IoMdLogOut size={28} />
            </div>
          ): (
             <Link to="/register">
            <MdOutlineAccountCircle size={28} />
          </Link>
          )}
          {/* <Link to="/register">
            <MdOutlineAccountCircle size={28} />
          </Link> */}
          {/* <IoIosSearch size={28} /> */}

          <Link>
            <FaRegHeart size={24} />
          </Link>

          <Link to="/cart">
            {" "}
            <span className="bg-brown text-white absolute font-semibold top-3 lg:right-[85px]  right-5 rounded-full  px-2">{cartItems.length}</span>
            <FaCartShopping size={24} className="relative"/>

           
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Header;
