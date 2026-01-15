import React, { useState } from "react";
import logo from "../assets/logo.svg";
import tabs from "../Components/tabs";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

function Navbar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#E7F66C] w-full">

      {/* ===== TOP ROW ===== */}
      <div className="flex flex-col md:flex-row md:items-center px-4 md:px-20 py-3 gap-4">
        
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <img src={logo} alt="Logo" className="h-10 md:h-12" />
        </div>

        {/* Search + Icons */}
        <div className="flex flex-col md:flex-row md:items-center md:ml-auto gap-4">

          {/* Search */}
          <div className="relative w-full md:w-auto">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-sm" />
            <input
              type="text"
              placeholder="Search Here"
              className="h-[38px] w-full md:w-[340px] border border-black pl-9 pr-3 text-sm outline-none bg-transparent rounded-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center justify-center gap-5">
            <FaBell className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
            <FaHeart className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
          </div>

        </div>
      </div>

      {/* ===== TABS ROW ===== */}
      <div className="flex items-center gap-6 px-4 md:px-20 pb-3 overflow-x-auto scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative whitespace-nowrap text-sm font-medium pb-2 ${
              activeTab === index
                ? "text-black"
                : "text-black/80 hover:text-black"
            }`}
          >
            {tab}

            {activeTab === index && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
