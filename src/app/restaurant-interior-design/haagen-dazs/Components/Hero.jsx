import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/haagen (1).webp')" }}
      ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          HAAGEN DAZS ICE CREAM SHOP
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Haagen Dazs ice cream shop stunning new location boasts an award-winning design dubai by We Do interiors. We elevate dining places beyond just delicious food, crafting unforgettable experiences through design.Ready to elevate your own dining space's Interior Design Dubai by the best interior design company Dubai? Contact us today and let's discuss.
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
