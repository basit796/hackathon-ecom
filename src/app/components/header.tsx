import {
  Armchair,
  Check,
  ChevronDown,
  Circle,
  CircleAlert,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import mainlogo from "../public/Logo.png"
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="overflow-hidden">
      <div className="bg-[#272343] justify-center md:justify-between flex h-[45px] w-screen px-[300px] py-[14px] text-white text-[13px] ">
        <div className="flex gap-3 ">
          <Check className="opacity-[70%] size-[17px]" />
          <h1 className="w-[225px] h-[16px] gap-[8px] opacity-[70%]  ">
            Free Shipping On All Orders Over $50
          </h1>
        </div>
        <div className="flex gap-[24px] opacity-[70%] items-center">
          <li className="flex gap-1 ml-16 items-center">
            <h1>Eng</h1>
            <ChevronDown className="size-[15px] flex " />
          </li>
          <h1>Faqs</h1>
          <li className="flex gap-1">
            <CircleAlert className="size-[16px]" />
            <h1>Need Help</h1>
          </li>
        </div>
      </div>
      <div className="w-full h-[84px] py-[20px] px-[300px] bg-[#F0F2F3] flex  justify-center md:justify-between items-center">
        <div className="items-center">
          <Image src={mainlogo} alt="loading"/>
        </div>
        <Link href="/products/cart"> <div className="flex gap-[12px] bg-white rounded-lg h-[44px] w-[120px] justify-center items-center text-[#272343]">
          <ShoppingCart className="size-[22px]" />
          <h1 className=" font-bold">Cart</h1>
          <Circle className=""></Circle>
        </div></Link>
      </div>
      <div className="bg-white w-full h-[74px]   px-[22%] flex justify-between items-center shadow-lg">
      <div className="flex space-x-8 text-[14px]">
        <Link href="/">
          <div className="text-[#272343] cursor-pointer hover:underline">Home</div>
        </Link>
        <Link href="/pages/shop">
          <div className="text-[#272343] cursor-pointer hover:underline">Shop</div>
        </Link>
        <Link href="/products">
          <div className="text-[#272343] cursor-pointer hover:underline">Products</div>
        </Link>
        <Link href="/pages/about">
          <div className="text-[#272343] cursor-pointer hover:underline">About</div>
        </Link>
        <Link href="/pages/contact">
          <div className="text-[#272343] cursor-pointer hover:underline">Contact</div>
        </Link>
      </div>
        <div className=" gap-1 hidden lg:flex "><Link href="/pages/contact"><h1 className="text-[#636270] text-[13px]">Contact: (808) 555-0111</h1></Link></div>
      </div>
      <hr/>
    </div>
  );
}
