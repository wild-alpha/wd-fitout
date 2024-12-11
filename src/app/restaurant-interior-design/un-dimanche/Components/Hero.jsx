import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/undimanche (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          UN DIMANCHE A PARIS
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        "Un Dimanche à Paris: Parisian Elegance in the Heart of Dubai. Immerse yourself in the magic of France without leaving the city. Our expert interior design team has transformed this space into a Parisian dream, showcasing our status as one of the best interior design companies in Dubai. Explore our restaurant portfolio and contact us to bring your vision to life."							
        </p>
      </div>
    </div>
  </section>
);
};
export default Hero;
