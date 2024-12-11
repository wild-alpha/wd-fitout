import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fujiya (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          FUJIYA JAPANESE RESTAURANT
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Immerse yourself in the heart of Japan at Fujiya Restaurant Dubai. Our interior design captures the essence of Japanese aesthetics. Fujiya Chose  us Because they know we are on of the best interior design companies in Dubai. If you are interested to transform you space too! Contact We Do Interiors.						
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
