// src/app/category/[slug]/page.tsx

import { client } from '@/sanity/lib/client';
import { Category} from '../../../../types/Types';
import CategoryCard from '@/app/components/Category';



// This function will generate the paths for dynamic routes
export async function generateStaticParams() {
  const query = `*[_type == "category"]{ "slug": slug.current }`;
  const categories = await client.fetch<{ slug: { current: string } }[]>(query);

  return categories.map((category) => ({
    slug: category.slug.current,
  }));
}

// Directly fetching data in the component
const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  
  const query = `*[_type == "product" && category->slug.current == $slug]{
    name,
    slug,
    price,
    description,
    "image": image.asset->url
  }`;

  const products = await client.fetch<Category[]>(query, { slug });

  return (
    <div className='container mx-auto px-4 mb-10 m-3 pr-2'>
     <h1 className="text-2xl md:text-4xl font-semibold font-clash mb-8">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
       <CategoryCard product={product} key={product.slug.current} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
