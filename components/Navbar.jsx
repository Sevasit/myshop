import React from "react";
import { AiFillShopping, AiFillGithub, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[120px] max-w-[1600px] mx-auto px-5">
      <div className="text-base md:text-2xl uppercase font-bold text-rose-600 cursor-pointer">
        Ministreet
      </div>
      <div className="flex gap-14">
        <div className="hidden md:flex gap-5 text-base font-bold uppercase items-center">
          <p className="hover:text-rose-600 cursor-pointer duration-300">
            About us
          </p>
          <p className="hover:text-rose-600 cursor-pointer duration-300">
            Products
          </p>
          <p className="hover:text-rose-600 cursor-pointer duration-300">
            Contact us
          </p>
        </div>
        <div className="flex items-center gap-5">
          <AiFillShopping className="text-base md:text-2xl hover:text-rose-600 duration-300 cursor-pointer" />
          <AiFillGithub className="text-base md:text-2xl hover:text-rose-600 duration-300 cursor-pointer" />
          <AiOutlineMenu className="text-base md:text-2xl hover:text-rose-600 duration-300 cursor-pointer sm:hidden block" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
