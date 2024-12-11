import React from "react";

const Hero = () => {
  return (
      <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ATRD (3).webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
            ATLANTIS THE ROYAL DUPLEX
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          We Do Interior Design is your one-stop shop for transforming 
          residential and commercial spaces in Dubai. Our team of award-winning 
          designers creates bespoke interiors that redefine luxury, tailored 
          to your unique vision. We combine unrivaled expertise with a 
          personalized approach, ensuring meticulous attention to detail 
          and superior craftsmanship in every project. Experience the We 
          Do difference – Schedule your free consultation today and let's 
          design your dream space.
          </p>
        </div>
      </div>
    </section>
  );
};


export default Hero;
