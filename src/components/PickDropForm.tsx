"use client";

export default function PickDropForm() {
  const pickUpDate = "20 July 2022";
  const pickUpTime = "07.00";
  const dropOffDate = "21 July 2022";
  const dropOffTime = "01.00";

  return (
    <div>
      {/* Pick-Up Section */}
      <div className="mb-6">
        <SectionHeader title="Pick - Up" color="bg-blue-500" />
        <div className="flex flex-col-3 justify-between">
          <DropdownField label="Locations" value="Kota Semarang" disabled />
          <DropdownField label="Date" value={pickUpDate} disabled />
          <DropdownField label="Time" value={pickUpTime} disabled />
        </div>
      </div>

      {/* Drop-Off Section */}
      <div>
        <SectionHeader title="Drop - Off" color="bg-blue-300" />
        <div className="flex flex-col-3 justify-between">
          <DropdownField label="Locations" value="Kota Semarang" disabled />
          <DropdownField label="Date" value={dropOffDate} disabled />
          <DropdownField label="Time" value={dropOffTime} disabled />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, color }: { title: string; color: string }) {
  return (
    <div className="flex items-center mb-2">
      <span className={`w-3 h-3 ${color} rounded-full mr-2`}></span>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}

function DropdownField({
  label,
  value,
  onChange,
  options = [],
  disabled,
}: {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: string[];
  disabled?: boolean;
}) {
  return (
    <div className="relative">
      <label className="block text-sm font-bold text-black">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full mt-1 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={value}>{value}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
