import React from "react";

const Hero = () => {
  return (
      <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/beachfront (20).webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
            EMAAR BEACHFRONT
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-center">
          Indulge in the ultimate beachfront experience, designed for 
          both luxury, comfort, and peace of mind, at Emaar Beachfront. 
          The best Interior Designer Dubai team will bring your vision to 
          life, crafting a best Interior Design Dubai that complements 
          the breathtaking surroundings and elevates your everyday living 
          experience. All MEP systems comply with the latest Dubai 
          regulations, guaranteeing a safe and comfortable haven for 
          you and your loved ones.							
          </p>
        </div>
      </div>
    </section>
  );
};


export default Hero;
