import React from "react";

const Hero = () => {
  return (
      <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/majanvilla (4).webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
            MAJAN VILLA
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left px-2">
          Explore the elegance of majan villa Dubai interiors, designed 
          with calm, neutral colors, providing a serene retreat for residents.
           Majan dubai villa is designed by We Do interiors themed with modern 
           house design. Majjan Villa interior design requires expertise in planning.
            Take a look at some of the ideas we've implemented in our home interior
             design project.							
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
