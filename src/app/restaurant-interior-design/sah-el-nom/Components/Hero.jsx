import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/sahelnom (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          SAH EL NOM EXPRESS
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Experience the new Sah-el-nom Express Business Bay, transformed by We Do interiors innovative interior design. Our team created a vibrant and inviting space to prove themselves as a best interior design company dubai. Discover a fresh new look of popular interior design Dubai at this restaurant.							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
