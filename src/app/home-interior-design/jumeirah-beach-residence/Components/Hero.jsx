import React from "react";

const Hero = () => {
  return (
      <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/jumeirahvilla (2).webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
           JUMEIRAH BEACH RESIDENCE
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          As an Interior Design Company We Do Interiors 
          modern designs for Jumeirah Beach Residence 
          emphasize new ceiling design, modern gate 
          design,interior furniture and Palm Jumeirah 
          Villas breathtaking views. Browse our Home 
          Interior Design Projects and Contact Us For 
          Bookings!																					
          </p>
        </div>
      </div>
    </section>
  );
};


export default Hero;


