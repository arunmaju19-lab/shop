import React from "react";
import img1 from "./assets/secnd/girl1.svg";
import img2 from "./assets/secnd/girl2.svg";
import img3 from "./assets/secnd/girl3.svg";
import img4 from "./assets/secnd/girl4.svg";
import img5 from "./assets/secnd/cart1.svg";
import img6 from "./assets/secnd/cart2.svg";
import img7 from "./assets/secnd/cart3.svg";
import img8 from "./assets/secnd/cart4.svg"; 
import ring from "./assets/secnd/ring.png";
import earing1 from "./assets/secnd/earing1.svg";
import earing2 from "./assets/secnd/earing2.svg";
import earing3 from "./assets/secnd/earing3.svg";
import earing4 from "./assets/secnd/earing4.svg";
import earing5 from "./assets/secnd/earing5.svg";
import earing6 from "./assets/secnd/earing6.svg";
import earing7 from "./assets/secnd/earing7.svg";
import earing8 from "./assets/secnd/earing8.svg";
import man from "./assets/secnd/man.svg";
import silver1 from "./assets/secnd/silver1.png";
import silver2 from "./assets/secnd/silver2.png";
import silver3 from "./assets/secnd/silver3.png";
import silver4 from "./assets/secnd/silver4.png";   
import { FaHeart } from "react-icons/fa";

function Secondpage() {
  const cards = [
    {
      id: 1,
      img: img1,
      title: "Over 250k",
      subtitle: "72000 styles",
    },
    {
      id: 2,
      img: img2,
      title: "100k – 250k",
      subtitle: "58000 styles",
    },
    {
      id: 3,
      img: img3,
      title: "50k – 100k",
      subtitle: "34000 styles",
    },
    {
      id: 4,
      img: img4,
      title: "Under 50k",
      subtitle: "19000 styles",
    },
  ];

  const products = [
  {
    id: 1,
    img: img5,
    name: "Diamond ring",
    price: "27000",
    sku: "SKU: 18037",
  },
  {
    id: 2,
    img: img6,
    name: "Diamond ring",
    price: "27000",
    sku: "SKU: 18037",
  },
  {
    id: 3,
    img: img7,
    name: "Diamond ring",
    price: "27000",
    sku: "SKU: 18037",
  },
  {
    id: 4,
    img: img8,
    name: "Diamond ring",
    price: "27000",
    sku: "SKU: 18037",
  },
];

const topDemanded = [
  { id: 1, img: earing1, name: "Emerald earrings", sku: "SKU: 18040", price: "20000", old: "22000" },
  { id: 2, img: earing2, name: "Emerald earrings", sku: "SKU: 18040", price: "20000", old: "22000" },
  { id: 3, img: earing3, name: "Silver bracelet", sku: "SKU: 18039", price: "8000", old: "9500" },
  { id: 4, img: earing4, name: "Emerald earrings", sku: "SKU: 18040", price: "20000", old: "22000" },
  { id: 5, img: earing5, name: "Emerald earrings", sku: "SKU: 18040", price: "20000", old: "22000" },
  { id: 6, img: earing6, name: "Emerald earrings", sku: "SKU: 18040", price: "20000", old: "22000" },
  { id: 7, img: earing7, name: "Emerald earrings", sku: "SKU: 18040", price: "20000", old: "22000" },
  { id: 8, img: earing8, name: "Emerald earrings", sku: "SKU: 18040", price: "20000", old: "22000" },
];

const recentSearched = [
  { id: 1, img: silver1, name: "Silver bracelete", sku: "SKU: 18039", price: "8000", old: "9500" },
  { id: 2, img: silver2, name: "Silver ring", sku: "SKU: 18039", price: "8000", old: "9500" },
  { id: 3, img: silver3, name: "Silver ring", sku: "SKU: 18039", price: "8000", old: "9500" },
  { id: 4, img: silver4, name: "Silver ring", sku: "SKU: 18039", price: "8000", old: "9500" },
];

return (
    <div className=" text-white py-20  ">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-14 ">
        <h1 className="text-4xl font-playfair text-lime-400 mb-2">
          Shop on Budget
        </h1>
        <p className="text-gray-300 text-sm">
          We have every style at your affordable budget
        </p>
      </div>

      {/* ===== CARDS ===== */}
      <div
  className="
    grid grid-cols-2 gap-6 px-4
    md:flex md:justify-center md:gap-10 md:px-20
  "
>
  {cards.map((card) => (
    <div key={card.id} className="relative w-full md:w-[260px]">
      
      {/* Image */}
      <img
        src={card.img}
        alt={card.title}
        className="w-full h-[220px] md:h-[340px] object-cover rounded-lg"
      />

      {/* Text overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-sm md:text-lg font-semibold">
          {card.title}
        </h3>
        <p className="text-lime-400 text-xs md:text-sm">
          {card.subtitle}
        </p>
      </div>
    </div>
  ))}
</div>

 {/* NEW ARRIVALS BAR */}
      <div className="mt-6 px-4 md:px-20 max-w-7xl w-full mx-auto">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 px-2 md:px-6 py-4">

    {/* LEFT TEXT */}
    <div className="flex-1">
      <div className="flex items-start justify-between md:block">
        <h2 className="text-xl md:text-2xl font-playfair">
          New Arrivals
        </h2>

        {/* SEE ALL – mobile right top */}
        <button className="text-sm text-white hover:underline md:hidden">
          See all
        </button>
      </div>

      <p className="text-gray-400 text-sm mt-1">
        234 New item added
      </p>
    </div>

    {/* SEE ALL – desktop */}
    <button className="hidden md:block text-sm text-white hover:underline">
      See all
    </button>

  </div>
</div>

{/* New arrival cart section */}
<div className="mt-6 md:mt-10 px-4 md:px-20 max-w-7xl w-full mx-auto">
  <div
    className="
      grid grid-cols-2 gap-4
      md:flex md:gap-8
    "
  >
    {products.map((item) => (
      <div
        key={item.id}
        className="
          bg-[#0b0f14] rounded-xl p-4
          w-full md:w-[280px]
          relative
        "
      >
        {/* Heart icon (top) */}
        <button
          className="
            absolute top-4 right-4
            border border-gray-500
            rounded-full p-2
            hover:border-lime-400
            transition
          "
        >
          <FaHeart className="text-gray-300 hover:text-red-500 text-sm transition" />
        </button>

        {/* Product Image */}
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-[160px] md:h-[200px] object-contain mb-4"
        />

        {/* Product info */}
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm md:text-md">{item.name}</h3>
          <span className="text-sm font-semibold">{item.price}</span>
        </div>

        <p className="text-xs text-gray-400 mb-4">{item.sku}</p>

        {/* Actions */}
        <div className="flex gap-2 md:gap-3">
          <button className="flex-1 bg-lime-400 text-black text-xs md:text-sm py-2 rounded-lg font-medium hover:bg-lime-500 transition">
            ADD TO CART
          </button>

          <button className="border border-lime-400 rounded-lg px-3 flex items-center justify-center">
            <FaHeart className="text-lime-400 hover:text-red-500 transition" />
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

{/* gold image */}
<div
  className="
    max-w-7xl w-full mx-auto
    min-h-[400px]
    rounded-xl
    bg-gradient-to-r from-[#5b6400] via-[#1b1f00] to-black
    flex flex-col md:flex-row
    items-center
    px-4 md:px-10
    py-6 md:py-0
    mt-10
    gap-6 md:gap-10 
  "
>
  {/* Image */}
  <img
    src={ring}
    alt="gold"
    className="w-[240px] md:w-[380px] "
  />

  {/* Text */}
  <div className="text-white max-w-sm text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-serif mb-3">
      The Best Gold Ever
    </h2>

    <p className="text-sm text-gray-300 mb-6 ">
      People thinking about the future why gold make high
      value here is the answer for all about
    </p>

    <button
      className="
        border border-lime-400
        px-10 md:px-12
        py-2
        rounded-md
        text-lime-400
        hover:bg-lime-400 hover:text-black
        transition
        cursor-pointer md:mt-18 md:ml-96
      "
    >
      Explore
    </button>
  </div>
</div>


<div className="flex flex-col justify-center items-center mt-12">
  <h2 className="text-3xl font-serif">Top Demanded Items</h2>
  <p className="ml-4 text-sm text-gray-300 mt-2">234 New Items added</p>

 
{/* ===== TOP DEMANDED GRID ===== */}
<div className="mt-6 px-4 md:px-20">
  <div
    className="
      grid grid-cols-2 gap-8
      sm:grid-cols-2
      md:grid-cols-4 md:gap-8
    "
  >
    {topDemanded.map((item) => (
      <div
        key={item.id}
        className="
          relative rounded-2xl p-4 md:p-16
          bg-gradient-to-b from-[#0f1200] to-black
          border border-lime-500/40
          hover:scale-105 hover:cursor-pointer
          transition
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-lime-500/10 blur-2xl -z-10 rounded-2xl"></div>

        {/* Image */}
        <img
          src={item.img}
          alt={item.name}
          className="h-28 md:h-32 mx-auto mb-4 object-contain w-full"
        />

        {/* Text */}
        <h3 className="text-xs md:text-sm text-white mb-1 text-center md:text-left">
          {item.name}
        </h3>

        <p className="text-[10px] md:text-xs text-gray-400 mb-3 text-center md:text-left">
          {item.sku}
        </p>

        {/* Price */}
        <div className="flex gap-2 items-center justify-center md:justify-start">
          <span className="text-white font-semibold text-sm">
            {item.price}
          </span>
          <span className="text-gray-500 line-through text-xs">
            {item.old}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
     {/* ===== MAN IMAGE ===== */}
<div className="flex justify-center mt-6 md:mt-15 px-4 md:px-0">
  <img
    src={man}
    alt="man"
    className="
      w-full
      max-w-7xl
      h-auto
      object-cover
    "
  />
</div>


      {/* ===== RECENT SEARCHED ===== */}
<div className="mt-6 md:mt-15 px-4 md:px-20 ml-0 md:ml-12">
  <h1 className="font-serif text-2xl md:text-3xl text-left">
    Recent Searched
  </h1>
  <p className="text-sm text-gray-400 mt-1 text-left">
    234 items added
  </p>
</div>

<div className="mt-6 px-4 md:px-20">
  <div
    className="
      grid grid-cols-2 gap-4
      sm:grid-cols-2
      md:grid-cols-4 md:gap-6
    "
  >
    {recentSearched.map((item) => (
      <div
        key={item.id}
        className="
          relative rounded-2xl p-4 md:p-6
          bg-gradient-to-b from-[#0f1200] to-black
          border border-lime-500/40
          hover:scale-105 hover:cursor-pointer
          transition
        "
      >
        {/* ❤️ Heart Icon */}
        <button className="absolute top-4 right-4 z-10">
          <FaHeart className="text-gray-300 hover:text-red-500 text-base md:text-lg transition" />
        </button>

        {/* Product Image */}
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-32 md:h-40 object-contain mb-3"
        />

        {/* Product Info */}
        <h3 className="text-sm font-medium text-center">
          {item.name}
        </h3>

        <p className="text-xs text-gray-500 text-center mt-1">
          {item.sku}
        </p>

        {/* Price */}
        <div className="mt-4 flex justify-center items-center gap-2">
          <span className="font-semibold text-white text-sm">
            ₹{item.price}
          </span>
          <span className="line-through text-gray-400 text-xs">
            ₹{item.old}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
}

export default Secondpage;