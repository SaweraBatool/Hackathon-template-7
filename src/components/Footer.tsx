import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center space-y-6 px-6 w-full bg-white py-8">
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Brand Section */}
        <div className="brand flex flex-col space-y-3 w-full lg:w-1/3">
          <h1 className="text-blue-600 text-3xl font-semibold text-center lg:text-left">
            MORENT
          </h1>
          <p className="text-gray-600 text-center lg:text-left max-w-md">
            Our vision is to provide convenience
            <br />
            and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="links flex flex-wrap justify-center lg:justify-end gap-8 w-full lg:w-2/3 mb-5 px-4 lg:px-14">
  <div className="link-group">
    <h2 className="font-semibold text-xl">About</h2>
    <ul className="space-y-4 text-sm mt-4 text-gray-600">
      <li>How it works</li>
      <li>Featured</li>
      <li>Partnership</li>
      <li>Business Relations</li>
    </ul>
  </div>
  <div className="link-group">
    <h2 className="font-semibold text-xl">Community</h2>
    <ul className="space-y-4 text-sm mt-4 text-gray-600">
      <li>Events</li>
      <li>Blog</li>
      <li>Podcast</li>
      <li>Invite Friends</li>
    </ul>
  </div>
  <div className="link-group">
    <h2 className="font-semibold text-xl">Socials</h2>
    <ul className="space-y-4 text-sm mt-4 text-gray-600">
      <li>
        <Link href="https://www.discord.com">Discord</Link>
      </li>
      <li>
        <Link href="https://www.instagram.com">Instagram</Link>
      </li>
      <li>
        <Link href="https://www.facebook.com">Facebook</Link>
      </li>
      <li>
        <Link href="https://www.twitter.com">Twitter</Link>
      </li>
    </ul>
  </div>
</div>

        </div>
  

      {/* Divider */}
      <div className="border-t w-full border-gray-200"></div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center lg:text-left w-full lg:w-auto">
          <p className="font-bold">&copy; 2022 MORENT. All rights reserved.</p>
        </div>
        <div className="policies flex space-x-6 justify-center lg:justify-end w-full lg:w-auto  lg:px-14">
          <p className="font-bold text-sm">Privacy Policy</p>
          <p className="font-bold text-sm">Terms & Conditions</p>
        </div>
        
      </div>
    </footer>
  );
}