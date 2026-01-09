import React from "react";

import img1 from "./assets/secnd/girl1.svg";
import img2 from "./assets/secnd/girl2.svg";
import img3 from "./assets/secnd/girl3.svg";
import img4 from "./assets/secnd/girl4.svg";
import img5 from "./assets/secnd/cart1.svg";
import img6 from "./assets/secnd/cart2.svg";
import img7 from "./assets/secnd/cart3.svg";
import img8 from "./assets/secnd/cart4.svg";    

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


  return (
    <div className="bg-[#1c1c1c] text-white py-20">

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
      <div className="flex justify-center gap-10 px-20">
        {cards.map((card) => (
          <div key={card.id} className="relative w-[260px]">
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[340px] object-cover "
            />

            {/* Text overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-lg font-semibold">
                {card.title}
              </h3>
              <p className="text-lime-400 text-sm">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== NEW ARRIVALS BAR ===== */}
      <div className="mt-20 px-20">
        <div className="flex justify-between items-center  px-6 py-4">
          <div>
            <h2 className="text-2xl font-playfair">New Arrivals</h2>
            <p className="text-gray-400 text-sm">
              234 New item added
            </p>
          </div>

          <button className="text-sm text-white hover:underline">
            See all
          </button>
        </div>
      </div>
      {/* ===== PRODUCT CARDS ===== */}
<div className="mt-10 px-20">
  <div className="flex gap-8">
    {products.map((item) => (
      <div
        key={item.id}
        className="bg-[#0b0f14] rounded-xl p-4 w-[280px] relative"
      >
        {/* Heart icon */}
        <button className="absolute top-4 right-4 border border-gray-500 rounded-full p-2">
          🤍
        </button>

        {/* Product Image */}
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-[200px] object-contain mb-4"
        />

        {/* Product info */}
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-md">{item.name}</h3>
          <span className="text-sm font-semibold">{item.price}</span>
        </div>

        <p className="text-xs text-gray-400 mb-4">{item.sku}</p>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-lime-400 text-black text-sm py-2 rounded-lg font-medium hover:cursor-pointer">
            ADD TO CART
          </button>
          <button className="border border-lime-400 text-lime-400 rounded-lg px-3">
            ♥
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
}

export default Secondpage;
