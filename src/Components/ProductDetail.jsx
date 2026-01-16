import React from "react";
import { useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import logo from "../assets/product/logo.svg";
import logo2 from "../assets/product/logo2.svg";
import Bottom from "../Components/Bottom";


function ProductDetail() {
  const { state } = useLocation();

  if (!state) {
    return <div className="text-white p-10">Product not found</div>;
  }

  const { img, name, price, old, sku } = state;

  return (
    <div className="h-screen bg-black text-white">

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">

        {/* ===== LEFT IMAGE (SINGLE SQUARE IMAGE) ===== */}
        <div className="flex items-center justify-center bg-black">
          <div className="w-[360px] h-[360px] bg-[#0b0f14] rounded-xl flex items-center justify-center relative">

            {/* Heart icon */}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
              <FaHeart />
            </button>

            <img
              src={img}
              alt={name}
              className="w-full h-full object-contain p-8"
            />
          </div>
        </div>

        {/* ===== RIGHT DETAILS (SCROLL ONLY HERE) ===== */}
        <div className="overflow-y-auto px-6 md:px-12 py-10">
          <div className="space-y-5">

            <h1 className="text-3xl font-serif">Trending</h1>

            <p className="text-sm text-gray-400">
              Diamond Ring in 18kt Rose Gold (2.22 gram) with Diamonds (0.1120 Ct)
            </p>

            <p className="text-xs text-gray-500">{sku}</p>

            {/* PRICE */}
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold">
                AED {price}
              </span>
              <span className="line-through text-gray-500">
                AED {old}
              </span>
            </div>

            <p className="text-sm text-green-400">
              Hurry! You have saved AED {old - price}
            </p>

            {/* COLORS */}
            <div>
              <p className="text-sm mb-2">Available Colours</p>
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded bg-[#e6c1c1] border"></div>
                <div className="w-7 h-7 rounded bg-[#d4af37] border"></div>
                <div className="w-7 h-7 rounded bg-[#f5f5f5] border"></div>
                <div className="w-7 h-7 rounded bg-[#3a3a3a] border"></div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
              <button className="bg-lime-400 text-black px-8 py-3 rounded-md font-medium w-40">
                Buy Now
              </button>
              <button className="border border-gray-500 px-8 py-3 rounded-md w-40">
                Add to Cart
              </button>
            </div>

            {/* SIZE */}
            <div>
              <p className="text-sm mb-1">Select Size</p>
              <select className="bg-black border border-gray-500 px-4 py-2 rounded w-20">
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            {/* GOLD PURITY */}
            <div>
              <p className="text-sm mb-2">Choose Gold Purity</p>
              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-full border border-lime-400 text-lime-400">
                  18KT
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-500">
                  24KT
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                2.480GM | 3.280GM
              </p>
            </div>

            {/* DELIVERY */}
            <div>
              <p className="text-sm mb-2">Delivery availability</p>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="670114"
                  className="bg-black border border-gray-500 px-4 py-2 rounded w-40"
                />
                <button className="bg-[#cfdc6f] text-black px-4 rounded">
                  Check Now
                </button>
              </div>
            </div>

            {/* CERTIFICATION */}
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm mb-2">Certification</p>
              <div className="flex gap-6 items-center">
                <img src={logo} alt="BIS" className="h-8" />
                <img src={logo2} alt="IGI" className="h-8" />
              </div>
            </div>

            {/* PRODUCT DETAILS */}
            <div className="border-t border-gray-700 pt-4 text-sm text-gray-400">
              <p>Product ID : SKU 1245</p>
              <p>Dimension : 9.15 mm</p>
              <p>Gold : 18 KT Yellow Gold</p>
              <p>Gold Weight : 2.460 GM</p>
              <p>Diamond Weight : 0.180 CT</p>
              <p>Diamond : SI IJ</p>
            </div>

            {/* RATING */}
            <div className="border-t border-gray-700 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">4.4</span>
                ⭐
                <span className="text-xs text-gray-400">
                  (754 Ratings & 234 reviews)
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
      <Bottom />
    </div>
  );
}

export default ProductDetail;
