import React from "react";
import slide1 from "/images/slide1.svg";
import slide2 from "/images/slide2.svg";
import set1 from "/images/set1.jpg";
import slide4 from "/images/slide4.svg";
import slide5 from "/images/slide5.svg";
import slide6 from "/images/slide6.svg";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles

// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Inspire = () => {
  return (
    <section className="py-10 ">
      <div className="bg-pink">
      <div className="flex max-md:flex-col  max-width gap-10 max-md:gap-y-10 items-center py-10">

        <div className="  max-md:px-10 lg:w-1/2">
          <h3 className="text-5xl max-md:text-3xl text-[#3A3A3A] pb-3 font-bold font-regular">
            50+ Beautiful rooms inspiration
          </h3>
          <p className="text-[#616161]  font-semibold pb-8">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>

          <button className="bg-brown  text-white px-8 max-md:px-4 max-md:py-3 uppercase font-bold text-sm py-4">
            Explore More
          </button>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-full flex max-md:flex-col lg:w-[80%]  w-full max-md:gap-y-4 gap-4 "
        >
          <SwiperSlide>
            {" "}
            <img src={slide1} alt="" className="lg:h-[550px] h-[250px] object-cover lg:w-96 w-full"  />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide4} alt="" className="lg:h-[550px] h-[250px] object-cover lg:w-96 w-full" />
          </SwiperSlide>

          
          <SwiperSlide>
            <img src={slide5} alt="" className="lg:h-[550px] h-[250px] object-cover lg:w-96 w-full"/>
          </SwiperSlide>

          
          <SwiperSlide>
            <img src={slide6} alt="" className="lg:h-[550px] h-[250px] object-cover lg:w-96 w-full"/>
          </SwiperSlide>
         

          <SwiperSlide>
            <img src={set1} alt="" className="lg:h-[550px] h-[250px] object-cover lg:w-96 w-full"/>
          </SwiperSlide>

         
        </Swiper>
      </div>
      </div>
    </section>
  );
};

export default Inspire;
