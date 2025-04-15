import React from "react";

const Banner = ({ image, text }) => (
  <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
    <img src={image} alt="Banner" className="object-cover w-full h-full" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">{text}</h1>
    </div>
  </div>
);

export default Banner;
