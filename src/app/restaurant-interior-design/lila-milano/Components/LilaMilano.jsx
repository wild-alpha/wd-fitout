"use client";
import React, { useState } from "react";
import Image from "next/image";

const LilaMilano = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageUrls = [
    { src: "/images/lila-milano (1).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (2).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (3).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (4).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (5).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (6).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (7).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (8).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (9).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (10).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (11).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (12).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (13).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (14).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (15).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (16).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (17).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (18).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (19).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (20).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (21).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (22).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (23).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/lila-milano (25).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
  
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
    <section id="#atlantis" className="container mx-auto mt-24 px-2">
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

export default LilaMilano;
