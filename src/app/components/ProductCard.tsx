import Image from "next/image";
import { Products } from "../../../types/Types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <div className="w-full h-auto border-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      {product.image ? (
        <Image
          src={urlFor(product.image).url()}
          height={400}
          width={400}
          alt={product.name || "Product Image"}
          className="w-full h-[350px]  object-cover rounded-t-md"
        />
      ) : (
        <div className="w-full h-[200px] md:h-[400px] bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Image Not Available</p>
        </div>
      )}

      {/* Product Details */}
      <div className="w-full mt-4 flex flex-col items-start space-y-2 m-2">
        <p className="text-md font-clash text-[#2A254B] truncate">
          {product.name || "Unknown Product"}
        </p>
        <p className="text-md font-satoshi text-gray-700">
          {product.price ? `${product.price}` : "Price Not Available"}
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className="w-full mt-4">
        <Link
          href={`/productlisting/${product.slug}`}
          className="w-full block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
