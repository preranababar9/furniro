import React from "react";
import contact1 from "/icons/contact1.svg";
import contact2 from "/icons/contact2.svg";
import contact3 from "/icons/contact3.svg";

const Contactpg = () => {
  return (
    <section className="py-20 ">
      <div className="max-width">

        <div className=" pb-20 flex flex-col  items-center">
          <h2 className=" font-black font-bold lg:text-3xl text-2xl ">
            Get In Touch With Us
          </h2>
          <p className="text-offgrey lg:w-1/2 text-center max-md:text-sm ">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex max-md:flex-col justify-evenly">
          <div className="flex lg:flex-col flex-wrap  gap-y-10 lg:w-[25%] px-10">
            <div className="flex gap-6 items-center">
              <img src={contact1} alt="" className="h-10"/>

              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-sm">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <img src={contact2} alt="" className="h-10"/>

              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-sm">Mobile: +(84) 546-6789</p>
                <p className="text-sm"> Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <img src={contact3} alt="" className="h-10"/>

              <div>
                <h4 className="text-lg font-semibold">Working Time</h4>
                <p className="text-sm">Monday-Friday: 9:00 - 22:00 </p>
                <p className="text-sm"> Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <div className="max-md:mt-10">
            <div className="flex flex-col gap-y-1 pb-5">
              <label>Your name</label>
              <input
                type="text"
                placeholder="abc"
                className="border-2 border-solid border-offgrey rounded-lg py-3 w-full pl-2"
              />
            </div>

            <div className="flex flex-col gap-y-2 w-full pb-5">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="border-2 border-solid border-offgrey rounded-lg py-3 w-full pl-2"
              />
            </div>

            <div className="flex flex-col gap-y-2 pb-5">
              <label>Subject</label>
              <input
               rows="4"
                type="text"
                placeholder="Optional"
                className="border-2 border-solid border-offgrey rounded-lg py-3 pl-2"
              />
            </div>

            <div className="flex flex-col gap-y-2 pb-9">
              <label>Message</label>
              <textarea 
               rows="4" cols="50"
                type="text"
                placeholder="Hi! i’d like to ask about"
                className="border-2 border-solid border-offgrey rounded-lg py-2 text-start pr-40 pl-2"
              />
            </div>

            <button className="bg-[#B88E2F] text-white px-16 py-3">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpg;
