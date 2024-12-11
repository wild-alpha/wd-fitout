import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/peakyblinders (5).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
        PEAKY BLINDER BARBER SHOP
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Are you dreaming of a barber shop that captures the essence of the iconic Peaky Blinder style? We Do Interiors is your interior design company in Dubai to bring your vision to life. Our expert interior designer Dubai team will transform your space into a masculine and sophisticated haven for men like peaky blinder barber shop.							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
