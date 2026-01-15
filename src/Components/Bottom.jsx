import React from "react";

import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Bottom() {
  return (
    <div className="w-full px-6 py-20 bg-[#4f5b0f] pt-6">
      
      {/* Footer Section */}
<div className="w-screen  px-16 py- text-[#e6ebc7] mt-10 mx-auto">
  {/* Top Row */}
  <div className="flex justify-between items-start gap-20">
    
    {/* Logo */}
    <div>
      <h2 className="text-2xl font-semibold text-lime-300">AGD</h2>
      <p className="text-xs tracking-widest mt-1">GOLD & DIAMONDS</p>
    </div>

    {/* Company */}
    <div>
      <h4 className="mb-4 font-medium text-white">Company</h4>
      <ul className="space-y-2 text-sm">
        <li>Products</li>
        <li>About</li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h4 className="mb-4 font-medium text-white">Legal</h4>
      <ul className="space-y-2 text-sm">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
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
      <button className="bg-[#f1f4c5] text-[#4f5b0f] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#4f5b0f] hover:text-[#f1f4c5] border border-transparent hover:border-[#f1f4c5] transition hover:cursor-pointer">
        Help
      </button>
    </div>
  </div>

  {/* Bottom Text */}
  <div className="text-center text-sm mt-12 text-[#d8ddb0]">
    © 2025 Gold E commerce &nbsp;All rights reserved.
  </div>
</div>

    </div>
  );
}

export default Bottom;
