import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
    
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/xaima (1).webp')" }}
    ></div>

    <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
        
          XAIMA RESTAURANT DUBAI
        </h1>
        <p className="text-sm lg:text-xl xl-text-2xl text-left">
        We transformed Xaima Restaurant into a culinary destination. Our interior design concept seamlessly blends modern aesthetics with cultural nuances, Every element, from lighting to furniture, was carefully curated to enhance the dining experience. We are one of the best interior design companies in Dubai. Contact Us today.													
        </p>
      </div>
    </div>
  </section>
);
};

export default Hero;
