"use client"
import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { PortableText } from "@portabletext/react"; 
import Link from "next/link";


const DetailsPage = ({ product }: { product: any }) => {
   const {addToCart } = useCart()



 


  const handleAddToCart = () => {
    addToCart({
      slug: product.slug,
      product_name: product.product_name,
      price: product.price,
      quantity: product.quantity,
      image: product.image
    });
  };

  if (!product) {
    return <div className="container mx-auto p-4">Product not found!</div>;
  }

  return (
    <div className="container w-[90%] mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8 my-20">
        <div className="w-full md:w-[600px] h-[100%] p-4 flex justify-center items-center border rounded-lg shadow-lg">
          <Image
            src={product.image}
            alt={product.product_name}
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-evenly w-full md:w-[50%] mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 font-clash">{product.product_name}</h1>
          <div className="flex justify-between items-center mt-2">
            <span className="text-green-500 font-bold text-2xl font-clash">
           Product Price : £{product.price}
            </span>
          </div>

        
           


          <div className="mt-4">
            <h2 className="text-3xl font-bold font-clash">Description</h2>
            <p className="mt-2 text-gray-700 font-clash"> <PortableText value={product.description} /></p>
          </div>
<div className="flex gap-5">
<div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-8">
            <Link href="/productlisting"
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-blue-600 transition"
            >
             Back
            </Link>
          </div>
</div>
          
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;



// "use client";

// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client"; 
// import { products } from "../../../types/Types";

// const ProductCardDetails = () => {
//   const params = useParams(); // Getting the route parameter
//   const productId = params.id;
//   const [details, setDetails] = useState<products | null>(null);
//   const [quantity, setQuantity] = useState<number>(1); // Default quantity set to 1
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal state

//   // useEffect(() => {
//   //   const fetchProductDetails = async () => {
//   //     if (!productId) return; // Prevent fetching if productId is undefined or null

//   //     console.log("Fetching details for productId:", productId); // Log productId

//   //     const query = `*[_type == 'products' && slug.current == $productId] {
//   //       product_name,
//   //       price,
//   //       "image": image.asset->url,
//   //       description
//   //     }`;

//   //     try {
//   //       // Fetch product details based on the slug from Sanity
//   //       const productData = await client.fetch(query, { productId: productId });
//   //       console.log("Product data fetched:", productData); // Log fetched data

//   //       // If the product data exists, set it to state
//   //       if (productData.length > 0) {
//   //         setDetails(productData[0]);
//   //       } else {
//   //         console.log("No product found for the given id.");
//   //       }
//   //     } catch (error) {
//   //       console.error("Error fetching product details:", error);
//   //     }
//   //   };

//   //   fetchProductDetails();
//   // }, [productId]);

//   useEffect(() => {
//     // Log the productId to ensure it's correctly extracted
//     console.log("Extracted productId:", productId);
  
//     if (!productId) {
//       return; // Do nothing if the productId is not available
//     }
  
//     const fetchProductDetails = async () => {
//       const query = `*[_type == 'products' && slug.current == $productId] {
//         product_name,
//         price,
//         "image": image.asset->url,
//         description
//       }`;
  
//       try {
//         // Fetch data from Sanity
//         const productData = await client.fetch(query, { productId });
  
//         console.log("Fetched product data:", productData); // Log the fetched data
  
//         if (productData && productData.length > 0) {
//           setDetails(productData[0]); // Set the details if data exists
//         } else {
//           console.log("No product found for the given id.");
//         }
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };
  
//     fetchProductDetails();
//   }, [productId]);
  
//   const increase = () => setQuantity(quantity + 1);
//   const decrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1); // Prevent going below 1
//   };

//   // Handle Add to Cart functionality
//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

//     // Check if the product already exists in the cart
//     const existingProductIndex = existingCart.findIndex(
//       (item: any) => item.slug === productId
//     );

//     if (existingProductIndex !== -1) {
//       // Update the quantity of the existing product
//       existingCart[existingProductIndex].quantity += quantity;
//     } else {
//       // Add the new product with the selected quantity
//       existingCart.push({
//         slug: details?.slug,
//         Product_name: details?.product_name,
//         price: details?.price,
//         quantity,
//         image: details?.image,
//       });
//     }

//     // Save the updated cart to localStorage
//     localStorage.setItem("cart", JSON.stringify(existingCart));

//     // Show the modal for the product added to cart
//     setIsModalOpen(true);

//     // Close the modal after 3 seconds
//     setTimeout(() => {
//       setIsModalOpen(false);
//     }, 3000);
//   };

//   return (
//     <div className="relative w-full lg:h-[2827px] h-[3579px] mx-auto lg:mx-0 md:mx-auto ">
//       {details ? (
//         <div className="w-full mt-[6rem] h-[1055px] bg-white flex flex-col md:mt-[8rem] md:flex-row md:gap-[1.5rem] md:h-[759px] details">
//           <div className="md:w-[55%] md:h-[759px] xs:h-[600px] h-[380px]">
//             <Image
//               src={details.image}
//               alt={`${details.product_name} Image`}
//               width={200}
//               height={200}
//               className="w-full md:h-[759px] h-[380px] detail-img"
//             />
//           </div>
//           <div className="lg:h-[657px] md:w-[45%] w-full lg:mx-[1.5rem] h-[675px] p-[1.5rem] detail-div">
//             <div className="flex flex-col gap-[12px]">
//               <h3 className="font-clash font-normal leading-[33.6px] text-darkPrimary text-[1.6rem] lg:text-4xl md:text-3xl">
//                 {details.product_name}
//               </h3>
//               <h4 className="font-clash font-normal leading-7 mt-1 md:mt-0 text-darkPrimary text-xl lg:text-3xl md:text-2xl">
//                 &#163; {details.price}
//               </h4>
//             </div>
//             <div className="flex mt-4 md:mt-10 flex-col gap-[12px]">
//               <h5 className="font-clash font-normal leading-[22.4px] text-darkPrimary text-lg md:text-xl lg:text-2xl">
//                 Product description
//               </h5>
//               <p className="font-satoshi font-normal text-darkPrimary leading-[21px] text-[16px] lg:text-lg md:text-base">
//                 {details.description}
//               </p>
//             </div>
//             <div className=" flex flex-col gap-[12px] ">
//               <h5 className="relative font-clash font-normal leading-[22.4px] text-darkPrimary text-lg md:text-xl lg:text-2xl md:top-10">
//                 Quantity
//               </h5>
//               <div className="relative lg:top-5 mt-4 lg:mt-4 md:mt-10 flex items-center lg:justify-center space-x-4 md:space-x-0 bg-lightGray md:w-32 w-full quantity-btn">
//                 <button
//                   onClick={decrease}
//                   className="bg-lightGray text-darkPrimary hover:bg-darkPrimary hover:text-white p-2 rounded w-full md:w-[50px] "
//                 >
//                   <p className="text-xl md:pl-0 pl-[4rem] pb-3">_</p>
//                 </button>

//                 <div className="text-xl text-darkPrimary px-2">{quantity}</div>

//                 <button
//                   onClick={increase}
//                   className="bg-lightGray text-darkPrimary hover:bg-darkPrimary hover:text-white p-2 rounded w-full md:w-[50px]"
//                 >
//                   <p className="text-xl md:pr-0 pr-[4rem] py-1.5">+</p>
//                 </button>
//               </div>
//               <div className="mt-4 flex gap-2">
//                 <button
//                   onClick={handleAddToCart}
//                   className="relative md:top-5 md:w-[250px] w-full bg-darkPrimary px-[32px] py-[10px] font-satoshi font-normal leading-6 text-white hover:bg-navbarColor md:h-[3rem] add-to-cart"
//                 >
//                   Add to Cart
//                 </button>

//                 <button
//                   onClick={() => (window.location.href = "/products")}
//                   className="relative md:top-5 md:w-[250px] w-full bg-lightGray px-[32px] py-[10px] font-satoshi font-normal leading-6 text-darkPrimary hover:bg-darkPrimary hover:text-white md:h-[3rem] see-less"
//                 >
//                   See Less
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading product details...</p>
//       )}

//       {/* Popup Modal */}
//       {isModalOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg text-center">
//             <h3 className="text-xl text-darkPrimary">Product added to cart!</h3>
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="mt-4 px-6 py-2 bg-darkPrimary text-white rounded-full"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

     
//     </div>
//   );
// };

// export default ProductCardDetails;
