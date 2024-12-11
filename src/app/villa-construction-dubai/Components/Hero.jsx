import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/villa-construction-by-luxury-interior-design-company-dubai.webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
         Villa Construction Company in Dubai
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          We Do Interior Design & Fitout transforms visions for luxury villa into life. We Do Interior Design & Fitout is the Top villa construction company in Dubai. From Conception to completion, Our seasoned team  ensures that every detail is crafted with perfection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;


