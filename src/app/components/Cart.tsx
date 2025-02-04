"use client";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
// import { useUser, useClerk } from "@clerk/nextjs";


const Shopping = () => {
  const { grandTotal, cart, removeFromCart } = useCart();
  const router = useRouter();

  // const { user } = useUser();
  // const { openSignUp } = useClerk();
  

  const handleNavigation = () => {
    router.push("/productlisting"); // Navigate to the product listing page
  };
  const handleCheckout = () => {
    router.push("/checkout"); // Navigate to the product listing page
  };


     

  return (
    <>
      <section className="mt-12 mb-10 m-auto">
        <div className="flex flex-col justify-center items-center mx-auto border border-gray-300 rounded-lg p-4 sm:p-6 md:mb-10">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6">
            {/* Products Section */}
            <div className="w-full flex-grow">
              <h1 className="text-2xl md:text-4xl font-bold font-satoshi text-center sm:text-xl mb-6">
                Products Cart
              </h1>
              {cart.length === 0 ? (
                <div>
                <h2 className="text-white text-xl md:text-2xl bg-blue-950 h-20 font-clash flex justify-center items-center felx-col hover:bg-white hover:border-black hover:border-2 hover:text-black w-full rounded-full">
                  Your Cart Is Empty {" "}
                  <span className="text-red-500">🛒</span>
                  </h2>
                  <button
                    onClick={handleNavigation}
                    className="mx-auto md:w-1/4 w-full font-clash block text-center mb-2 hover:bg-blue-950 bg-blue-500 hover:border-2 hover:border-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 mt-2"
                  >
                    Select Products
                  </button>
                  </div>
              ) : (
                <ul className="list-none space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.slug}
                      className="grid grid-cols-1 md:grid-cols-2 items-center sm:gap-8 p-4 border rounded-md bg-white"
                    >
                      {/* Product Image */}
                      <Image
                        src={item.image}
                        width={400}
                        height={400}
                        alt={item.name}
                        quality={75}
                        priority
                        className="rounded-md w-full h-[400px] md:ml-10 lg:ml-[50px] lg:w-[400px] lg:h-80 object-fit"
                      />
                      <div className="flex-grow text-center mt-5">
                        <h1 className="sm:text-2xl text-lg font-clash font-semibold">
                          {item.name}
                        </h1>

                        {/* Individual Price */}
                        <p className="text-xl font-clash sm:text-2xl font-bold">
                          £{item.price} x {item.quantity} = £
                          {item.price * item.quantity}
                        </p>

                        <div className="mt-4 flex flex-col gap-4">
                          <p className="text-lg font-medium text-gray-700 font-clash">
                            Quantity:
                            <span className="font-bold font-clash mx-3">
                              {item.quantity}
                            </span>
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          className="p-5 bg-red-500 text-white rounded-md mt-4 text-center hover:bg-red-700 transition w-full sm:w-auto"
                          onClick={() => removeFromCart(item.slug)}
                        >
                          <AiOutlineDelete size={30} />
                        
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Order Summary */}
          
            <div className="w-full mt-4 lg:mt-6 lg:w-1/3 p-4 bg-gray-200 rounded-lg shadow-md mx-auto md:mx-4 sm:p-6 h-auto overflow-y-auto">
  <h4 className="font-clash text-blue-950 text-xl mb-4">Order Summary</h4>
  <div className="space-y-4">
    {/* List products and their prices */}
    {cart.map((item) => (
      <div className="flex justify-between" key={item.slug}>
        <p className="font-satoshi text-lg">
          {item.quantity} x {item.name}
        </p>
        <p className="font-satoshi text-lg">
          £{(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    ))}
  </div>

  {/* Total and other details */}
  <div className="flex justify-between mt-6">
    <p className="font-satoshi text-lg">Subtotal</p>
    <p className="font-satoshi text-lg">£{grandTotal.toFixed(2)}</p>
  </div>
  <div className="flex justify-between">
    <p className="font-satoshi text-lg ">Taxes & Shipping</p>
    <p className="font-satoshi text-lg text-green-500">(Free)</p>
  </div>

  <div className="flex justify-between lg:items-center mt-6 lg:flex-row flex-col lg:gap-0 gap-4">
    <button
      onClick={handleCheckout}
      className="px-3 py-3 bg-blue-950 mr-3 text-white rounded-md hover:bg-gray-200  hover:text-blue-950 hover:border-black hover:border-2"
    >
      Go to checkout
    </button>
     {/* If user is not signed in, show the sign-up button */}
     {/* {!user ? (
              <button
                onClick={() => openSignUp({})} // Opens sign-up modal
                className="px-6 py-2 mt-4 bg-[#2A254B] text-white rounded-md"
              >
                Sign Up to Checkout
              </button>
            ) : (
              <Link href="/checkout" className="px-3 py-3 bg-blue-950 text-white rounded-md hover:bg-gray-200 hover:text-blue-950 hover:border-black hover:border-2">
                Go to Checkout
              </Link>
            )} */}
    <button className="px-3 py-3 bg-blue-950 text-white rounded-md hover:bg-gray-200 hover:text-blue-950 hover:border-black hover:border-2">
      <Link href="/productlisting">Continue Shopping</Link>
    </button>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Shopping;
