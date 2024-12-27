"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full flex">
      {/* Sidebar */}
      <div className="first hidden sm:flex w-[20%]">
        <Sidebar />
      </div>
     
      
     
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
  <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between">
    
    {/* Pick Up Image */}
    <Image
      src={"/Pick - Up.png"}
      alt="Pick Up"
      width={270} 
      height={132}  
      className="w-[200px] sm:w-[270px] lg:w-[582px] mr-[10px]" 
    />
    
    {/* Switch Button */}
    <Link href={"#"} className="flex justify-center items-center">
      <Image
        src={"/Switch.png"}
        alt="Switch"
        width={60}
        height={60}
        className="w-[80px] sm:w-[100px]" 
      />
    </Link>
    
    {/* Drop Off Image */}
    <Image
      src={"/Drop - Off.png"}
      alt="Drop Off"
      width={270}  
      height={132}  
      className="w-[200px] sm:w-[270px] lg:w-[582px] ml-[10px]" 
    />
  </section>

        {/* Popular Cars Section */}
        <section className="popular w-full flex flex-col gap-4">
          {/* Grid container with padding */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Car Card 1 (Koenigsegg) */}
              <div className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
                <div className="w-full flex flex-col items-start gap-1 relative">
                  <p className="text-[#1A202C] font-semibold text-2xl">Koenigsegg</p>
                  <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">Sport</p>
                  <Image src="/heart.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
                </div>
                <div className="w-full flex flex-col items-center justify-center flex-grow">
                  <Image src="/Car 1.png" alt="Car" width={220} height={68} className="self-center" />
                </div>
                <Image src="/Spec1.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
                <div className="w-full flex items-center justify-between mt-4">
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    $99.00/<span className="text-sm font-medium text-gray-500">day</span>
                  </p>
                  <Link href="/detailPage">
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </Link>
                </div>
              </div>

              {/* Car Card 2 (Nissan GT-R) */}
              <div className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
                <div className="w-full flex flex-col items-start gap-1 relative">
                  <p className="text-[#1A202C] font-semibold text-2xl">Nissan GT-R</p>
                  <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">Sport</p>
                  <Image src="/heart 2.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
                </div>
                <div className="w-full flex flex-col items-center justify-center flex-grow">
                  <Image src="/Car 2.png" alt="Car" width={220} height={68} className="self-center" />
                </div>
                <Image src="/Spec 2.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
                <div className="w-full flex items-center justify-between mt-4">
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    $80.00/<span className="text-sm font-medium text-gray-500">day</span>
                    <br />
                    <span className="text-sm font-medium text-gray-500 line-through">$100.00</span>
                  </p>
                  <Link href="/detailPage">
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </Link>
                </div>
              </div>

              {/* Car Card 3 (Rolls-Royce) */}
              <div className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
                <div className="w-full flex flex-col items-start gap-1 relative">
                  <p className="text-[#1A202C] font-semibold text-2xl">Rolls-Royce</p>
                  <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">Sedan</p>
                  <Image src="/heart.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
                </div>
                <div className="w-full flex flex-col items-center justify-center flex-grow">
                  <Image src="/Car 3.png" alt="Car" width={220} height={68} className="self-center" />
                </div>
                <Image src="/Spec 3.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
                <div className="w-full flex items-center justify-between mt-4">
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    $96.00/<span className="text-sm font-medium text-gray-500">day</span>
                  </p>
                  <Link href="/detailPage">
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </Link>
                </div>
              </div>

              {/* Car Card 4 (All New Rush) */}
              <div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
                <div className="w-full flex flex-col items-start gap-1 relative">
                  <p className="text-[#1A202C] font-semibold text-2xl">All New Rush</p>
                  <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">SUV</p>
                  <Image src="/heart 2.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
                </div>
                <div className="w-full flex flex-col items-center justify-center flex-grow">
                  <Image src="/Car 5.png" alt="Car" width={220} height={68} className="self-center" />
                </div>
                <Image src="/Spec 5.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
                <div className="w-full flex items-center justify-between mt-4">
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    $72.00/<span className="text-sm font-medium text-gray-500">day</span>
                  </p>
                  <Link href="/detailPage">
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </Link>
                </div>
              </div>

              {/* Car Card 5 (CR-V) */}
              <div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
                <div className="w-full flex flex-col items-start gap-1 relative">
                  <p className="text-[#1A202C] font-semibold text-2xl">CR-V</p>
                  <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">SUV</p>
                  <Image src="/heart.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
                </div>
                <div className="w-full flex flex-col items-center justify-center flex-grow">
                  <Image src="/Car 6.png" alt="Car" width={220} height={68} className="self-center" />
                </div>
                <Image src="/Spec 6.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
                <div className="w-full flex items-center justify-between mt-4">
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    $70.00/<span className="text-sm font-medium text-gray-500">day</span>
                  </p>
                  <Link href="/detailPage">
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </Link>
                </div>
              </div>

              {/* Car Card 7 (All New Terious) */}
              <div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
                <div className="w-full flex flex-col items-start gap-1 relative">
                  <p className="text-[#1A202C] font-semibold text-2xl">All New Terious</p>
                  <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">SUV</p>
                  <Image src="/heart 2.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
                </div>
                <div className="w-full flex flex-col items-center justify-center flex-grow">
                  <Image src="/Car 7.png" alt="Car" width={220} height={68} className="self-center" />
                </div>
                <Image src="/Spec 7.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
                <div className="w-full flex items-center justify-between mt-4">
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    $74.00/<span className="text-sm font-medium text-gray-500">day</span>
                  </p>
                  <Link href="/detailPage">
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </Link>
                </div>
              </div>

               {/* Car Card 9 -  MG ZX Exclusive */}
<div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
    <div className="w-full flex flex-col items-start gap-1 relative">
      <p className="text-[#1A202C] font-semibold text-2xl"> MG ZX Exclusive </p>
      <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">Hatchback</p>
      <Image src="/heart.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
    </div>
    <div className="w-full flex flex-col items-center justify-center flex-grow">
      <Image src="/Car 9.png" alt="Car" width={220} height={68} className="self-center" />
    </div>
    <Image src="/Spec 3.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
    <div className="w-full flex items-center justify-between mt-4">
      <p className="text-2xl font-semibold leading-none tracking-tight">$76.00/<span className="text-sm font-medium text-gray-500">day</span><br />
      <span className="text-sm font-medium text-gray-500 line-through">$100.00</span></p>
      <Link href="/detailPage">
        <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
      </Link>
    </div>
  </div>

  {/* Car Card 10 -  NEW MG ZS */}
<div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
    <div className="w-full flex flex-col items-start gap-1 relative">
      <p className="text-[#1A202C] font-semibold text-2xl"> NEW MG ZS</p>
      <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">SUV</p>
      <Image src="/heart 2.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
    </div>
    <div className="w-full flex flex-col items-center justify-center flex-grow">
      <Image src="/Car 10.png" alt="Car" width={220} height={68} className="self-center" />
    </div>
    <Image src="/Spec 6.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
    <div className="w-full flex items-center justify-between mt-4">
      <p className="text-2xl font-semibold leading-none tracking-tight">$80.00/<span className="text-sm font-medium text-gray-500">day</span></p>
 
      <Link href="/detailPage">
        <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
      </Link>
    </div>
  </div>

{/* Car Card 11 - MG ZX Excite */}
<div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
    <div className="w-full flex flex-col items-start gap-1 relative">
      <p className="text-[#1A202C] font-semibold text-2xl"> MG ZX Excite</p>
      <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">Hatchback</p>
      <Image src="/heart.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
    </div>
    <div className="w-full flex flex-col items-center justify-center flex-grow">
      <Image src="/Car 11.png" alt="Car" width={220} height={68} className="self-center" />
    </div>
    <Image src="/Spec 8.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
    <div className="w-full flex items-center justify-between mt-4">
      <p className="text-2xl font-semibold leading-none tracking-tight">$74.00/<span className="text-sm font-medium text-gray-500">day</span></p>
 
      <Link href="/detailPage">
        <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
      </Link>
    </div>
  </div>

            </div>
          </div>
        </section>

        
        <section className="button w-full text-center">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            <h1 className="text-gray-500 text-lg sm:text-xl absolute right-0 mr-2">
             120 Car
             </h1>
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
          
        </section>
      </div>
    </div>
  );
}
