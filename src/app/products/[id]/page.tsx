// "use client"; // Add this directive to mark this as a client component

// import { useParams } from "next/navigation";
// import Image from "next/image";
// import productImage from "../../public/Featured Products (1).png"; // Adjust the path if necessary
// import pi1 from "../../public/pi1.png";
// import pi2 from "../../public/pi2.png";
// import pi3 from "../../public/pi3.png";
// import pi4 from "../../public/pi4.png";
// import { Button } from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import Link from "next/link";

// const productData: Record<
//   string,
//   { name: string; description: string; price: string; id: number; pic: any }
// > = {
//   "1": {
//     pic: (
//       <div>
//         <Image src={pi1} alt="" />
//       </div>
//     ),
//     name: "Product 1",
//     description: "This is Product 1.",
//     price: "$50",
//     id: 1,
//   },
//   "2": {
//     pic: (
//       <div>
//         <Image src={pi2} alt="" />
//       </div>
//     ),
//     name: "Product 2",
//     description: "This is Product 2.",
//     price: "$75",
//     id: 2,
//   },
//   "3": {
//     pic: (
//       <div>
//         <Image src={pi3} alt="" />
//       </div>
//     ),
//     name: "Product 3",
//     description: "This is Product 3.",
//     price: "$100",
//     id: 3,
//   },
//   "4": {
//     pic: (
//       <div>
//         <Image src={pi4} alt="" />
//       </div>
//     ),
//     name: "Dressing Chair",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam.",
//     price: "$120",
//     id: 4,
//   },
// };

// export default function ProductDetails() {
//   const params = useParams();
//   const id = params.id;

//   // Type Guard to ensure 'id' is a string
//   if (typeof id !== "string") {
//     return (
//       <div className="">
//         <div>
//           <h1 className="text-center mt-10">Invalid Product</h1>;
//         </div>
//       </div>
//     );
//   }

//   const product = productData[id];

//   if (!product) {
//     return <h1 className="text-center mt-10">Product Not Found</h1>;
//   }

//   return (
//     <div className="flex justify-center ">
//       <div className="min-h-screen p-8 bg-gray-100 w-[60%]">
//         <div className="flex">
//           <h1 className="w-[110%]">{product.pic}</h1>
//           <div>
//             <h1 className="text-4xl font-bold">{product.name}</h1>
//             <p className="  mt-5 mb-4 bg-[#029FAE] w-[20%] justify-center flex rounded-3xl text-white items-center">
//               {product.price}
//             </p><hr/>
//             <p className="text-gray-700 mt-4 w-[70%] text-pretty">
//               {product.description}
//             </p>
//             <Link href=""><Button className="bg-[#029FAE] mt-6"> Add to cart <ShoppingCart /></Button></Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"; // Add this directive to mark this as a client component

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import productImage from "../../public/Featured Products (1).png"; // Adjust the path if necessary
import pi1 from "../../public/pi1.png";
import pi2 from "../../public/pi2.png";
import pi3 from "../../public/pi3.png";
import pi4 from "../../public/pi4.png";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import Link from "next/link";

const productData: Record<
  string,
  { name: string; description: string; price: string; id: number; pic: any }
> = {
  "1": {
    pic: (
      <div className="w-full max-w-xs mx-auto">
        <Image src={pi1} alt="Library Stool Chair" />
      </div>
    ),
    name: "Library Stool Chair",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam.",
    price: "$50",
    id: 1,
  },
  "2": {
    pic: (
      <div className="w-full max-w-xs mx-auto">
        <Image src={pi2} alt="Sofa" />
      </div>
    ),
    name: "Sofa",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam.",
    price: "$75",
    id: 2,
  },
  "3": {
    pic: (
      <div className="w-full max-w-xs mx-auto">
        <Image src={pi3} alt="Plastic Chair" />
      </div>
    ),
    name: "Plastic Chair",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam.",
    price: "$100",
    id: 3,
  },
  "4": {
    pic: (
      <div className="w-full max-w-xs mx-auto">
        <Image src={pi4} alt="Dressing Chair" />
      </div>
    ),
    name: "Dressing Chair",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam.",
    price: "$120",
    id: 4,
  },
};

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;

  // State to manage Add to Cart button behavior
  const [isAdded, setIsAdded] = useState(false);

  // Type Guard to ensure 'id' is a string
  if (typeof id !== "string") {
    return (
      <div className="text-center mt-10">
        <h1>Invalid Product</h1>
      </div>
    );
  }

  const product = productData[id];

  if (!product) {
    return <h1 className="text-center mt-10">Product Not Found</h1>;
  }

  const handleAddToCart = () => {
    setIsAdded(true);
  };

  return (
    <div className="flex justify-center px-4 sm:px-8 md:px-16 py-8 bg-gray-100">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="w-full">
              {product.pic}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 md:ml-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{product.name}</h1>
            <p className="mt-2 mb-4 text-lg font-semibold text-blue-600">{product.price}</p>
            <hr className="my-4" />
            <p className="text-gray-700 text-base mb-6">{product.description}</p>

            <Button
              onClick={handleAddToCart}
              className="bg-[#029FAE] text-white w-full py-3 flex items-center justify-center gap-2 rounded-xl"
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5" /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
