
import navlogo from "/logo/navlogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { GoProjectSymlink } from "react-icons/go";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Admin = () => {
const router = useNavigate();

useEffect(() =>{
  const admin = localStorage.getItem("email");
if (admin !== "myadmin@gmail.com") {
router("/")
window.scrollTo(0, 0);
}
}, [])

  return (
    <section className="">
      <div className="flex  ">
        <div></div>
        <div className="px-12 bg-blue-200 h-[100vh] w-1/4">
          <div className=" pt-4 pb-12">
            <img
              src={navlogo}
              alt=""
              className="max-md:h-10 z-30 w-4/5 max-md:w-1/2"
            />
          </div>

          <ul className="flex flex-col gap-12 text-2xl items-start font-semibold">
            <div className="flex gap-4 items-center">
              <TbCategory size={40} />
              <Link to={"/admin/category"}> Category</Link>
            </div>

            <div className="flex gap-4 items-center">
              <GoProjectSymlink size={40} />
              <Link to="/admin/product">Product Details</Link>
            </div>
          </ul>
        </div>


        <Outlet />
      </div>
    </section>
  );
};

export default Admin;
