import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images//segafredo (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          SEGAFREDO ZANETTI RESTAURANT
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Experience the epitome of Italian luxury at Segafredo Zanetti Espresso Restaurant Dubai. One of the Best restaurants in Dubai.Our expert interior design team crafted a space that captures the essence of Italy, from the warm colors to the comfortable seating. Contact or Visit We Do Interiors To Transform your space as well.							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
