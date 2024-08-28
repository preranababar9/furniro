import React from 'react'
import login from "/images/login.png";

const Login = () => {
  return (
    <section  className="py-20">
      <div className="max-width">
        <div className="flex  items-center">
          <div className="w-1/2 mr-36 max-md:hidden">
            <img src={login} alt="" />
          </div>



          <div className="flex flex-col w-1/3 max-md:w-full">
            <h4 className="text-3xl font-black font-bold pb-2">
              Welcome
            </h4>
            <p className="text-md text-offgrey pb-6">
              Please login here
            </p>

           

            <label className="font-medium pb-2 text-lg">Email Address</label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="border-solid border-2 border-offgrey  px-10  mb-4 py-3 rounded-lg  "
            />

            <label className="font-medium pb-2 text-lg">Password</label>
            <input
              type="password"
              placeholder="............"
              className="border-solid border-2 border-offgrey  px-10  mb-4 py-3  rounded-lg  "
            />

            <button className="bg-[#B88E2F] text-white py-4 my-5 rounded-lg  ">
              <a className="text-lg">Login</a>
            </button>

          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login