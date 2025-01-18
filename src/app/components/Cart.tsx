'use client';
import Image from "next/image";
import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";

const Shopping = () => {
   
  const  {cart,removeFromCart,totalprice } = useCart()

   // State for managing product quantity
       const [quantity, setQuantity] = useState<number>(0);
  // Handlers for quantity increment and decrement
  const handleIncrement = () => setQuantity((quantity) => quantity + 1);
  const handleDecrement = () => setQuantity((quantity) => ( quantity > 1 ? quantity - 1 : 1));
  
  return (
    <>
      <section className="py-12 mt-12">
        <div className="w-[95%] sm:w-[90%] mx-auto border border-gray-300 rounded-lg p-4 sm:p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Products Section */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-lg sm:text-xl font-semibold mb-6">Products</h1>

              <ul className="list-none space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.slug}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-4 border rounded-md bg-white"
                  >
                    <Image
                      src={item.image}
                      width={900}
                      height={900}
                      alt={item.name}
                      className="rounded-md w-full sm:w-40 sm:h-40 lg:w-60 lg:h-80 object-cover"
                    />
                    <div className="flex-grow text-center sm:text-left">
                      <h1 className="text-base sm:text-lg font-semibold">{item.name}</h1>
                     
                      <h1 className="text-sm sm:text-base font-bold">
                        {item.price}
                      </h1>

                      {/* Quantity Controller */}
          <div className="flex items-center gap-4 mt-2">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

                      <button
                        className="p-2 bg-red-500 text-white rounded-md mt-4 hover:bg-red-700 transition w-full sm:w-auto"
                        onClick={()=>removeFromCart(item.slug)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

           <div className="mt-4 flex flex-col gap-4">
          <h2 className="text-lg font-medium text-gray-700">
              Total Quantity:
              <span className="text-green-500 font-bold font-clash mx-3">
              {quantity} 
              </span>
            </h2>
            <h2 className="text-lg font-medium text-gray-700">
              Total Price:
              <span className="text-green-500 font-bold font-clash mx-3">
              ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
              </span>
            </h2>
          </div>

              <p className="text-sm text-gray-500 mt-2">
                Taxes and shipping are calculated at checkout.
              </p>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-4 sm:p-6">
              <h1 className="text-lg sm:text-xl font-semibold mb-6">Order Summary</h1>

              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Subtotal</p>{totalprice}
                <p className="font-bold">${}</p>
              </div>

              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Total</p>
                <p className="font-bold">${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
              </div>

              <button className="w-full bg-gray-800 text-white py-3 rounded-lg">
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopping;