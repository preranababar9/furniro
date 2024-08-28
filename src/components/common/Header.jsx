import React from "react";
import { Link } from "react-router-dom";
import navlogo from "/logo/navlogo.svg";

import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-width  py-4 items-center ">
        <img src={navlogo} alt="" className="max-md:h-10 max-md:w-1/2"/>

        <ul className="flex gap-14 font-black font-normal text-xl max-md:hidden ">
          <li className="hover:underline hover:underline-offset-4 hover:scale-105">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:scale-105">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:scale-105">
            <Link>About</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:scale-105">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex lg:gap-10 max-md:gap-2 items-center">
          <Link to="/signup">
            <MdOutlineAccountCircle size={28} />
          </Link>
          <IoIosSearch size={28} />

          <Link>
            <FaRegHeart size={24} />
          </Link>

          <Link to="/cart">
            {" "}
            <FaCartShopping size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
