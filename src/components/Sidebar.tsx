import React from "react";

const Sidebar = () => {
  // Options data
  const typeOptions = [
    { label: "Sport", count: 10 },
    { label: "SUV", count: 12 },
    { label: "MPV", count: 16 },
    { label: "Sedan", count: 20 },
    { label: "Coupe", count: 14 },
    { label: "Hatchback", count: 14 },
  ];

  const capacityOptions = [
    { label: "2 Person", count: 10 },
    { label: "4 Person", count: 14 },
    { label: "6 Person", count: 12 },
    { label: "8 or More", count: 16 },
  ];

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${e.target.name} selected: ${e.target.checked}`);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const priceDisplay = document.getElementById("priceDisplay");
    if (priceDisplay) {
      priceDisplay.textContent = `Max. $${e.target.value}.00`;
    }
  };

  return (
    <div className="w-64 p-4 bg-white">
      {/* Type Section */}
      <div className="mb-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-400">Type</h3>
        <ul>
          {typeOptions.map((option) => (
            <li key={option.label} className="flex items-center mb-3">
              <input
                type="checkbox"
                name={option.label}
                onChange={handleCheckboxClick}
                className="mr-3 w-5 h-5 accent-blue-500"
              />
              <label className="text-xl font-semibold text-gray-500">
                {option.label}{" "}
                <span className="text-gray-400">({option.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Capacity Section */}
      <div className="mb-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-400">Category</h3>
        <ul>
          {capacityOptions.map((option) => (
            <li key={option.label} className="flex items-center mb-3">
              <input
                type="checkbox"
                name={option.label}
                onChange={handleCheckboxClick}
                className="mr-3 w-5 h-5 accent-blue-500"
              />
              <label className="text-xl font-semibold text-gray-500">
                {option.label}{" "}
                <span className="text-gray-400">({option.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Section */}
      <div className="mb-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-400">Price</h3>
        <input
          type="range"
          min="0"
          max="150"
          defaultValue="100"
          onChange={handlePriceChange}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between items-center mb-4">
          <span
            id="priceDisplay"
            className="text-xl font-semibold text-gray-500"
          >
            Max. $100.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
