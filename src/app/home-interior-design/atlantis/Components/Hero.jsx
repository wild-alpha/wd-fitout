import React from "react";

const Hero = () => {
  return (
      <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/atlantis (2).webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
            ATLANTIS THE ROYAL
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          The stunning interiors of Atlantis The Royal are brought
           to life by We Do interiors .One of the best leading 
           interior design companies in dubai. Our passionate 
           designers craft breathtaking ceiling design Dubai that
            elevates your space, curate exquisite home tiles design 
            to match your vision, and bring your entire project to
             life with a team of experienced interior designers. 
             Contact us today and  let's transform your space
              into a masterpiece.							
          </p>
        </div>
      </div>
    </section>
  );
};


export default Hero;
