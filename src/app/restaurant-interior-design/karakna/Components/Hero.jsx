import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/karakna (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          KARAKNA CAFE
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Dive into the embrace of Karakna Cafe Dubai, brought to life by the award-winning interior design expertise of We Do Interiors. We're among the best interior design companies in dubai, renowned for crafting captivating Dubai cafe experiences. Karakna Cafe is a perfect example of how we elevate cafes beyond just a place for coffee. Contact us today to discuss your dream Dubai cafe Interior design.							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
