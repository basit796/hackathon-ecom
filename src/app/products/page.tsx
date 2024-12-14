import Link from "next/link";
import Image from "next/image"
import pi1 from "../public/pi1.png"
import pi2 from "../public/pi2.png"
import pi3 from "../public/pi3.png"
import pi4 from "../public/pi4.png"
import featureproduct2 from "../public/Featured Products (2).png"
import featureproduct3 from "../public/Featured Products (3).png"
const products = [
  { id: 1, pic:<div><Image src={pi1} alt="loading"/></div>, name: "Library Stool Chair", price: "$50" },
  { id: 2, pic:<div><Image src={pi2} alt="loading"/></div> ,name: "Sofa", price: "$75" },
  { id: 3, pic:<div><Image src={pi3} alt="loading"/></div> ,name: "Plastic Chair", price: "$100" },
  { id: 4, pic:<div><Image src={pi4} alt="loading"/></div> ,name: "Dressing Chair", price: "$120" },
];

export default function Products() {
  return (
    <div className="flex justify-center "><div className="h-auto bg-gray-10 p-8 w-[60%] ">
      <h1 className="text-3xl font-bold mb-6"> All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow rounded hover:shadow-lg "
          ><h1 className="w-full">{product.pic}</h1>
            <h2 className="text-[13px]">{product.name}</h2>
            <p className="text-gray-600 text-[13px]">{product.price}</p>
            <Link href={`/products/${product.id}`} className="">
              <div className="text-blue-500 hover:underline text-[13px]">View Details</div>
            </Link>
          </div>
        ))}
      </div><div className="w-[1050px] -ml-40">
      <Image src={featureproduct3} alt="loading"></Image><Image src={featureproduct2} alt="loading" className=""></Image></div>
    </div></div>
  );
}
