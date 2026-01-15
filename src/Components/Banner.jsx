import React from 'react'
import playstore from "../assets/bottom/playstore.svg";
import apple from "../assets/bottom/apple.svg";

const Banner = () => {
  return (
    <div>
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#d7f42a] flex items-center justify-center text-center px-6 py-26 mb-20">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Download Our Mobile App
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-black/80 leading-relaxed mb-10">
            Get the top E-commerce app on your phone! We’ve got you covered with a
            super user-friendly experience and tons of events to check out. Dive
            in and explore!
          </p>

          {/* Store Buttons */}
          <div className="flex items-center justify-center gap-4">
            <img
              src={playstore}
              alt="Google Play"
              className="h-12 cursor-pointer"
            />

            <img
              src={apple}
              alt="Apple Store"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
