import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/sns (6).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          SAUDI NETWORK SERVICES
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        A well-designed office space is crucial for a successful business like Saudi Network Services. Our interior design Dubai experts will create a workspace that reflects the professional image of Saudi Network Services while fostering collaboration and innovation. Contact us today to discuss your office project.							
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
