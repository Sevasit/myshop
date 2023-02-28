import React, { useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

function productsId() {
  const images = {
    img1: "https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    img2: "https://plus.unsplash.com/premium_photo-1671656349182-754eda1ab349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  };

  const [seleactImg, setSelectImg] = useState("img1");
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row md:gap-[10%] px-[5%] py-3">
        <div className="flex gap-2">
          <div className="flex flex-col gap-3">
            <img
              src={images.img1}
              alt=""
              className="h-[250px] w-full object-cover cursor-pointer"
              onClick={() => setSelectImg("img1")}
            />
            <img
              src={images.img2}
              alt=""
              className="h-[250px] w-full object-cover cursor-pointer"
              onClick={() => setSelectImg("img2")}
            />
          </div>
          <div>
            <img
              src={images[seleactImg]}
              alt=""
              className="h-[500px] md:h-[600px] w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[300px]">
          <h1 className="capitalize font-bold text-2xl text-rose-600">
            t-shirt
          </h1>
          <span className="text-justify text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            et, sapiente neque deserunt impedit quibusdam ea nemo libero.
          </span>
          <div className="flex gap-2 font-semibold">
            <p className=" text-gray-600 line-through">$100</p>
            <p>$50</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiFillMinusSquare
              className=" text-rose-600 cursor-pointer text-xl"
              onClick={() => setQuantity((qty) => (qty === 1 ? 1 : qty - 1))}
            />
            <p>{quantity}</p>
            <AiFillPlusSquare
              className=" text-rose-600 cursor-pointer text-xl"
              onClick={() => setQuantity((qty) => qty + 1)}
            />
          </div>
          <button className="text-xs text-white font-bold w-[200px] bg-black hover:bg-rose-600 duration-300 rounded-md p-2 shadow-xl mt-2 capitalize">
            add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default productsId;
