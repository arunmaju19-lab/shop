import React from "react";
import ring from "../assets/secnd/ring.png";
import man from "../assets/secnd/man.svg";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProduct } from "./context/ProductContext.jsx";
import { useNavigate } from "react-router-dom";


import {
  cards,
  products,
  topDemanded,
  recentSearched
} from "./SecondData";

function Secondpage() {
  const { addToCart } = useProduct();
  const navigate = useNavigate();
  return (
    <div className="text-white py-20">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-playfair text-lime-400 mb-2">
          Shop on Budget
        </h1>
        <p className="text-gray-300 text-sm">
          We have every style at your affordable budget
        </p>
      </div>

      {/* ===== CARDS ===== */}
      <div className="grid grid-cols-2 gap-6 px-4 md:flex md:justify-center md:gap-10 md:px-20">
        {cards.map((card) => (
          <div key={card.id} className="relative w-full md:w-[260px]">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[220px] md:h-[340px] object-cover rounded-lg"
            />

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

      {/* ===== NEW ARRIVALS ===== */}
      <div className="mt-10 px-4 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-playfair mb-1">
          New Arrivals
        </h2>
        <p className="text-gray-400 text-sm">234 New item added</p>
      </div>

      {/* ===== PRODUCTS ===== */}
      <div className="mt-6 px-4 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-4 md:flex md:gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-[#0b0f14] rounded-xl p-4 w-full md:w-[280px] relative"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[160px] md:h-[200px] object-contain mb-4"
              />

              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm">{item.name}</h3>
                <span className="font-semibold">₹{item.price}</span>
              </div>

              <p className="text-xs text-gray-400 mb-4">{item.sku}</p>
<button
  onClick={() => {
    addToCart(item);     // item cart-il add aavum
    navigate("/cart");  // cart page-ilek pokum
  }}
  className="w-full bg-lime-400 text-black py-2 rounded-lg text-sm font-medium hover:bg-lime-500 transition"
>
  ADD TO CART
</button>

            </div>
          ))}
        </div>
      </div>

    <div
  className="
    max-w-7xl mx-auto mt-12
    rounded-xl
    bg-gradient-to-r from-[#5b6400] via-[#1b1f00] to-black
    flex flex-col md:flex-row
    items-center
    justify-between
    px-6 md:px-14
    py-10 md:py-0
    min-h-[420px]
    overflow-hidden
  "
>
  {/* LEFT IMAGE */}
  <img
    src={ring}
    alt="gold ring"
    className="
      w-[260px] md:w-[420px]
      object-contain
      drop-shadow-2xl
    "
  />

  {/* RIGHT CONTENT */}
  <div className="max-w-md text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
      The Best Gold Ever
    </h2>

    <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
      People thinking about the future why gold make high
      value here is the answer for all about
    </p>

    <button
      className="
        border border-lime-400
        px-12 py-3
        rounded-md
        text-lime-400
        hover:bg-lime-400 hover:text-black
        transition
        tracking-wide
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
  <Link
    key={item.id}
    to={`/product/${item.id}`}
    state={item}
    className="block"
  >
    <div
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

      <img
        src={item.img}
        alt={item.name}
        className="h-28 md:h-32 mx-auto mb-4 object-contain w-full"
      />

      <h3 className="text-xs md:text-sm text-white mb-1">
        {item.name}
      </h3>

      <p className="text-xs text-gray-400 mb-3">
        {item.sku}
      </p>

      <div className="flex gap-2">
        <span className="text-white font-semibold text-sm">
          ₹{item.price}
        </span>
        <span className="line-through text-gray-500 text-xs">
          ₹{item.old}
        </span>
      </div>
    </div>
  </Link>
))}

  </div>
</div>
</div>


      {/* ===== MAN IMAGE ===== */}
      <div className="flex justify-center mt-16 px-4">
        <img src={man} alt="man" className="w-full max-w-7xl object-cover" />
      </div>
    </div>
  );
}

export default Secondpage;
