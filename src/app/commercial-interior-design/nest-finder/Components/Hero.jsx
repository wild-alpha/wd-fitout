import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/nestfinder (5).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          NEST FINDER
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Looking to create a office that truly reflects your style? We Do Interiors is your partner in interior design. Our interior design Company Dubai will help you transform your space into a beautiful and functional environment like Nest Finder. We have the expertise to bring your vision to life.							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
