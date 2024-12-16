import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ProductImage from "./public/chair.png";
import companylogo from "./public/Company Logo.png";
import featuredproduct from "./public/Featured Products.png";
import topcatagories1 from "./public/Category1.png";
import topcatagories2 from "./public/Category2.png";
import topcatagories3 from "./public/Category3.png";
import hotcatogory from "./public/hot-category.png"
import ourproduct from "./public/Our Products.png"
import Link from "next/link";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center   overflow-hiden ">
        <div className=" md:h-[500px] w-[60%] mt-[2px] bg-[#f0f2f3] md:flex overflow-hiden rounded-3xl items-center justify-center">
          {" "}
          <div className="md:text-left text-center">
            <h1 className="sm:text-[14px] text-[80%] text-[#272343]">
              Welcome to charity
            </h1>
            <h1 className="md:text-[35px] font-semibold text-[#272343] md:w-[300px] w-[70%] text-[150%] text-balance text-right md:text-left  ">
              Best Furniture Collection for your interior.
            </h1>
            <div className="  flex justify-center md:justify-start">
              <Button className="bg-[#029FAE]">
                Shop Now <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={ProductImage}
              alt="logo"
              className=" md:h-[400px] w-[50%] mt-3"
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex   justify-self-center w-[60%]">
        <Image alt="loading" src={companylogo} className=" "></Image>
      </div>
      <div className="">
        <Link href="/products" className=" flex justify-center "><Image
          src={featuredproduct}
          alt="loading"
          className="w-[88%]   "
        ></Image></Link>
      </div>
      <div className="justify-center flex mt-20 ">
        <div className="w-[61%]">
          <h1 className="text-[21px] font-bold text-[#272343]">
            Top Categories
          </h1>
          <br />
          <div className="flex  gap-4 w-[32%]">
            <Image src={topcatagories1} alt="loading"></Image>
            <Image src={topcatagories2} alt="loading"></Image>
            <Image src={topcatagories3} alt="loading"></Image>
          </div>
        </div>
      </div><div className="mt-20 flex justify-center "><div className=" w-[60%]"><Image src={hotcatogory} alt="loading"></Image></div></div><div className=" flex justify-center "><div className=" w-[60%]"><Image src={ourproduct} alt="loading"></Image></div></div>
    </div>
  );
}
