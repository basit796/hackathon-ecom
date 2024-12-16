"use client"; // Mark as a client component

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  // Sample cartItems data
  const cartItems = [
    { id: 1, name: "Library Stool Chair", price: 50, quantity: 2 },
    { id: 2, name: "Office Desk", price: 120, quantity: 1 },
  ];

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Simulate order placement
    setIsOrderPlaced(true);
    console.log("Order placed!", cartItems);
  };

  const totalPrice = cartItems.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>

      {isOrderPlaced ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-700">Thank you for your purchase.</p>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-2"
            >
              <span className="font-medium">{item.name}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <Button
            onClick={handlePlaceOrder}
            className="bg-[#029FAE] w-full mt-6"
          >
            Place Order
          </Button>
        </div>
      )}
    </div>
  );
}

