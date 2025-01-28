// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: {
//     asset: {
//       _ref: string;
//     };
//   };
// }

// interface Props {
//   params: { slug: string };
// }

// interface CategoryData {
//   name: string; // Updated to match the schema's "name" field
//   products: Product[];
//   totalCount: number;
// }

// export default function CategoryPage({ params }: Props) {
//   const { slug } = params;

//   const [categoryData, setCategoryData] = useState<CategoryData | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `
//         *[_type == "category" && slug.current == $slug][0] {
//           name, // Fetch the "name" field instead of "title"
//           "products": *[_type == "product" && references(^._id)] {
//             _id,
//             name,
//             description,
//             price,
//             image
//           },
//           "totalCount": count(*[_type == "product" && references(^._id)])
//         }
//       `;

//       const url = `/api/sanity`; // Replace with your API endpoint for Sanity
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ query, params: { slug } }),
//       });

//       const { result } = await response.json();
//       setCategoryData(result);
//     };

//     fetchData();
//   }, [slug]);

//   if (!categoryData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">{categoryData.name}</h1>
//       <p>Total Products: {categoryData.totalCount}</p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {categoryData.products.map((product) => (
//           <div key={product._id} className="border p-4 rounded shadow">
//             <Image
//               src={`product.image.asset._ref.replace(
//                 "image-",
//                 ""
//               ).replace("-jpg", ".jpg")}`}
//               alt={product.name}
//               width={300}
//               height={300}
//             />
//             <h2 className="text-lg font-semibold">{product.name}</h2>
//             <p>{product.description}</p>
//             <p className="text-green-500 font-bold">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
