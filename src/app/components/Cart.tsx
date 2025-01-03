import { useState, useEffect } from "react";
import client, { urlFor } from "../sanity";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "product"]`);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add to Cart with Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          {products.map((product) => (
            <div
              key={product._id}
              className="flex items-center p-4 border rounded-lg mb-4"
            >
              <img
                src={urlFor(product.image).url()}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Cart</h2>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center p-4 border rounded-lg mb-4"
              >
                <img
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}
