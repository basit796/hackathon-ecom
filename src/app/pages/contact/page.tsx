"use client"; // Mark this as a client component

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#029FAE] mb-4">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          We're here to assist you! For any inquiries, feel free to get in touch with us. We're happy to help!
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-1/3">
          <h2 className="text-2xl font-semibold text-center mb-6">Get in Touch</h2>
          <div className="flex items-center mb-4">
            <Phone className="w-6 h-6 text-[#029FAE] mr-4" />
            <p className="text-lg text-gray-700">(808) 555-0111</p>
          </div>
          <div className="flex items-center mb-4">
            <MapPin className="w-6 h-6 text-[#029FAE] mr-4" />
            <p className="text-lg text-gray-700">123 E-Commerce St, Hometown</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-1/3">
          <h2 className="text-2xl font-semibold text-center mb-6">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-[#029FAE]">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#029FAE]">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#029FAE]">
              <Facebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Send Us a Message</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={4}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
            />
          </div>
          <Button
            type="submit"
            className="bg-[#029FAE] text-white w-full py-3 rounded-md"
          >
            Send Message
          </Button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Find Us</h2>
        <div className="bg-gray-300 p-4 rounded-lg shadow-md">
          {/* Replace with your Google Map Embed link */}
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
