import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/manalajaj (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
        MANAL AJAJ BOUTIQUE
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        A captivating boutique interior is essential to showcase the Manal AJAJ brand. We Do Interiors offers unparalleled interior design services to create a space that perfectly complements your fashion collections. Our expert interior designer Dubai team will transform your Dubai boutique into a haven of style & sophistication. Contact us today for a consultation.							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
