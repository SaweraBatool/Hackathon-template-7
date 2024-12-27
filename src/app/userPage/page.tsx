import PickDropForm from "@/components/PickDropForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Image src={"/Nav Bar.png"} alt="navbar" width={286} height={900} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Rental Details */}
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
              <h2 className="font-bold text-lg lg:text-xl mb-3 lg:mb-5">
                Details Rental
              </h2>

              {/* Map Image */}
              <div className="rounded-lg overflow-hidden mb-4">
                <Image
                  src="/Maps.png"
                  alt="Map Placeholder"
                  width={600}
                  height={350}
                  layout="responsive"
                />
              </div>

              {/* Car Details */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 lg:mb-6">
                <Image src="/Look.png" alt="Car" width={132} height={70} />
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-xl lg:text-2xl">
                    Nissan GT - R
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-md">Sport Car</p>
                </div>
              </div>

              <div className="mb-4 lg:mb-6">
                <PickDropForm />
              </div>

              {/* Total Price */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-t pt-4">
                <p className="font-bold text-sm lg:text-lg">
                  Total Rental Price
                  <br />
                  <span className="text-gray-500 text-xs lg:text-sm font-normal">
                    Overall price and includes rental discount
                  </span>
                </p>
                <p className="text-2xl lg:text-4xl font-bold text-black mt-2 sm:mt-0">
                  $80.00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            {/* Top 5 Car Rental */}
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-lg">
              <h2 className="font-semibold text-lg lg:text-xl mb-4 text-center">
                Top 5 Car Rental
              </h2>

              {/* Circular Chart */}
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6">
                <Image
                  src="/Chart.png"
                  alt="Chart"
                  width={160}
                  height={160}
                  className="rounded-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center font-bold text-sm lg:text-lg text-center">
                  72,030 <br />
                  <span className="text-gray-500 text-xs lg:text-sm">
                    Rental Car
                  </span>
                </div>
              </div>

              {/* Car List */}
              <ul className="space-y-2">
                {[
                  { label: "Sport Car", value: "17,439", color: "#0D3559" },
                  { label: "SUV", value: "9,478", color: "#175D9C" },
                  { label: "Coupe", value: "18,197", color: "#2185DE" },
                  { label: "Hatchback", value: "12,510", color: "#63A9E8" },
                  { label: "MPV", value: "14,406", color: "#A6CEF2" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md shadow-sm"
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div
                        className="w-3 h-3 lg:w-4 lg:h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium text-gray-600 text-sm lg:text-md">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-bold text-gray-800 text-sm lg:text-md">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg min-h-[370px]">
              <h2 className="font-semibold text-lg lg:text-xl mb-4 flex justify-between">
                Recent Transaction{" "}
                <span className="text-blue-500 text-xs lg:text-sm cursor-pointer">
                  View All
                </span>
              </h2>
              <ul className="space-y-3 lg:space-y-4">
                {[
                  {
                    name: "Nissan GT - R",
                    tag: "Sport Car",
                    date: "20 July",
                    price: "$80.00",
                    img: "/car1.png",
                  },
                  {
                    name: "Koenigsegg",
                    tag: "Sport Car",
                    date: "19 July",
                    price: "$99.00",
                    img: "/car2.png",
                  },
                  {
                    name: "Rolls - Royce",
                    tag: "Sport Car",
                    date: "18 July",
                    price: "$96.00",
                    img: "/car3.png",
                  },
                  {
                    name: "CR - V",
                    tag: "SUV",
                    date: "17 July",
                    price: "$80.00",
                    img: "/car4.png",
                  },
                ].map((car, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={car.img}
                        alt={car.name}
                        width={60}
                        height={40}
                        className="rounded-md"
                      />
                      <div className="text-sm lg:text-lg">
                        <h3 className="font-bold">{car.name}</h3>
                        <p className="text-gray-500 text-xs lg:text-sm">
                          {car.tag}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-xs lg:text-sm">
                      <p className="text-gray-500">{car.date}</p>
                      <span className="font-bold text-gray-800">
                        {car.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}