import { client } from "@/sanity/lib/client";
import ProductDetails from "@/app/components/ProductDetails";
import BrandSection from "@/app/components/brand/BrandSection";
import SignUp from "@/app/components/SignUp";
import MoreProducts from "@/app/components/Recomend";


export default async function Products({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Fetch product data by slug
  const query = `*[_type == "product" && slug.current == $slug][0]{
    name,
    "slug": slug.current,
    "image": image.asset->url,
    price,
    description,
    features,
    dimensions
  }`;
  const product = await client.fetch(query, { slug });

  // Handle case when product is not found
  if (!product) {
    return (
      <div className="mx-auto px-4 py-8">
        <p className="text-center text-red-500 bg-black/20">
          Product Not Found. Please check the URL or try again later.
        </p>
      </div>
    );
  }

  // Pass the product data to the ProductDetails component
  return <>

<ProductDetails products={product} />
<MoreProducts/>
<div className='mb-[200px]'>
<BrandSection/>
</div>
<SignUp />
  </> 

}
