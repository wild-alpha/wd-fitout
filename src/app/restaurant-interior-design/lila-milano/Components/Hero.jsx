import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/lila-milano-kitchen-interior-design.webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          LILA MILANO KITCHEN
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        LILA MILANO KITCHEN, is now open! We're thrilled to announce
         that we have played a key role in designing LILA MILANO Interior Design in Dubai. 
         We are known as the No.1 interior design Company Dubai by designing restaurants
           in Dubai. Experience the magic for yourself! Browse our project
           details and contact us to bring your own restaurant vision to life.						
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
