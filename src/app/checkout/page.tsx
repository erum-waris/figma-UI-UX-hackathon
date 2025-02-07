"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";




const CheckoutForm: React.FC = () => {
  interface OrderItem {
    name: string;
    price: number;
    quantity: number;
  }

  const [formData, setFormData] = useState<{
    customerName: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    orderItems: OrderItem[];
    totalAmount: number;
  }>({
    customerName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
    orderItems: [], // Initially empty
    totalAmount: 0, // Initially zero
  });
  const router = useRouter();

  useEffect(() => {
    // Retrieve order items and total amount from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const total = savedCart.reduce(
      (acc: number, item: { price: number; quantity: number }) =>
        acc + item.price * item.quantity,
      0
    );

    setFormData((prevData) => ({
      ...prevData,
      orderItems: savedCart,
      totalAmount: total,
    }));
  }, []);

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
    console.log("Form data being submitted:", formData);
    try {
      const response = await fetch("https://figma-ui-ux-hackathon-mu.vercel.app/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order.");
      }
       
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
   
    <div className={`font-clash max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg`}>
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="customerName" className="block font-semibold text-lg">
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="my-8">
          <h3 className="font-semibold text-xl">Order Summary</h3>
          <ul className="space-y-4">
            {formData.orderItems.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${formData.totalAmount}</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#2A254B]   text-white rounded-md transition duration-200"
        >
          Submit Order
        </button>
      </form>
    </div>
   
  );
};

export default CheckoutForm;