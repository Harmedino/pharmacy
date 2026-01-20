import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const MainBanner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const locations = ["Ikeja", "VI", "Lekki", "Ajah"];

  const handleSearch = () => {
    if (!searchQuery) return;
    // Navigate to products or do search logic
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative w-full h-[100vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
      {/* Hero background */}
      <img
        src={assets.heroBg}
        alt="hero banner"
        className="w-full h-full object-cover brightness-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 via-transparent to-blue-800/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center px-6 md:px-16 lg:px-24 text-center md:text-left">
       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug max-w-lg"> We can get your Drug Prescriptions to You </h1>

        <p className="mt-4 text-white text-sm md:text-lg max-w-md">
          We have all the drugs your doctor prescribed for your health and we can deliver them to your doorstep quickly.
        </p>

        {/* Location buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {locations.map((loc) => (
            <button
              key={loc}
              className="px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all"
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="mt-6 flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search for drugs in our store"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-r-lg transition-all"
          >
            Find drug
          </button>
        </div>

        {/* Optional CTA buttons */}
        {/* <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Link
            to="/products"
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
          >
            Shop now
          </Link>

          <Link
            to="/products"
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black rounded-lg transition-all"
          >
            Explore deals
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default MainBanner;
