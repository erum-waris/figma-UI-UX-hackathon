"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { client } from "@/sanity/lib/client";
import { Loader } from "lucide-react";
import { Product } from "../../../types/Types";



const query = `*[_type == "product"][3..6]{
  name,
  "slug":slug.current,
 "category": category->title, 
  image,
  price,
  quantity,
  tags,
  description,
 
}`;

export default function PopularProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...<Loader className="w-12 h-12 animate-spin text-[#2A254B]" /></div>;
  }

  return (
    <section className="my-6 mx-3">
      <h1 className="text-2xl  md:text-4xl font-semibold font-clash mb-5">Our Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
        ))}
      </div>
    </section>
  );
}
