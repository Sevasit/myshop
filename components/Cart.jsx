import React from "react";
import { AiFillCloseSquare, AiTwotoneDelete } from "react-icons/ai";

const Cart = ({ setCart }) => {
  return (
    <>
      <div className="fixed top-[0px] right-0 md:w-[500px] z-50 bg-white rounded shadow-xl text-black p-4">
        <div className="flex justify-end text-base md:text-2xl hover:text-rose-600 duration-300 cursor-pointer p-2">
          <AiFillCloseSquare onClick={() => setCart((el) => !el)} />
        </div>
        <p className="text-left uppercase font-semibold text-xl my-3">
          Your Cart
        </p>
        <div className="overflow-y-auto h-[300px]">
          <div className="flex items-center my-5">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="w-[100px] h-[100px] object-cover mr-3"
            />
            <div className="details">
              <h1>T-shirt</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <div className="price">$100</div>
            </div>
            <AiTwotoneDelete className="cursor-pointer text-lg" />
          </div>
          <div className="flex items-center my-5">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="w-[100px] h-[100px] object-cover mr-3"
            />
            <div className="details">
              <h1>T-shirt</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <div className="price">$100</div>
            </div>
            <AiTwotoneDelete className="cursor-pointer text-lg" />
          </div>
          <div className="flex items-center my-5">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="w-[100px] h-[100px] object-cover mr-3"
            />
            <div className="details">
              <h1>T-shirt</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <div className="price">$100</div>
            </div>
            <AiTwotoneDelete className="cursor-pointer text-lg" />
          </div>
          <div className="flex items-center my-5">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="w-[100px] h-[100px] object-cover mr-3"
            />
            <div className="details">
              <h1>T-shirt</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <div className="price">$100</div>
            </div>
            <AiTwotoneDelete className="cursor-pointer text-lg" />
          </div>
          <div className="flex items-center my-5">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="w-[100px] h-[100px] object-cover mr-3"
            />
            <div className="details">
              <h1>T-shirt</h1>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <div className="price">$100</div>
            </div>
            <AiTwotoneDelete className="cursor-pointer text-lg" />
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <span>Total</span>
          <span>$100</span>
        </div>
        <button className="text-xs text-white font-bold w-[150px] bg-black hover:bg-rose-600 duration-300 rounded-md p-2 shadow-xl mt-2">
          order to checkout
        </button>
        <p className="mt-3 cursor-pointer text-rose-600 capitalize text-sm font-medium">
          reset cart
        </p>
      </div>
    </>
  );
};

export default Cart;
