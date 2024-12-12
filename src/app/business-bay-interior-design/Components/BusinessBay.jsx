"use client";
import React, { useState } from "react";
import Image from "next/image";

const BusinessBay = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageUrls = [
    { src: "/images/Contemporary-restaurant-dining-hall-interior-design-Downtown-Dubai-modern-elegance.jpg", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/Downtown-Dubai-restaurant-interior-design-with-arched-windows-and-doors-bringing-style-comfort-Dubai-dining-spaces.jpg", alt: "Atlantis Project 2", title: "Atlantis Project 2" },
    { src: "/images/Dubai-restaurant-interior-design-with-elegant-chandeliers-stylish-fitout-Downtown-Dubai.jpg", alt: "Atlantis Project 3", title: "Atlantis Project 3" },
    { src: "/images/Elegant-interior-design-for-restaurants-with-minimalist-furniture-Downtown-Dubai-Dubai-Fitout-services.jpg", alt: "Atlantis Project 4", title: "Atlantis Project 4" },
    { src: "/images/Exquisite-Dubai-restaurant-fitout-with-statement-lighting-interior-design-solutions-Downtown-Dubai.jpg", alt: "Atlantis Project 5", title: "Atlantis Project 5" },
    { src: "/images/Luxury-interior-design-for-restaurant-with-decorative-walls-Downtown-Dubai-Dubai-fitout-experts.jpg", alt: "Atlantis Project 6", title: "Atlantis Project 6" },
    { src: "/images/Sophisticated-Dubai-restaurant-interior-design-with-marble-flooring-expert-Fitout-Downtown-Dubai.jpg", alt: "Atlantis Project 7", title: "Atlantis Project 7" },
    { src: "/images/Stunning-restaurant-interior-design-with-scenic-frames-Downtown-Dubai-Dubais-best-Fitout-services.jpg", alt: "Atlantis Project 8", title: "Atlantis Project 8" },
    { src: "/images/Trendy-restaurant-interior-design-with-high-ceilings-Downtown-Dubai-dubais-premier-Fitout-company.jpg", alt: "Atlantis Project 9", title: "Atlantis Project 9" },
    { src: "/images/meby (1).webp", alt: "Atlantis Project 10", title: "Atlantis Project 10" },
    { src: "/images/meby (2).webp", alt: "Atlantis Project 11", title: "Atlantis Project 11" },
    { src: "/images/meby (3).webp", alt: "Atlantis Project 12", title: "Atlantis Project 12" },
    { src: "/images/meby (4).webp", alt: "Atlantis Project 13", title: "Atlantis Project 13" },
    { src: "/images/meby (5).webp", alt: "Atlantis Project 14", title: "Atlantis Project 14" },
    { src: "/images/meby (6).webp", alt: "Atlantis Project 15", title: "Atlantis Project 15" },
    { src: "/images/meby (7).webp", alt: "Atlantis Project 16", title: "Atlantis Project 16" },
    { src: "/images/sahelnom (1).webp", alt: "Atlantis Project 17", title: "Atlantis Project 17" },
    { src: "/images/sahelnom (2).webp", alt: "Atlantis Project 18", title: "Atlantis Project 18" },
    { src: "/images/sahelnom (3).webp", alt: "Atlantis Project 19", title: "Atlantis Project 19" },
    { src: "/images/sahelnom (4).webp", alt: "Atlantis Project 20", title: "Atlantis Project 20" },
    { src: "/images/sahelnom (5).webp", alt: "Atlantis Project 21", title: "Atlantis Project 21" },
    { src: "/images/sahelnom (6).webp", alt: "Atlantis Project 22", title: "Atlantis Project 22" },
    { src: "/images/sahelnom (7).webp", alt: "Atlantis Project 23", title: "Atlantis Project 23" },
    { src: "/images/sahelnom (8).webp", alt: "Atlantis Project 24", title: "Atlantis Project 24" },
    
  ];

  const openImage = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <section id="#businessbay" className="container mx-auto mt-10 px-0">
      <div className="atlantis">
        <div className="flex flex-wrap justify-center">
          {imageUrls.map((image, index) => (
            <div key={index} className="w-full mb-4 sm:mb-4 relative sm:w-1/4 px-2">
              <Image
                src={image.src}
                alt={image.alt}
                title={image.title}
                width={500}
                height={300}
                className="hover:transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
                onClick={() => openImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Larger image view */}
      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <button
            className="absolute top-4 right-4 text-white text-lg"
            onClick={closeImage}
          >
            Close
          </button>
          <button
            className="absolute left-4 text-white text-lg"
            onClick={showPrevImage}
          >
            &lt;
          </button>
          <Image
            src={imageUrls[selectedImageIndex].src}
            alt={imageUrls[selectedImageIndex].alt}
            title={imageUrls[selectedImageIndex].title}
            width={900} // Placeholder width
            height={500} // Placeholder height
            className="max-w-full max-h-full"
          />
          <button
            className="absolute right-4 text-white text-lg"
            onClick={showNextImage}
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
};

export default BusinessBay;
