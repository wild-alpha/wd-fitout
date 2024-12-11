import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/crazymask (2).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          CRAZY MASK LOUNGE
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Dubai's newest hangout sensation has arrived!  Step into the world of Crazy Mask Cafe designed by the best interior design Company Dubai. Unmask your sense of fun! Crazy Mask Cafe is living proof that interior design can transform any space. Contact us today and let's bring your vision to life!							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
