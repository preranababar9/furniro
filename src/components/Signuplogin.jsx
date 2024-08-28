import React from "react";
import signup from "/images/signup.svg";
import { Link } from "react-router-dom";

const Signuplogin = () => {
  return (
    <section className="pb-20 pt-10">
      <div className="max-width"> 
      <div className="flex  items-center">
        <div className="w-1/2 mr-36"><img src={signup} alt="" /></div>

        <div className="flex flex-col w-1/3 ">
                <h4 className="text-3xl font-bold pb-3">Create New Account</h4>
                <p className="text-md text-offgrey pb-6">Please enter your details</p>

                <label className="font-medium pb-2 text-lg">First Name</label>
                <input type="text" 
                placeholder="abc.."
          
          className="border-solid border-2 border-offgrey  px-10 py-3 mb-4 rounded-lg  "/>

<label className="font-medium pb-2 text-lg">Last Name</label>
                <input type="text" 
                placeholder="abc.."
          
          className="border-solid border-2 border-offgrey  px-10  mb-4 py-3 rounded-lg  "/>


<label className="font-medium pb-2 text-lg">Email Address</label>
                <input type="email" 
                placeholder="abc@gmail.com"
 
 className="border-solid border-2 border-offgrey  px-10  mb-4 py-3 rounded-lg  "/>
              

                <label className="font-medium pb-2 text-lg">Password</label>
                <input type="password" 
                placeholder="............"
                className="border-solid border-2 border-offgrey  px-10  mb-4 py-3  rounded-lg  "
                />


                <button className="bg-black text-white py-4 my-5 rounded-lg  "><a >Signup</a></button>

                <p className="text-lg text-center">You already have a account? <a className="font-bold underline underline-offset-4">Login here</a></p>
                  </div>
      </div>
      </div>
    </section>
  );
};

export default Signuplogin;
