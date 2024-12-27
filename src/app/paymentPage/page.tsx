import React from "react";
import Image from "next/image";
import Link from 'next/link';  


export default function Page() {
  return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
      {/* Billing Info */}
      <div className="w-full lg:w-2/3 space-y-4">
        <div className="w-full lg:w-[852px] h-auto lg:h-[336px] bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Billing Info</h2>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Please enter your billing info</p>
              <p>Step 1 of 4</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-full lg:w-[46%] flex flex-col gap-2">
              <label className="font-bold" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border"
              />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-2">
              <label className="font-bold" htmlFor="num">Phone Number</label>
              <input
                id="num"
                type="text"
                placeholder="Phone number"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="w-full lg:w-[46%] flex flex-col gap-2">
              <label className="font-bold" htmlFor="add">Address</label>
              <input
                id="add"
                type="text"
                placeholder="Address"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border"
              />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-2">
              <label className="font-bold" htmlFor="city">Town/City</label>
              <input
                id="city"
                type="text"
                placeholder="Town or city"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border"
              />
            </div>
          </div>
        </div>

        {/* Rental Info */}
        <div className="w-full lg:w-[852px] h-auto lg:h-[664px] bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Rental Info</h2>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Please select your rental date</p>
              <p>Step 2 of 4</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image src="/Pick - Up 1.png" alt="Pick Up" width={92} height={20} />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="w-full lg:w-[46%] flex flex-col gap-2">
                <label className="font-bold" htmlFor="loc">Locations</label>
                <select id="loc" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border text-gray-600">
                  <option value="">Town or city</option>
                </select>
              </div>
              <div className="w-full lg:w-[50%] flex flex-col gap-2">
                <label className="font-bold" htmlFor="date">Date</label>
                <select id="date" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border text-gray-600">
                  <option value="">Select your date</option>
                </select>
              </div>
              <div className="w-full lg:w-[50%] flex flex-col gap-2">
                <label className="font-bold" htmlFor="date">Time</label>
                <select id="date" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border text-gray-600">
                  <option value="">Select your time</option>
                </select>
                </div>
            </div>
            {/* Drop-Off Section */}
            <div className="mt-4">
              <Image src="/Drop - Off 1.png" alt="Drop Off" width={104} height={20} />
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="w-full lg:w-[46%] flex flex-col gap-2">
                <label className="font-bold" htmlFor="dropLoc">Locations</label>
                <select id="dropLoc" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border text-gray-600">
                  <option value="">Select your city</option>
                </select>
              </div>
              <div className="w-full lg:w-[50%] flex flex-col gap-2">
                <label className="font-bold" htmlFor="dropDate">Date</label>
                <select id="dropDate" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border text-gray-600">
                  <option value="">Select your date</option>
                </select>
              </div>
              <div className="w-full lg:w-[50%] flex flex-col gap-2">
                <label className="font-bold" htmlFor="date">Time</label>
                <select id="date" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border text-gray-600">
                  <option value="">Select your time</option>
                </select>
                </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="w-full lg:w-[852px] h-auto lg:h-[596px] bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Payment Method</h2>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Please enter your payment method</p>
              <p>Step 3 of 4</p>
            </div>
          </div>
          <div className="flex justify-between">
            <Image src="/Credit Card (1).png" alt="Credit Card" width={92} height={20} />
            <Image src="/Visa.png" alt="Visa" width={92} height={20} />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="w-full lg:w-[46%] flex flex-col gap-2">
              <label className="font-bold" htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                type="text"
                placeholder="Card number"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border"
              />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-2">
              <label className="font-bold" htmlFor="expiry">Expiration Date</label>
              <input
                id="expiry"
                type="text"
                placeholder="DD/MM/YY"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="w-full lg:w-[46%] flex flex-col gap-2">
              <label className="font-bold" htmlFor="cvv">Card Holder</label>
              <input
                id="cardholder"
                type="text"
                placeholder="Card holder"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border"
              />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-2">
              <label className="font-bold" htmlFor="cvv">CVC</label>
              <input
                id="cvv"
                type="text"
                placeholder="CVC"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl border"
              />
            </div>
            
           
            <div className="flex flex-col gap-4 w-full lg:w-[98%]">
            {/* PayPal */}
            <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">PayPal</span>
              </div>
              <Image src={"/PayPal.png"} alt="PayPal" width={100} height={24} />
            </label>

            {/* Credit Card */}
            <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">Bitcoin</span>
              </div>
              <Image
                src={"/Bitcoin.png"}
                alt="Bitcoin"
                width={94}
                height={20}
              />
            </label>
          </div>

          </div>
        </div>

        {/* Confirmation */}
        <div className="w-full lg:w-[852px] h-auto lg:h-[484px] bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Confirmation</h2>
            <div className="flex justify-between text-sm text-gray-600 text-lg">
              <p>We are getting to the end. Just a few clicks and your rental is
              ready!</p>
              <p>Step 4 of 4</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {/* PayPal */}
              <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <input
                  type="checkbox"
                  name="payment"
                  value="paypal"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </span>
              </label>
              {/* Credit Card */}
              <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <input
                  type="checkbox"
                  name="payment"
                  value="credit-card"
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            
            <Link href={"/userPage"}>
              <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px] mt-6">
                Rent Now
              </button>
            </Link>

            <div>
              <Image
                src={"/ic-security-safety (1).png"}
                alt="Safe Data"
                width={32}
                height={32}
                className="mb-3 mt-2"
              />
              <p className="text-lg font-bold">All your data are safe</p>
              <h1 className="text-sm text-muted-foreground text-gray-600 mt-2">
                We are using the most advanced security to provide you the best
                experience ever.
              </h1>
            </div>
              </div>
              </div>
             
             
        </div>
      </div>

      <div className="rental-summary w-full lg:w-1/3">
    <Image
      src="/Rental Summary.png"
      alt="Rental Summary"
      width={492}
      height={560}
      className="w-full h-auto"
    />
  </div>
    </div>
  );
}