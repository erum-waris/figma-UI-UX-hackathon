"use client";

import React, { useState, useEffect } from "react";


const Loader: React.FC = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="w-5 h-5 bg-blue-500 rounded animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    );
  };
const ClientLoader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // Simulate a delay for the loader
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return isLoading ? (
    // Loader is visible while isLoading is true
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Loader />
    </div>
  ) : (
    // Main content after the loader disappears
    <>{children}</>
  );
};

export default ClientLoader;
