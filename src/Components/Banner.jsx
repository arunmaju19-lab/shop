import React from 'react'
import playstore from "../assets/bottom/playstore.svg";
import apple from "../assets/bottom/apple.svg";

const Banner = () => {
  return (
    <div className="px-4 sm:px-6 md:px-20 mb-16 md:mb-20">
  <div
    className="
      mx-auto max-w-7xl
      rounded-2xl
      bg-gradient-to-b from-[#020f16] to-[#000a10]
      border border-lime-400/70
      text-center
      px-4 sm:px-8 md:px-20
      py-14 sm:py-16 md:py-24
      shadow-[0_0_80px_rgba(180,255,0,0.15)]
    "
  >
    <div className="max-w-3xl mx-auto">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-lime-400 mb-4 md:mb-6">
        Download Our Mobile App
      </h1>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mb-8 md:mb-10 px-2 sm:px-0">
        Get the top E-commerce app on your phone! We’ve got you covered with a
        super user-friendly experience and tons of events to check out. Dive
        in and explore!
      </p>

      {/* Store Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <img
          src={playstore}
          alt="Google Play"
          className="h-11 sm:h-12 cursor-pointer hover:scale-105 transition"
        />
        <img
          src={apple}
          alt="Apple Store"
          className="h-11 sm:h-12 cursor-pointer hover:scale-105 transition"
        />
      </div>
    </div>
  </div>
</div>


  )
}

export default Banner
