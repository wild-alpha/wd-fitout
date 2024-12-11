import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/vogue (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          VOUGE CAFE DUBAI
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Step into a world of style and flavor at Vouge Cafe Dubai. Our expert interior design Dubai team at We Do interiors created a stunning interior design Dubai that perfectly captures the cafe's chic and modern vibe. From the moment you enter, you'll be immersed in an atmosphere of sophistication and comfort. Contact us to design your next stylish space!						
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
