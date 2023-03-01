import Link from "next/link";
import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <Link href={`/products/${item.id}`}>
        <div className="w-[280px] py-3 rounded-lg shadow-lg px-2 hover:bg-gray-200 duration-300 cursor-pointer">
          <div className="image relative w-full h-[400px] overflow-hidden group">
            <img
              src={
                "http://localhost:1337" +
                item.attributes?.img1?.data?.attributes?.url
              }
              alt=""
              className="absolute z-20 w-full h-full object-cover group-hover:hidden"
            />
            <img
              src={
                "http://localhost:1337" +
                item.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              className="secondImg absolute z-10 w-full h-full object-cover group-hover:flex"
            />
          </div>
          <h2 className="font-bold text-xl">{item?.attributes.title}</h2>
          <div className="flex gap-3">
            <h3 className="line-through text-gray-500">
              {item?.attributes.price}
            </h3>
            <h3>{item?.attributes.price * (50 / 100)}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
