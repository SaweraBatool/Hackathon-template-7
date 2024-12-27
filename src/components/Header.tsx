import React from "react";
import { VscSettings } from "react-icons/vsc";

export default function Header() {
  return (
    <div className="h-auto w-full flex flex-wrap items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="w-[100px] h-[40px] flex-shrink-0">
        <img
          src="/Logo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 w-full max-w-[492px] h-[44px] border rounded-full px-3 mt-3 md:mt-0 md:flex-1 md:mr-8">
        <img
          src="/search-normal.png"
          alt="Search"
          className="w-[20px] h-[20px]"
        />
        <input
          type="text"
          placeholder="Search something here"
          className="ml-2 w-full bg-transparent border-none outline-none text-sm text-[#788498]"
        />
        <div className="text-[#596780] text-[20px] ml-3 cursor-pointer">
          <VscSettings />
        </div>
      </div>

      {/* Profile Icons */}
      <div className="flex items-center space-x-3 mt-3 md:mt-0">
        <a href="#" className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[44px] lg:h-[44px]">
          <img src="/Like.png" alt="Like" className="w-full h-full" />
        </a>
        <a href="#" className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[44px] lg:h-[44px]">
          <img
            src="/Notification.png"
            alt="Notification"
            className="w-full h-full"
          />
        </a>
        <a href="#" className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[44px] lg:h-[44px]">
          <img
            src="/Settings.png"
            alt="Settings"
            className="w-full h-full"
          />
        </a>
        <a href="#" className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[44px] lg:h-[44px]">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full rounded-full"
          />
        </a>
      </div>
    </div>
  );
}
