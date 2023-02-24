import React, { useState } from "react";
import {
  AiFillShopping,
  AiFillGithub,
  AiOutlineMenu,
  AiFillCloseSquare,
} from "react-icons/ai";
import Cart from "./Cart";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <div className="flex justify-between items-center h-[120px] max-w-[1600px] mx-auto px-5">
      <Link href="/">
        <div className="text-base md:text-2xl uppercase font-bold text-rose-600 cursor-pointer">
          Ministreet
        </div>
      </Link>
      <div className="flex gap-14">
        <div className="hidden md:flex gap-5 text-base font-bold uppercase items-center">
          <Link href="/about">
            <p className="hover:text-rose-600 cursor-pointer duration-300">
              About us
            </p>
          </Link>
          <Link href="/products">
            <p className="hover:text-rose-600 cursor-pointer duration-300">
              Products
            </p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-rose-600 cursor-pointer duration-300">
              Contact us
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className=" relative" onClick={() => setCart((el) => !el)}>
            <AiFillShopping className="text-base md:text-2xl hover:text-rose-600 duration-300 cursor-pointer" />
            <span className="absolute top-[-10px] right-[-10px] font-bold text-rose-600">
              0
            </span>
          </div>
          <Link href="https://github.com/Sevasit" target="_blank">
            <AiFillGithub className="text-base md:text-2xl hover:text-rose-600 duration-300 cursor-pointer" />
          </Link>
          <div className="text-base md:text-2xl hover:text-rose-600 duration-300 cursor-pointer sm:hidden block">
            {!menu ? (
              <AiOutlineMenu onClick={() => setMenu(!menu)} />
            ) : (
              <AiFillCloseSquare onClick={() => setMenu(!menu)} />
            )}
          </div>
        </div>
      </div>
      {menu && (
        <div className="absolute left-0 top-0 w-[40%] border-r border-r-gray-900 bg-black h-screen flex flex-col gap-6 z-30 sm:hidden py-5 shadow-lg shadow-rose-500/50">
          <Link href="/about">
            <p className="hover:text-rose-600 font-bold text-white cursor-pointer duration-300 z-20 p-2">
              About us
            </p>
          </Link>
          <Link href="/products">
            <p className="hover:text-rose-600 font-bold text-white cursor-pointer duration-300 z-20 p-2">
              Products
            </p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-rose-600 font-bold text-white cursor-pointer duration-300 z-20 p-2">
              Contact us
            </p>
          </Link>
        </div>
      )}
      {cart && <Cart setCart={setCart} />}
    </div>
  );
};

export default Navbar;
