import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/classyym (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
        CLASSY Y.M RETAIL SHOP
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        Looking to design a shop like Classy YM Retail Shop that exudes elegance and sophistication? We Do Interiors is your trusted partner in creating exceptional retail spaces interior design Dubai. Experience the difference with We Do Interiors, your premier interior design company in Dubai.Contact us today to embark on your retail design journey.							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
