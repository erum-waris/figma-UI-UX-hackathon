import Image from "next/image";
import React from "react";

import { client } from "@/sanity/lib/client";
import Dropdown from "../components/Dropdown";
import { Product } from "../../../types/Types";
import ProductCard from "../components/ProductCard";


export default async function ProductListingSection() {
  // GROQ query to fetch all products
  const query = `*[_type == "product"]{
  name,
  "slug":slug.current,
 "category": category->name, // Assuming category has a "name" field
  image,
  price,
  quantity,
  tags,
  description,
  features,
 
}`;

  // Fetch products using the Sanity client
  const getProducts: Product[] = await client.fetch(query);

  // Ensure the fetched products are logged
    //console.log(getProducts);

  return (
    <section>
      {/* For large screens: Background image and dropdown menu */}
      <div className="hidden md:block md:mb-[2rem] md:mt-[2rem]">
        <Image
          src="/images/product-bg.png"
          alt="product BG"
          height={209}
          width={1440}
          priority
          className="md:w-full xl:w-[1440px]"
        />
      </div>

      <div className="hidden md:flex md:flex-col lg:flex-row lg:justify-between mb-[28px]">
        {/* Left side Dropdown menu */}
        <div className="hidden md:flex md:justify-between space-x-4 p-4">
          <Dropdown label="Category" options={["Sofas", "Chairs", "Vase"]} />
          <Dropdown label="Product type" options={["Sofas", "Chairs", "Vase"]} />
          <Dropdown
            label="Price"
            options={["£100 - £250", "£250 - £400", "£1000"]}
          />
          <Dropdown label="Brand" options={["Sofas", "Chairs", "Vase"]} />
        </div>

        {/* Right side Dropdown menu */}
        <div className="hidden md:flex md:justify-between space-x-4 p-4 md:mr-5 overflow-x-hidden md:mb-[3rem]">
          <span className="px-4 py-2 rounded-md font-satoshi text-[1.3rem] font-400 text-[#2A254B] hover:pb-[2px] hover:bg-gray-50">
            Sorting by:
          </span>
          <Dropdown
            label="Date added"
            options={["Newest","Oldest","Popular"]}
          />
        </div>
      </div>

      {/* For small screens: Background image and dropdown menu */}
      <div className="md:hidden block mb-[2rem]">
        <Image
          src="/images/mb-product-bg.png"
          alt="product BG"
          height={146}
          width={390}
          priority
          className="w-full"
        />
      </div>
      <div className="md:hidden flex justify-evenly">
        <Dropdown label="Filters" options={["Price", "Rating", "Category"]} />
        <Dropdown
          label="Sorting"
          options={["Price Low", "Price High", "Newest"]}
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
        {getProducts.map((product: Product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>

      {/* View Collection Button */}
      <div className="my-10 flex justify-center items-center">
        <button className="font-satoshi bg-[#F9F9F9] py-4 px-6 rounded-[5px] hover:bg-[#2A254B] hover:text-white text-[#2A254B]">
          View collection
        </button>
      </div>
    </section>
  );
}

