"use client";
import React, { useState } from "react";
import Image from "next/image";

const AtlantisDuplex = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageUrls = [
    { src: "/images/ATRD (3).webp", alt: "Atlantis Project 3", title: "Atlantis Project 3" },
    { src: "/images/ATRD (14).webp", alt: "Atlantis Project 14", title: "Atlantis Project 14" },
    { src: "/images/ATRD (15).webp", alt: "Atlantis Project 15", title: "Atlantis Project 15" },
    { src: "/images/ATRD (16).webp", alt: "Atlantis Project 16", title: "Atlantis Project 16" },
    { src: "/images/ATRD (17).webp", alt: "Atlantis Project 17", title: "Atlantis Project 17" },
    { src: "/images/ATRD (18).webp", alt: "Atlantis Project 18", title: "Atlantis Project 18" },
    { src: "/images/ATRD (19).webp", alt: "Atlantis Project 19", title: "Atlantis Project 19" },
    { src: "/images/ATRD (20).webp", alt: "Atlantis Project 20", title: "Atlantis Project 20" },
    { src: "/images/ATRD (21).webp", alt: "Atlantis Project 21", title: "Atlantis Project 21" },
    { src: "/images/ATRD (22).webp", alt: "Atlantis Project 22", title: "Atlantis Project 22" },
    { src: "/images/ATRD (23).webp", alt: "Atlantis Project 23", title: "Atlantis Project 23" },
    { src: "/images/ATRD (24).webp", alt: "Atlantis Project 24", title: "Atlantis Project 24" },
    { src: "/images/ATRD (25).webp", alt: "Atlantis Project 25", title: "Atlantis Project 25" },
    { src: "/images/ATRD (26).webp", alt: "Atlantis Project 26", title: "Atlantis Project 26" },
    { src: "/images/ATRD (27).webp", alt: "Atlantis Project 27", title: "Atlantis Project 27" },
    { src: "/images/ATRD (28).webp", alt: "Atlantis Project 28", title: "Atlantis Project 28" },
    { src: "/images/ATRD (29).webp", alt: "Atlantis Project 29", title: "Atlantis Project 29" },
    { src: "/images/ATRD (30).webp", alt: "Atlantis Project 30", title: "Atlantis Project 30" },
    { src: "/images/ATRD (31).webp", alt: "Atlantis Project 31", title: "Atlantis Project 31" },
    { src: "/images/ATRD (32).webp", alt: "Atlantis Project 32", title: "Atlantis Project 32" },
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

export default AtlantisDuplex;
