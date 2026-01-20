import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

// Horizontal testimonial slider (one at a time)

const testimonials = [
  {
    name: "Gerald Malidiliene",
    text: "The ease of delivery is one that I depended on when I was bedridden and couldn’t even walk. Their services are awesome.",
  },
  {
    name: "Amina Yusuf",
    text: "Fast delivery and genuine drugs. I didn’t even have to step out of my house.",
  },
  {
    name: "Daniel Okafor",
    text: "Customer support is very responsive and professional. Highly recommended.",
  },
];

const BottomBanner = () => {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Scroll slider when active index changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * active,
        behavior: "smooth",
      });
    }
  }, [active]);

  // Scroll section into view after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-14 grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div>
          <img
            src={assets.drugs}
            alt="Medicine"
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Slider */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            What Our Clients Say
          </h2>

          <div
            ref={sliderRef}
            className="flex overflow-x-hidden scroll-smooth"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full pr-6"
              >
                <p className="text-gray-600 mb-4 max-w-md">“{item.text}”</p>
                <span className="text-blue-600 font-medium">
                  – {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 w-2 rounded-full transition ${
                  active === i ? "bg-green-500 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;