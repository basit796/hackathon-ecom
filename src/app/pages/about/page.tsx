"use client"; // Mark this as a client component

import Image from "next/image";
import companyLogo from "../../public/Logo.png"; // Replace with your logo image
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#029FAE] mb-4">
          About Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          We are a company dedicated to providing high-quality products and
          exceptional customer service. Our mission is to make online shopping
          a seamless and enjoyable experience.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl">
          Our mission is to empower customers with a seamless shopping
          experience, offering top-notch products with a commitment to quality
          and satisfaction. We aim to provide a curated selection of products
          that cater to various needs and preferences, all while maintaining
          transparency and trust.
        </p>
      </div>

      {/* Company History Section */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Company History
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#029FAE] text-white flex items-center justify-center rounded-full">
                <span className="text-xl">2015</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Founded in 2015</h3>
                <p className="text-gray-600">
                  Our company was founded with a simple goal: to offer the best
                  products at competitive prices.
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#029FAE] text-white flex items-center justify-center rounded-full">
                <span className="text-xl">2018</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Expanded Product Range</h3>
                <p className="text-gray-600">
                  We expanded our product range to include a variety of home
                  essentials, gaining recognition for quality and reliability.
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#029FAE] text-white flex items-center justify-center rounded-full">
                <span className="text-xl">2022</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Global Expansion</h3>
                <p className="text-gray-600">
                  In 2022, we expanded our services globally, reaching new
                  markets and customers around the world.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Team Member 1 */}
          <div className="w-48 h-64 bg-white p-4 rounded-lg shadow-md text-center">
            <Image src={companyLogo} alt="Team Member" width={100} height={100} className="mx-auto rounded-full" />
            <h3 className="mt-4 text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="w-48 h-64 bg-white p-4 rounded-lg shadow-md text-center">
            <Image src={companyLogo} alt="Team Member" width={100} height={100} className="mx-auto rounded-full" />
            <h3 className="mt-4 text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Product Manager</p>
          </div>
          {/* Team Member 3 */}
          <div className="w-48 h-64 bg-white p-4 rounded-lg shadow-md text-center">
            <Image src={companyLogo} alt="Team Member" width={100} height={100} className="mx-auto rounded-full" />
            <h3 className="mt-4 text-lg font-semibold">Alice Johnson</h3>
            <p className="text-gray-600">Marketing Lead</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Explore our range of high-quality products and become part of our
          growing family. We look forward to serving you!
        </p>
        <Button className="bg-[#029FAE] text-white flex items-center justify-center mx-auto p-3 rounded-md">
          <ShoppingCart className="w-5 h-5 mr-2" /> Shop Now
        </Button>
      </div>
    </div>
  );
}
