import { client } from "@/sanity/lib/client";
import DetailsPage from "@/app/components/ProductDetails";

export default async function Products({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Query for fetching product details by slug
  const query = `*[_type == 'products' && slug.current == $slug][0]{
    product_name,
    description,
    "image": image.asset->url,
    price
  }`;

  // Fetch the product data from Sanity
  const product = await client.fetch(query, { slug });

  // If no product is found, render a "Product Not Found" message
  if (!product) {
    return (
      <div className="mx-auto px-4 py-8">
        <p className="text-center text-red-500 bg-black/20">
          Product Not Found. Please check the URL or try again later.
        </p>
      </div>
    );
  }

  // Pass the product data to the DetailsPage component
  return (
    <>
      <DetailsPage product={product} />
    </>
  );
}
