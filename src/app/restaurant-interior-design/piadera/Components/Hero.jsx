import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/piadera (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          PIADERA CAFE
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Dubai's newest cafe sensation: Piader Dubai Cafe!  Experience the stunning interior design by best interior design company Dubai.  We don't just design cafes, we create experiences. Piadera Cafe is a testament to our expertise. Contact us today for top-notch interior design Dubai cafe.Your own cafe masterpiece! !							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
