"use client";  // Add this directive to mark this as a client component

import { useParams } from "next/navigation";
import Image from "next/image";
import productImage from "../../public/Featured Products (1).png"; // Adjust the path if necessary
import pi1 from "../../public/pi1.png"
import pi2 from "../../public/pi2.png"
import pi3 from "../../public/pi3.png"
import pi4 from "../../public/pi4.png"

const productData: Record<string, { name: string; description: string; price: string; id: number ,pic:any}> = {
  "1": { pic:<div><Image src={pi1} alt=""/></div>, name: "Product 1", description: "This is Product 1.", price: "$50", id: 1 },
  "2": { 
    pic:<div><Image src={pi2} alt=""/></div>,name: "Product 2", description: "This is Product 2.", price: "$75", id: 2 },
  "3": { pic:<div><Image src={pi3} alt=""/></div>, name: "Product 3", description: "This is Product 3.", price: "$100", id: 3 },
};

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;

  // Type Guard to ensure 'id' is a string
  if (typeof id !== "string") {
    return <div className=""><div><h1 className="text-center mt-10">Invalid Product</h1>;</div></div>
  }

  const product = productData[id];

  if (!product) {
    return <h1 className="text-center mt-10">Product Not Found</h1>;
  }

  return (
    <div className="flex justify-center "><div className="min-h-screen p-8 bg-gray-100 w-[60%]">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <h1>{product.pic}</h1>
      <p className="text-gray-700 mt-4">{product.description}</p>
      <p className="text-lg font-semibold mt-2">{product.price}</p>
    </div></div>
  );
}