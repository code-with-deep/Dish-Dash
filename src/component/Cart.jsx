import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false); // closed by default
  const cartItems = useSelector((state) => state.cart.cart) || [];

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
    } else {
      toast.success("Order placed successfully 🎉");
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      {/* Cart drawer */}
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white 
        ${activeCart ? "translate-x-0" : "translate-x-full"} 
        transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center p-5 my-3">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(false)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {/* Items */}
        <div className="px-4 space-y-3 overflow-y-auto max-h-[70vh]">
          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                quantity={food.quantity}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="font-semibold text-gray-800">Items : {totalItems}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : Rs {totalAmount}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={handleCheckout}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full mb-3"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Floating cart button (always visible) */}
      <div className="fixed bottom-4 right-4">
        <div className="relative">
          <FaCartShopping
            onClick={() => setActiveCart(true)}
            className={`rounded-full bg-white shadow-md text-5xl p-3 cursor-pointer 
            ${totalItems > 0 ? "animate-bounce delay-500 transition-all duration-300" : ""} 
            ${activeCart ? "text-green-500" : "text-gray-600"}`}
          />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
