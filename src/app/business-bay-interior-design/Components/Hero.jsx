"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row w-full lg:mt-24 md:mt-24">
      {/* Image Section */}
      <div
        className="bg-cover bg-center h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px] xl:h-[600px] order-1 w-full md:w-7/12"
        style={{
          backgroundImage:
            "url('/images/Exquisite-Dubai-restaurant-fitout-with-statement-lighting-interior-design-solutions-Downtown-Dubai.jpg')",
        }}
      ></div>

      {/* Text Section */}
      <div
        className="bg-[#121212] text-white px-4 py-8 overflow-y-auto h-[400px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[650px] order-2 w-full md:w-5/12"
        style={{
          scrollbarWidth: "thin", // Firefox-specific
          scrollbarColor: "silver #1a1a1a", // Firefox-specific
        }}
      >
        <style jsx>{`
          /* Custom Scrollbar Styling */
          div::-webkit-scrollbar {
            width: 10px; /* Set the width of the scrollbar */
          }
          div::-webkit-scrollbar-track {
            background-color: #1a1a1a; /* Dark background for the track */
          }
          div::-webkit-scrollbar-thumb {
            background: linear-gradient(
              to right,
              silver 25%,
              transparent 25%,
              transparent 75%,
              silver 75%
            );
            border-radius: 8px; /* Rounded edges for the thumb */
            border: 2px solid black; /* Thin black border around the thumb */
          }
          div::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(
              to right,
              silver 15%,
              transparent 15%,
              transparent 85%,
              silver 85%
            );
            border-color: gray; /* Change border color on hover */
          }
          div::-webkit-scrollbar-thumb:active {
            background: linear-gradient(
              to right,
              silver 35%,
              transparent 35%,
              transparent 65%,
              silver 65%
            );
          }
        `}</style>
        <div className="text-center">
          <h1 className="text-xl text-[#b89564] font-bold mb-4">
            BEST BUSINESS BAY INTERIOR DESIGN & FITOUT COMPANY DUBAI
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            Business Bay, Dubai is a luxurious innovation, with several famous 
            commercial and residential spaces in the entire region. 
            Famous for its iconic skyline as well as for being vibrant,
            it hosts business people and individuals interested in 
            high-end design as well as functionality.
          </p>
          <h2 className="text-lg text-start text-[#9c733c] font-bold mb-4">
            INTERIOR DESIGN COMPANY DUBAI - WE DO DESIGN & FITOUT
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
            <h3 className="text-lg text-start text-[#9c733c] font-bold mb-4">
            BEST INTERIOR DESIGN COMPANY IN BUSINESS BAY DUBAI
          </h3>
            As the Best Interior Design Company in Business Bay Dubai,
            we work from detailed planning to flawless implementation
            of interior fit-out for every project we undertake. Be a part
            of the top interior design company in Business Bay Dubai and
            experience perfect harmony between style and functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
