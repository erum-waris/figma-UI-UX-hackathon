// "use client"; // 👈 Ensures this runs only in the client

// import { ClerkProvider } from "@clerk/nextjs";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";
// import { CartProvider } from "../context/CartContext";
// import { WishlistProvider } from "../context/WishlistContext";
// import ClientLoader from "../components/ClientLoader";
// export default function ClerkProviderWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Check if the environment variable is set properly
//   if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
//     console.error("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing!");
//     return <div>Error: Clerk not configured properly.</div>;
//   }

//   return (
//     <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
//           <CartProvider>
//             <WishlistProvider>
//               <ClientLoader>
//                 <div className="mx-auto xxs:max-w-[534px] xs:max-w-[639px] sm:max-w-[767px] md:max-w-[1023px] lg:max-w-[1334px] xl:max-w-[1440px] overflow-x-hidden text-[#2A254B]">
//                   <Navbar />
//                   {children}
//                   <Footer />
//                 </div>
//               </ClientLoader>
//             </WishlistProvider>
//           </CartProvider>
//     </ClerkProvider>
//   );
// }


"use client"; // 👈 Ensures this runs only in the client

import { useEffect, useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import ClientLoader from "../components/ClientLoader";

export default function ClerkProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOffline, setIsOffline] = useState(false);
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    // Function to check internet status
    const handleNetworkChange = () => {
      if (!navigator.onLine) {
        setIsOffline(true);
        setIsSlow(false);
      } else {
        setIsOffline(false);
      }
    };

    // Function to check slow network
    const checkSlowNetwork = async () => {
      const startTime = Date.now();
      try {
        await fetch("https://www.google.com", { mode: "no-cors" });
        const duration = Date.now() - startTime;
        if (duration > 3000) {
          // If response takes more than 3s, assume slow network
          setIsSlow(true);
        } else {
          setIsSlow(false);
        }
      } catch (error) {
        console.error("Network request failed:", error);
        setIsSlow(false);
      }
    };

    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    // Check slow network every 10 seconds
    const slowNetworkInterval = setInterval(checkSlowNetwork, 10000);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
      clearInterval(slowNetworkInterval);
    };
  }, []);

  // Check if Clerk Key is missing
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    console.error("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing!");
    return <div className="text-center text-red-600">Error: Clerk not configured properly.</div>;
  }

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <CartProvider>
        <WishlistProvider>
          <ClientLoader>
            <div className="mx-auto xxs:max-w-[534px] xs:max-w-[639px] sm:max-w-[767px] md:max-w-[1023px] lg:max-w-[1334px] xl:max-w-[1440px] overflow-x-hidden text-[#2A254B]">
              <Navbar />

              {/* 🛑 Network Status Messages */}
              {isOffline && (
                <div className="text-center bg-red-500 text-white p-3">
                  ⚠️ No Internet Connection! Please check your network.
                </div>
              )}
              {isSlow && !isOffline && (
                <div className="text-center bg-yellow-400 text-black p-3">
                  ⚠️ Your internet connection is slow, please wait...
                </div>
              )}

              {children}
              <Footer />
            </div>
          </ClientLoader>
        </WishlistProvider>
      </CartProvider>
    </ClerkProvider>
  );
}
