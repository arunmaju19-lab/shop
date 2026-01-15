import React from "react";

import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Bottom() {
  return (

   <div className="w-full bg-[#4f5b0f] px-8  md:px-20 py-16 ">
  
  {/* Footer Container */}
  <div className="max-w-7xl mx-auto text-[#e6ebc7]">

    {/* ===== TOP SECTION ===== */}
    <div
      className="
        grid grid-cols-1 gap-10
        sm:grid-cols-2
        md:grid-cols-5 md:gap-16 
      "
    >
      {/* Logo */}
      <div>
        <h2 className="text-2xl font-semibold text-lime-300">AGD</h2>
        <p className="text-xs tracking-widest mt-1">GOLD & DIAMONDS</p>
      </div>

      {/* Company */}
      <div>
        <h4 className="mb-4 font-medium text-white">Company</h4>
        <ul className="space-y-2 text-sm">
          <li className="cursor-pointer hover:underline">Products</li>
          <li className="cursor-pointer hover:underline">About</li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="mb-4 font-medium text-white">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li className="cursor-pointer hover:underline">Privacy Policy</li>
          <li className="cursor-pointer hover:underline">
            Terms & Conditions
          </li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <h4 className="mb-4 font-medium text-white">
          Link Up with Friends!
        </h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <FaInstagram className="text-lg" />
            <span>Instagram</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <FaYoutube className="text-lg" />
            <span>YouTube</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <FaLinkedinIn className="text-lg" />
            <span>LinkedIn</span>
          </li>
        </ul>
      </div>

      {/* Help */}
      <div>
        <h4 className="mb-4 font-medium text-white">
          Questions? Comments? Concerns?
        </h4>
        <button
          className="
            bg-[#f1f4c5] text-[#4f5b0f]
            px-6 py-2 rounded-lg text-sm font-medium
            hover:bg-[#4f5b0f] hover:text-[#f1f4c5]
            border border-transparent hover:border-[#f1f4c5]
            transition cursor-pointer
          "
        >
          Help
        </button>
      </div>
    </div>

    {/* ===== BOTTOM TEXT ===== */}
    <div className="text-center text-xs sm:text-sm mt-12 text-[#d8ddb0]">
      © 2025 Gold E commerce &nbsp;All rights reserved.
    </div>

  </div>
</div>

  );
}

export default Bottom;
