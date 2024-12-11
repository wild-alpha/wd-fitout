import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/carnistore (2).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          CARNISTORE KITCHEN
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Central Kitchen Carnistore, is now open! We're thrilled to announce that we have played a key role in designing Carnistore Interior Design Dubai-.  We are known as the best interior design Company Dubai by designing restaurants and best bars in Dubai. Experience the magic for yourself! Browse our project details and contact us to bring your own restaurant vision to life.						
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
