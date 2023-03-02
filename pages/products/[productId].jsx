import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
import { addToCart } from "@/Redux/cartReducer";

const productsId = () => {
  const [seleactImg, setSelectImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);
  let { query } = useRouter();
  const dispath = useDispatch();

  const { data, loading, error } = useFetch(
    `/products/${query.productId}?populate=*`
  );

  return (
    <>
      {error ? (
        "Something went wrong"
      ) : loading ? (
        "Loading"
      ) : (
        <div className="flex flex-col gap-3 md:flex-row md:gap-[10%] px-[5%] py-3">
          <div className="flex gap-2">
            <div className="flex flex-col gap-3">
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes?.img1?.data?.attributes?.url
                }
                alt=""
                className="h-[250px] w-full object-cover cursor-pointer"
                onClick={() => setSelectImg("img1")}
              />
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                className="h-[250px] w-full object-cover cursor-pointer"
                onClick={() => setSelectImg("img2")}
              />
            </div>
            <div>
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes?.[seleactImg]?.data?.attributes?.url
                }
                alt=""
                className="h-[500px] md:h-[600px] w-[500px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[300px]">
            <h1 className="capitalize font-bold text-2xl text-rose-600">
              {data?.attributes?.title}
            </h1>
            <span className="text-justify text-base">
              {data?.attributes?.desc}
            </span>
            <div className="flex gap-2 font-semibold">
              <p className=" text-gray-600 line-through">
                {data?.attributes.price}
              </p>
              <p>{String(data?.attributes.price * (50 / 100))}</p>
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
            <button
              className="text-xs text-white font-bold w-[200px] bg-black hover:bg-rose-600 duration-300 rounded-md p-2 shadow-xl mt-2 capitalize"
              onClick={() =>
                dispath(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img1.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              add to cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default productsId;
