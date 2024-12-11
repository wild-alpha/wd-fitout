import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/allegro (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          ALLEGRO CAFE & BAR
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Discover the vibrant and stylish world of Alegro Bar & Shisha, brought to life by We DO Interiors. Our interior design expert team created a captivating interior design Dubai that blends modern elegance with a touch of bohemian flair. If you want to design your space Contact us because we are one of the best interior design companies in dubai.							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
