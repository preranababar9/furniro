import React from "react";
import slide1 from "/images/slide1.svg";
import slide2 from "/images/slide2.svg";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles

// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Inspire = () => {
  return (
    <section className="py-10">
      <div className="bg-pink flex max-md:flex-col max-md:gap-y-4 items-center py-10">
        <div className="lg:w-1/3 lg:pl-36  max-md:px-10">
          <h3 className="text-4xl max-md:text-3xl text-[#3A3A3A] pb-3 font-bold font-regular">
            50+ Beautiful rooms inspiration
          </h3>
          <p className="text-[#616161]  font-semibold pb-8">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>

          <button className="bg-brown  text-white px-8 uppercase font-bold text-sm py-4">
            Explore More
          </button>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-full flex max-md:flex-col w-[60%] max-md:gap-y-4 gap-4 "
        >
          <SwiperSlide>
            {" "}
            <img src={slide1} alt="" className="object-cover " />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img src={slide2} alt="" className="object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <img src={slide2} alt="" className="object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Inspire;
