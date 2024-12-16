"use client"; // Mark this as a client component

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import product1 from "../../public/pi1.png"; // Example product image
import product2 from "../../public/pi2.png"; // Example product image
import product3 from "../../public/pi3.png"; // Example product image

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: 50,
      image: product1,
      description: "A comfortable library stool chair for your study space.",
    },
    {
      id: 2,
      name: "Sofa",
      price: 75,
      image: product2,
      description: "A cozy sofa for your living room with modern design.",
    },
    {
      id: 3,
      name: "Plastic Chair",
      price: 100,
      image: product3,
      description: "A durable plastic chair for all kinds of uses.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#029FAE] mb-4">
          Welcome to Our Shop
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Explore our collection of quality furniture. From comfortable chairs to stylish sofas, we have everything to suit your needs.
        </p>
      </div>

      {/* Filters Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <Button className="bg-[#029FAE] text-white py-2 px-4 rounded-md">All Products</Button>
          <Button className="bg-[#029FAE] text-white py-2 px-4 rounded-md">New Arrivals</Button>
          <Button className="bg-[#029FAE] text-white py-2 px-4 rounded-md">Sale</Button>
        </div>
        <input
          type="text"
          placeholder="Search products"
          className="w-1/3 sm:w-1/4 px-4 py-2 border rounded-md"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-6" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-[#029FAE]">${product.price}</span>
              <Button className="bg-[#029FAE] text-white py-2 px-4 rounded-md flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-8">
        <Button className="bg-[#029FAE] text-white py-2 px-6 rounded-md">Load More</Button>
      </div>
    </div>
  );
}
