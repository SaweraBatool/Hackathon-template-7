"use client";

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      {/* Section 1 - Ads with buttons */}
      <section id="block1" className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center">
        {/* Ad 1 */}
        <div className="relative flex flex-col items-center w-full sm:w-auto">
          <Image
            src="/Ads 1.png"
            alt="Ad 1"
            width={600}
            height={360}
            className="w-full max-w-[600px] h-auto object-cover"
          />
          <button className="absolute bottom-20 left-2 m-3 bg-blue-600 hover:bg-blue-500 text-white font-normal py-3 px-4 rounded hidden lg:block">
            Rental Car
          </button>
        </div>

        {/* Ad 2 */}
        <div className="relative flex flex-col items-center w-full sm:w-auto">
          <Image
            src="/Ads 2.png"
            alt="Ad 2"
            width={600}
            height={360}
            className="w-full max-w-[600px] h-auto object-cover"
          />
          <button className="absolute bottom-20 left-2 m-3 bg-blue-400 hover:bg-blue-600 text-white font-normal py-3 px-4 rounded hidden lg:block">
            Rental Car
          </button>
        </div>
      </section>

      {/* Section 2 - Pick-up and Drop-off */}
      <section id="block2" className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image
          src="/Pick - Up.png"
          alt="Pick Up"
          width={500}
          height={132}
          className="max-w-full"
        />
        {/* Switch */}
       
          <img src="/Switch.png" alt="Switch" className="w-[120px] h-[120px] object-contain" />
       
        <Image
          src="/Drop - Off.png"
          alt="Drop Off"
          width={500}
          height={132}
          className="max-w-full"
        />
      </section>

      {/* Section 3 - Popular Cars */}
      <section id="block3" className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Cars</h1>
          <Link href="/categoryPage">
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">View All</h1>
          </Link>
        </div>

        {/* Car Cards */}
<div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

          {/* Car Card 4 (Nissan GT-R) */}
          <div className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
            <div className="w-full flex flex-col items-start gap-1 relative">
              <p className="text-[#1A202C] font-semibold text-2xl">Nissan GT-R</p>
              <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">Sport</p>
              <Image src="/heart 2.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
            </div>
            <div className="w-full flex flex-col items-center justify-center flex-grow">
              <Image src="/Car 4.png" alt="Car" width={220} height={68} className="self-center" />
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
        </div>
      </section>

      {/* Section 4 - Recommended Cars */}
      <section id="block4" className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Car Card 5 - All New Rush */}
          <div className="w-full max-w-[304px] mx-auto h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
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

           {/* Car Card 6 - CR - V */}
  <div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
    <div className="w-full flex flex-col items-start gap-1 relative">
      <p className="text-[#1A202C] font-semibold text-2xl">CR - V</p>
      <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">SUV</p>
      <Image src="/heart.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
    </div>
    <div className="w-full flex flex-col items-center justify-center flex-grow">
      <Image src="/Car 6.png" alt="Car" width={220} height={68} className="self-center" />
    </div>
    <Image src="/Spec 6.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
    <div className="w-full flex items-center justify-between mt-4">
      <p className="text-2xl font-semibold leading-none tracking-tight">$80.00/<span className="text-sm font-medium text-gray-500">day</span></p>
      <Link href="/detailPage">
        <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
      </Link>
    </div>
  </div>

           {/* Car Card 7 - All New Terious  */}
           <div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
    <div className="w-full flex flex-col items-start gap-1 relative">
      <p className="text-[#1A202C] font-semibold text-2xl">All New Terious </p>
      <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">SUV</p>
      <Image src="/heart 2.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
    </div>
    <div className="w-full flex flex-col items-center justify-center flex-grow">
      <Image src="/Car 7.png" alt="Car" width={220} height={68} className="self-center" />
    </div>
    <Image src="/Spec 7.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
    <div className="w-full flex items-center justify-between mt-4">
      <p className="text-2xl font-semibold leading-none tracking-tight">$74.00/<span className="text-sm font-medium text-gray-500">day</span></p>
      <Link href="/detailPage">
        <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
      </Link>
    </div>
  </div>

{/* Car Card 8 - CR - V  */}
<div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
    <div className="w-full flex flex-col items-start gap-1 relative">
      <p className="text-[#1A202C] font-semibold text-2xl">CR - V </p>
      <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">SUV</p>
      <Image src="/heart.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
    </div>
    <div className="w-full flex flex-col items-center justify-center flex-grow">
      <Image src="/Car 8.png" alt="Car" width={220} height={68} className="self-center" />
    </div>
    <Image src="/Spec 6.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
    <div className="w-full flex items-center justify-between mt-4">
      <p className="text-2xl font-semibold leading-none tracking-tight">$80.00/<span className="text-sm font-medium text-gray-500">day</span></p>
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

  {/* Car Card 12 -  New MG ZS */}
<div className="w-full max-w-[304px] h-[388px] flex flex-col justify-between border rounded-md shadow-md p-4 bg-[#FFFFFF]">
    <div className="w-full flex flex-col items-start gap-1 relative">
      <p className="text-[#1A202C] font-semibold text-2xl">  New MG ZS</p>
      <p className="text-[#1A202C] font-medium text-sm text-[#90A3BF]">SUV</p>
      <Image src="/heart 2.png" alt="Favorite" width={20} height={20} className="absolute top-0 right-0" />
    </div>
    <div className="w-full flex flex-col items-center justify-center flex-grow">
      <Image src="/Car 12.png" alt="Car" width={220} height={68} className="self-center" />
    </div>
    <Image src="/Spec 6.png" alt="Specifications" width={256} height={24} className="self-center mt-4" />
    <div className="w-full flex items-center justify-between mt-4">
      <p className="text-2xl font-semibold leading-none tracking-tight">$80.00/<span className="text-sm font-medium text-gray-500">day</span></p>
 
      <Link href="/detailPage">
        <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
      </Link>
    </div>
  </div> 
        </div>
      </section>

      <section id="block5" className="flex justify-center items-center w-full mt-9 relative">
  <Link href={"/categoryPage"}>
    <button className="bg-[#3563e9] w-[156px] h-[44px] text-white rounded-md hover:bg-blue-500">
      Show More Cars
    </button>
  </Link>
  <h1 className="text-gray-500 text-lg sm:text-xl absolute right-0 mr-2">
    120 Car
  </h1>
</section>

    </div>
  );
}
