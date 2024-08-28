import React, { useState } from "react";
import signup from "/images/signup.svg";
import { Link } from "react-router-dom";

const Signup = () => {

  const [user, setUser] = useState(
    {
      fname : "",
      lname : "",
      email : "",
      password : ""
    }
  );

 
  const handleUser = (e) => {
const {name, value} = e.target;

setUser({...user, [name]: value});
console.log(user);
  }


  return (
    <section className="pb-20 pt-10">
      <div className="max-width">
        <div className="flex  items-center">
          <div className="w-1/2 mr-36 max-md:hidden">
            <img src={signup} alt="" />
          </div>

          <div className="flex flex-col w-1/3 max-md:w-full">
            <h4 className="text-3xl font-black font-bold pb-2">
              Create New Account
            </h4>
            <p className="text-md text-offgrey pb-6">
              Please enter your details
            </p>

            <label className="font-medium pb-2 text-lg">First Name</label>
            <input
              type="text"
              placeholder=" Your First name"
              className="border-solid border-2 border-offgrey  pr-10 pl-2 py-3 mb-4 rounded-lg  "
              name = "fname"
              onChange={handleUser}
              required
             autoComplete="off"
           
            />

            <label className="font-medium pb-2 text-lg">Last Name</label>
            <input
              type="text"
              placeholder="Your Last Name"
              className="border-solid border-2 border-offgrey  pr-10 pl-2 mb-4 py-3 rounded-lg  "
              name = "lname"
              onChange={handleUser}
              required
              autoComplete="off"
            
            />

            <label className="font-medium pb-2 text-lg">Email Address</label>
            <input
              type="email"
              placeholder="Your Email Address"
              className="border-solid border-2 border-offgrey  pr-10 pl-2 mb-4 py-3 rounded-lg  "
              name = "email"
              onChange={handleUser}
              required
              autoComplete="off"
            
            />

            <label className="font-medium pb-2 text-lg">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border-solid border-2 border-offgrey  pr-10 pl-2 mb-4 py-3  rounded-lg  "
              name = "password"
              onChange={handleUser}
              required
               autoComplete="off"
         
            />

            <button className="bg-[#B88E2F] text-white py-3 my-5 rounded-lg  ">
              <a className="text-lg">Signup</a>
            </button>

            <p className="text-lg text-center">
              You already have a account?{" "}
              <Link
                to="/login"
                className="font-bold underline underline-offset-4"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
