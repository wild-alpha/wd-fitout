import React from "react";

const Hero = () => {
  return (
      <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/6w-residence (3).webp')" }}
        
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
           
            6W RESIDENCE PENTHOUSE
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          Our penthouse interior design services are the most reliable
           and trusted services in Dubai, UAE. We offer high-quality materials
            and creative penthouse interior Designs to transform your space. 
            6W Residence penthouse dubai is one of our premium
           projects as best interior design companies in dubai.							
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
