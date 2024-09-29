import React, { useState } from "react";
import login from "/images/login.png";
import { PiHandWavingDuotone } from "react-icons/pi";
import { signInWithFirebase } from "../../../services/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";

const Login = () => {
  const router = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const isLogin = await signInWithFirebase(data.email, data.password);

      // console.log(userinfo);
      if (isLogin) {
        localStorage.setItem("email", data.email );
        toast.success("Login successfull!", {
          position: "top-center",
        });
        router("/home");
      } else {
        toast.error("Incorrect Creds");
      }
    } catch (error) {
      console.log(error);
      toast.success("Login successfull!", {
        position: "top-center",
      });
      return error;
    }
  };

  const userData = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };

  return (
    <section className="py-20">
      <div className="max-width">
        <form onSubmit={handleSubmitLogin}>
          <div className="flex  items-center">
            <div className="w-1/2 mr-36 max-md:hidden">
              <img src={login} alt="" />
            </div>

            <div className="flex flex-col w-1/3 max-md:w-full">
              <div className="flex  gap-3">
                <h4 className="text-3xl font-black font-bold pb-2">Welcome</h4>
                <PiHandWavingDuotone size={32} className="text-yellow-500" />
              </div>
              <p className="text-md text-offgrey pb-6">Please login here</p>

              <label className="font-medium pb-2 text-lg">Email Address</label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="border-solid border-2 border-offgrey   pr-10 pl-2 mb-4 py-3 rounded-lg  "
                required
                onChange={userData}
                name="email"
              />

              <label className="font-medium pb-2 text-lg">Password</label>
              <input
                type="password"
                placeholder="Your Password"
                className="border-solid border-2 border-offgrey   pr-10 pl-2 mb-4 py-3  rounded-lg  "
                required
                onChange={userData}
                name="password"
              />

              <button
                type="submit"
                className="bg-[#B88E2F] text-white py-3 my-5 rounded-lg  text-lg"
              >
                Login
              </button>


              <p className="text-md text-center">
                Dont have a account?{" "}
                <Link
                  to="/register"
                  className="font-bold underline underline-offset-4"
                >
                  Signup here
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
