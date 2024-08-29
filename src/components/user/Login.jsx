import React, { useState } from 'react'
import login from "/images/login.png";
import { PiHandWavingDuotone } from "react-icons/pi";

const Login = () => {


  const [data, setData] = useState(
    {
      email : "",
      password : ""
    }
  );
// const isAuthentate =  signInWithFirebase(data.us)
// if isAuth === true {

// }else{

// }
  const userData = (e) => {
    const {name , value} = e.target;

    setData({...data, [name]: value});
    console.log(data);
  }

  return (
    <section  className="py-20">
      <div className="max-width">
        <div className="flex  items-center">
          <div className="w-1/2 mr-36 max-md:hidden">
            <img src={login} alt="" />
          </div>



          <div className="flex flex-col w-1/3 max-md:w-full">
          <div className='flex  gap-3'>
            <h4 className="text-3xl font-black font-bold pb-2">
              Welcome 
            </h4>
            <PiHandWavingDuotone size={32} className='text-yellow-500' />
            </div>
            <p className="text-md text-offgrey pb-6">
              Please login here
            </p>

           

            <label className="font-medium pb-2 text-lg">Email Address</label>
            <input
              type="email"
              placeholder="Your Email Address"
              className="border-solid border-2 border-offgrey   pr-10 pl-2 mb-4 py-3 rounded-lg  "
              required
              onChange={userData}
              name = "email"
            />

            <label className="font-medium pb-2 text-lg">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="border-solid border-2 border-offgrey   pr-10 pl-2 mb-4 py-3  rounded-lg  "
              required
              onChange={userData}
              name = "password"
            />

            <button className="bg-[#B88E2F] text-white py-3 my-5 rounded-lg  ">
              <a className="text-lg">Login</a>
            </button>

          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login