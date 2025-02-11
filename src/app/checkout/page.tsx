
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext"; // ✅ Import useCart
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

const CheckoutForm: React.FC = () => {
  const { grandTotal, cart, removeFromCart } = useCart();
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
    orderItems: cart, // ✅ Direct cart data set
    grandTotal: grandTotal,
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      orderItems: cart,
      grandTotal: grandTotal,
    }));
  }, [cart, grandTotal]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting order:", formData);

    try {
      const response = await fetch("https://figma-ui-ux-hackathon-mu.vercel.app/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
//  https://figma-ui-ux-hackathon-mu.vercel.app/
//  https://localhost:3000
      if (!response.ok) throw new Error("Failed to submit order.");

      const result = await response.json();
      console.log(result);
      alert("Order submitted successfully!");
      router.push("/orderconfirmation");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="font-clash max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="customerName"
              className="block font-semibold text-lg"
            >
              Name:
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              placeholder="Your Name"
              value={formData.customerName}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold text-lg">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="address" className="block font-semibold text-lg">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="city" className="block font-semibold text-lg">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Your City"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="postalCode" className="block font-semibold text-lg">
              Postal Code:
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Your Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="country" className="block font-semibold text-lg">
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Your Country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block font-semibold text-lg">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
    {/* Order Details */}
    <ul className="space-y-4 mb-8">
          {cart.map((item) => (
            <li key={item.slug} className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 p-4 border rounded-md bg-gray-100">
              {/* Product Image */}
              <div className="relative w-full h-[100px] md:w-[150px] md:h-[150px]">
        {/* Show Loader Only If Image is Not Loaded & No Error */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300 animate-pulse rounded-md">
            <p className="text-gray-500 text-sm">Loading...</p>
          </div>
        )}

        {/* Image */}
        {!imageError ? (
          <Image
            src={item.image}
            width={150}
            height={150}
            alt={item.name}
            className="rounded-md w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)} // Hide loader when image loads
            onError={() => setImageError(true)} // Handle broken/missing images
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-400 text-white rounded-md">
            Image Not Found
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm md:text-md">
          £{item.price} x {item.quantity} = <span className="font-bold">£{item.price * item.quantity}</span>
        </p>
        
        {/* Remove Button */}
        <button
          className="mt-2 bg-red-500 text-white p-2 rounded-md text-sm hover:bg-red-700 transition w-32"
          onClick={() => removeFromCart(item.slug)}
        >
          <AiOutlineDelete size={20} className="inline-block" /> 
        </button>
      </div>
    
 
          
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-semibold mt-4 border-t pt-4">
          <span>Total Amount </span> 
          <span>£{grandTotal.toFixed(2)}</span>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#2A254B] text-white rounded-md transition duration-200 hover:bg-white hover:text-[#2A254B] border-2 border-[#2A254B]"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
