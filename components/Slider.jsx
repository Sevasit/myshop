import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import Link from "next/link";

const datas = [
  "https://images.unsplash.com/photo-1572708609354-e4b4bdfe5a93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.unsplash.com/photo-1622351772377-c3dda74beb03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80",
  "https://images.unsplash.com/photo-1520927920056-3c8a6f66e0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80",
];

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-[550px] md:h-[800px]"
      >
        <div className="absolute inset-0 flex justify-center items-center z-10 w-full h-[550px] md:h-[800px] bg-gradient-to-tr from-zinc-800/60"></div>
        {datas?.map((data, i) => (
          <SwiperSlide key={i}>
            <img
              className="w-full h-[550px] md:h-[800px] object-cover block"
              src={data}
              alt=""
            />
          </SwiperSlide>
        ))}
        <div className="absolute inset-10 flex justify-center items-center z-10 ">
          <div className="flex flex-col items-center gap-6 md:gap-28">
            <p className="text-2xl md:text-[5rem] text-white">
              Pick your lifestyle
            </p>
            <Link href="/products">
              <button className="text-xs md:text-xl text-white font-bold w-[150px] bg-black hover:bg-rose-600 duration-300 rounded-md p-2 shadow-xl">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
