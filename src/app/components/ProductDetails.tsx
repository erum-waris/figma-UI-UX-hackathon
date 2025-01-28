
"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "lucide-react";

type ProductDetailsProps = {
  products: {
    slug: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    dimensions: {
      height: number;
      width: number;
      depth: number;
    };
    image: string;
  };
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ products }) => {
  const [quantity, setQuantity] = useState(1); // Default quantity set to 1
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      slug: products.slug,
      name: products.name,
      price: products.price,
      quantity,
      image: products.image,
    });

    // Show alert based on quantity
    if (quantity === 1) {
      alert("1 item added successfully!");
    } else {
      alert(`${quantity} items added successfully!`);
    }
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto p-6 lg:p-12">
      {/* Left Section: Image */}
      <div className="lg:w-1/2 lg:h-[600px] w-full h-[400px] relative shadow-md"> {/* Added relative */}
      {products.image ? (
  <Image
    src={products.image}
    alt={products.name || "Product image"}
    quality={75}
    fill
    loading="lazy"
    sizes="(max-width: 1024px) 100vw,100vh"
    style={{ objectFit: "cover" }}
  />
 )
  : (
   <div className="flex flex-col items-center justify-center">
     <span>Image Loading ...</span>
     <Loader className="w-12 h-12 animate-spin text-[#2A254B]" />
   </div>
 )
 }

</div>


      {/* Right Section: Product Details */}
      <div className="lg:w-1/2 w-full mx-auto mt-8 lg:mt-2 lg:pl-12">
        <h1 className="text-3xl font-semibold font-satoshi">{products.name}</h1>
        <h2 className="text-2xl font-clash  mt-4">Price : £{products.price}</h2>
        <div className="mt-6">
          <h2 className="text-2xl font-medium font-satoshi">Description</h2>
          <p className=" mt-2 font-clash text-base">{products.description}</p>
          <h3 className="text-xl mt-4 font-md font-satoshi">Key Features</h3>
          <ul className="mt-4 space-y-1  font-clash">
            {products.features?.length > 0 ? (
              products.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))
            ) : (
              <li>No features available</li>
            )}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-medium font-satoshi">Dimensions</h2>
          <div className="mt-2 font-clash flex gap-3">
            {products.dimensions ? (
              <>
                <span>
                  Height : <br /> {products.dimensions.height},
                </span>
                <span>
                  Width : <br /> {products.dimensions.width}{" "}
                </span>
                <span>
                  Depth : <br /> {products.dimensions.depth}
                </span>
              </>
            ) : (
              "Dimensions are not available"
            )}
          </div>
        </div>
        {/* Quantity Selector and Add to Cart */}
        <div className="mt-6">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-satoshi">Quantity:</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-2 py-1 bg-gray-200 text-lg text-gray-800 rounded hover:bg-blue-950 hover:text-white"
              >
                -
              </button>
              <span className="px-4 py-1 border rounded">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-2 py-1 bg-gray-200 text-lg text-gray-800 rounded hover:bg-blue-950  hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 hover:bg-white hover:text-black hover:border-black hover:border-2  bg-blue-950 text-white rounded-md transition"
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-8">
            <Link
              href="/productlisting"
              className="px-6 py-2 hover:bg-white hover:text-black hover:border-black hover:border-2  bg-blue-950 text-white rounded-md transition"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductDetails;
