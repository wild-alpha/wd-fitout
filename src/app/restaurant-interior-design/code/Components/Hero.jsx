import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/code8 (3).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          CODE 8 CAFE
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Discover the code behind Dubai's hottest new Dubai Cafe! Code 8 Cafe, designed by one of the best interior design companies in Dubai , is more than just a place for a cup of joe. We crafted its interior Design to be among the best restaurants in Dubai.  We're ready to design your dream spot too! Contact us today and unlock the interior design potential of your cafe.						
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
