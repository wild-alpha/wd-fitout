import React from "react";

const Hero = () => {
  return (
      <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/manara villa (1).webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
            AL MANARA DUBAI
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          We Do interior designer Dubai is well-known for 
          being the leading provider of the most luxury 
          Dubai design of interiors at Al Manara Dubai 
          with creation of bold bespoke design, home tiles 
          design, furniture design, bedroom ceiling 
          design, floors and other prominent decorations. 
          We provide entire project solutions ranging 
          from space planning and development through 
          construction, decoration, interior design 
          execution, and fitout work, as well as the 
          final turnkey solution.							
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
