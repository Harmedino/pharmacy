import React from "react";
import { assets } from "../assets/assets";

const Categories = () => {
  return (
    <section className="w-full bg-[#f7f9fc] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-blue-900 mb-20">
          Key Benefits
        </h2>

        {/* Benefit 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center mb-28">
          {/* Text */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              All your Medicine needs in one place
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• Search and find all kinds of drugs</li>
              <li>• Drugs for special care treatments</li>
              <li>• Get notified when your drug is available</li>
            </ul>

            <button className="mt-6 px-6 py-2 rounded-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition">
              Get prescription →
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
          
              <img
                src={assets.benefit1}
                alt="Medicine"
                className="w-98"
              />
            
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          {/* Image */}
          <div className="flex justify-start md:order-1 order-2">
           
              <img
                src={assets.benefit2}
                alt="Delivery"
                className="w-78"
              />
            
          </div>

          {/* Text */}
          <div className="md:order-2 order-1 justify-right border-4-blue">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Get your drugs at your doorstep
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• Fast delivery to your doorstep</li>
              <li>• Delivered within 24hrs of request</li>
              <li>• Guaranteed speedy response</li>
            </ul>

            <button className="mt-6 px-6 py-2 rounded-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition">
              Get prescription →
            </button>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Set up your profile and get refill easily
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>• Refill becomes easier as a member</li>
              <li>• One click and your medicine is on its way</li>
              <li>• Select a healthcare specialist</li>
            </ul>

            <button className="mt-6 px-6 py-2 rounded-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition">
              Get prescription →
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
          
              <img
                src={assets.benefit3}
                alt="Profile setup"
                className="w-98"
              />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
