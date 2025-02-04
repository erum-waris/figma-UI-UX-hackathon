import { CheckCircle } from "lucide-react";
import Link from "next/link";



export default function OrderConfirmation() {
  return (
    <div className={`font-clash max-w-lg mx-auto px-8 py-10 m-24 bg-white shadow-lg rounded-lg text-center`}>
      {/* Tick Icon */}
      <CheckCircle className="text-green-700 w-16 h-16 mx-auto mb-4" />

      {/* Order Confirmation Message */}
      <h2 className="text-3xl font-bold text-[#2A254B] mb-3">Order Confirmed!</h2>
      <p className="text-lg text-gray-600">
        Thank you for your order! 🎉 Your order is being processed.
      </p>

      {/* Button to Continue Shopping */}
     <Link href="/" className="mt-6 inline-block bg-[#2A254B] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#1f1a3b] transition">
        Continue Shopping
        </Link>
    </div>
  );
}