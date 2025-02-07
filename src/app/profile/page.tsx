"use client";

import Image from "next/image";
import { useUser, SignOutButton } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <div className="max-w-lg mx-auto p-8 py-12 bg-white shadow-lg rounded-lg my-14 text-center">
      <h1 className="text-3xl font-bold text-[#2A254B] mb-6">User Profile</h1>

      {user ? (
        <>
          {/* User Avatar */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src={user.imageUrl}
              alt="User Avatar"
              width={96}
              height={96}
              className="rounded-full border-4 border-[#2A254B] shadow-md"
            />
          </div>

          {/* User Details */}
          <p className="text-xl font-semibold text-gray-800">{user.fullName}</p>
          <p className="text-gray-600">{user.primaryEmailAddress?.emailAddress}</p>

          {/* Sign Out Button */}
          <div className="mt-8">
            <SignOutButton>
              <button className="px-6 py-3 bg-[#2A254B] text-white rounded-md shadow-md hover:bg-[#1f1a3b] transition">
                Sign Out
              </button>
            </SignOutButton>
          </div>
        </>
      ) : (
        <p className="text-lg text-gray-500">Please sign in to view your profile.</p>
      )}
    </div>
  );
}