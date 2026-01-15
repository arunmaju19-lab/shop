import React, { useState } from "react";
import logo from "../assets/logo.svg";
import tabs from "../Components/tabs";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#E7F66C] w-full relative">

      {/* ===== TOP BAR ===== */}
      <div className="flex items-center justify-between px-4 md:px-20 py-3">

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 md:h-12" />

        {/* ===== DESKTOP SEARCH + ICONS ===== */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-sm" />
            <input
              type="text"
              placeholder="Search Here"
              className="h-[38px] w-[340px] border border-black pl-9 pr-3 text-sm outline-none bg-transparent rounded-sm"
            />
          </div>

          <FaBell />
          <FaUser />
          <FaHeart />
          <FaShoppingCart />
        </div>

        {/* ===== MOBILE ICONS (ALL ICONS VISIBLE) ===== */}
        <div className="flex md:hidden items-center gap-4">
          <FaBell />
          <FaUser />
          <FaHeart />
          <FaShoppingCart />
          <FaBars
            className="text-xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {/* ===== MOBILE SEARCH (ONLY PHONE) ===== */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-sm" />
          <input
            type="text"
            placeholder="Search Here"
            className="h-[38px] w-full border border-black pl-9 pr-3 text-sm outline-none bg-transparent rounded-sm"
          />
        </div>
      </div>

      {/* ===== DESKTOP TABS ===== */}
      <div className="hidden md:flex items-center gap-12 px-20 pb-3">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className="relative text-sm font-medium pb-2"
          >
            {tab}
            {activeTab === index && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black" />
            )}
          </button>
        ))}
      </div>

      {/* ===== MOBILE SLIDE MENU ===== */}
{menuOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/40 z-40"
      onClick={() => setMenuOpen(false)}
    ></div>

    {/* Menu */}
    <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 p-6">
      <div className="flex justify-end mb-6">
        <FaTimes
          className="text-xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <ul className="flex flex-col gap-2 text-sm font-medium">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => {
              setActiveTab(index);
              setMenuOpen(false);
            }}
            className={`px-4 py-3 rounded-md cursor-pointer
              transition-all duration-200
              hover:bg-[#E7F66C] hover:text-black
              ${activeTab === index ? "bg-[#E7F66C] font-semibold" : ""}
            `}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  </>
)}

    </div>
  );
}

export default Navbar;
