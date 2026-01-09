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
      <div className="flex items-center px-20 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Search + Icons (RIGHT) */}
        <div className="flex items-center ml-auto gap-6 ">
          {/* Search */}
          <div className="relative bg-amber-50">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-sm" />
            <input
              type="text"
              placeholder="Search Here"
              className="h-[38px] w-[340px] border border-black pl-9 pr-3 text-sm outline-none bg-transparent"
            />
          </div>

          {/* Icons */}
          <FaBell className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </div>

      {/* ===== TABS ROW ===== */}
      <div className="flex items-center gap-8 px-20 pb-3 ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative text-sm font-medium pb-2 ${
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
