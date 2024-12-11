import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/startech (2).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          STAR TECH COMPANY
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Your office is a reflection of your company's innovation. Let We Do Interiors create a dynamic & inspiring workspace like Star Tech Company. Our design experts will transform your office into a hub of creativity and productivity. Our designs incorporate the latest trends and technology to create functional and stunning spaces.						
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
