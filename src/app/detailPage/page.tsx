"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function DetailPage() {
  return (
    <div className="w-full flex">
      <div className="first hidden sm:flex w-[25%]">
        {/* Sidebar Component */}
        <Sidebar />
      </div>
      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        {/* Car Details Section */}
        <section className="w-full flex flex-col md:flex-row gap-5 items-center justify-around">
          <div className="first flex flex-col gap-4 w-full lg:max-w-[470px] lg:max-h-[508px]">
            {/* Main Car Image */}
            <div>
              <Image src={"/View.png"} alt="Car Detail" width={492} height={360} />
            </div>
            <div className="flex items-center justify-between gap-2 lg:gap-2">
              {/* Additional Car Images */}
              <Image src={"/View 1.png"} alt="Car View 1" width={148} height={124} />
              <Image src={"/View 2.png"} alt="Car View 2" width={148} height={124} />
              <Image src={"/View 3.png"} alt="Car View 3" width={148} height={124} />
            </div>
          </div>
          
          {/* Car Detail Section */}
          <div className="flex flex-col w-full lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md relative">
            <div className="w-full h-[360px] lg:h-[508px]">
              <Image
                src={"/Detail Car.png"}
                alt="Detail Car"
                width={492}
                height={508}
                className="w-full h-full rounded-t-xl object-cover"
              />
            </div>

            {/* Rent Now Button (Adjusted to Left and Up) */}
            <Link href={"/paymentPage"}>
            <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap text-white rounded-md absolute bottom-4 right-0 transform translate-x-0 mb-4">
            Rent Now
            </button>

            </Link>

          </div>
        </section>

        {/* Reviews Section */}
        <section className="w-full flex items-center justify-center">
          <Image
            src={"/Reviews.png"}
            alt="Car Reviews"
            width={1010}
            height={452}
            className="hidden md:flex"
          />
          <Image
            src={"/Reviews 1.png"}
            alt="Car Reviews Mobile"
            width={492}
            height={384}
            className="md:hidden"
          />
        </section>

        {/* Related Cars Section */}
        <section className="popular w-full flex flex-col gap-5">
          <div className="first w-full flex items-center justify-between px-10 xl:px-14">
            <h1 className="text-gray-500 text-lg sm:text-xl">Related Cars</h1>
            <Link href={"/categories"}>
              <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
                View All
              </h1>
            </Link>
          </div>
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5">
            {/* Car Card 1 */}
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

            {/* Car Card 2 */}
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

            {/* Car Card 3 */}
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
                  $150.00/<span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href="/detailPage">
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
