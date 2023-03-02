import React from "react";
import { AiFillCloseSquare, AiTwotoneDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { resetCart, removeItem } from "@/Redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "@/hooks/makeRequeast";

const Cart = ({ setCart }) => {
  const products = useSelector((state) => state.cart.products);
  const dispath = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "TOKEN"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const response = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
          {products.length >= 1 ? (
            products?.map((item) => (
              <div className="flex gap-4 items-center my-5" key={item.id}>
                <img
                  src={"http://localhost:1337" + item.img}
                  alt=""
                  className="w-[100px] h-[100px] object-cover mr-3"
                />
                <div className="details">
                  <h1>{item.title}</h1>
                  <p>{item.desc?.substring(0, 100 + "...")}</p>
                  <div className="price">
                    {item.quantity} x ${item.price}
                  </div>
                </div>
                <AiTwotoneDelete
                  className="cursor-pointer text-lg hover:text-rose-600 duration-300"
                  onClick={() => dispath(removeItem(item.id))}
                />
              </div>
            ))
          ) : (
            <p className="font-semibold text-base text-rose-600">No item</p>
          )}
        </div>

        <div className="flex justify-between mt-2">
          <span>Total</span>
          <span>${totalPrice()}</span>
        </div>
        <button
          className="text-xs text-white font-bold w-[200px] bg-black hover:bg-rose-600 duration-300 rounded-md p-2 shadow-xl mt-2 capitalize"
          onClick={handlePayment}
        >
          order to checkout
        </button>
        <p
          className="mt-3 cursor-pointer text-rose-600 capitalize text-sm font-medium"
          onClick={() => dispath(resetCart())}
        >
          reset cart
        </p>
      </div>
    </>
  );
};

export default Cart;
