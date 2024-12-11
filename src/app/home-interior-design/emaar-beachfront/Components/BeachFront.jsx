"use client";
import React, { useState } from "react";
import Image from "next/image";

const BeachFront = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageUrls = [
    { src: "/images/beachfront (1).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/beachfront (2).webp", alt: "Atlantis Project 2", title: "Atlantis Project 2" },
    { src: "/images/beachfront (3).webp", alt: "Atlantis Project 3", title: "Atlantis Project 3" },
    { src: "/images/beachfront (4).webp", alt: "Atlantis Project 4", title: "Atlantis Project 4" },
    { src: "/images/beachfront (5).webp", alt: "Atlantis Project 5", title: "Atlantis Project 5" },
    { src: "/images/beachfront (6).webp", alt: "Atlantis Project 6", title: "Atlantis Project 6" },
    { src: "/images/beachfront (7).webp", alt: "Atlantis Project 7", title: "Atlantis Project 7" },
    { src: "/images/beachfront (8).webp", alt: "Atlantis Project 8", title: "Atlantis Project 8" },
    { src: "/images/beachfront (9).webp", alt: "Atlantis Project 9", title: "Atlantis Project 9" },
    { src: "/images/beachfront (10).webp", alt: "Atlantis Project 10", title: "Atlantis Project 10" },
    { src: "/images/beachfront (11).webp", alt: "Atlantis Project 11", title: "Atlantis Project 11" },
    { src: "/images/beachfront (12).webp", alt: "Atlantis Project 12", title: "Atlantis Project 12" },
    { src: "/images/beachfront (13).webp", alt: "Atlantis Project 13", title: "Atlantis Project 13" },
    { src: "/images/beachfront (14).webp", alt: "Atlantis Project 14", title: "Atlantis Project 14" },
    { src: "/images/beachfront (15).webp", alt: "Atlantis Project 15", title: "Atlantis Project 15" },
    { src: "/images/beachfront (16).webp", alt: "Atlantis Project 16", title: "Atlantis Project 16" },
    { src: "/images/beachfront (17).webp", alt: "Atlantis Project 17", title: "Atlantis Project 17" },
    { src: "/images/beachfront (18).webp", alt: "Atlantis Project 18", title: "Atlantis Project 18" },
    { src: "/images/beachfront (19).webp", alt: "Atlantis Project 19", title: "Atlantis Project 19" },
    { src: "/images/beachfront (20).webp", alt: "Atlantis Project 20", title: "Atlantis Project 20" },
    { src: "/images/beachfront (21).webp", alt: "Atlantis Project 21", title: "Atlantis Project 21" },
    { src: "/images/beachfront (22).webp", alt: "Atlantis Project 22", title: "Atlantis Project 22" },
    { src: "/images/beachfront (23).webp", alt: "Atlantis Project 23", title: "Atlantis Project 23" },
    { src: "/images/beachfront (24).webp", alt: "Atlantis Project 24", title: "Atlantis Project 24" },
    { src: "/images/beachfront (25).webp", alt: "Atlantis Project 25", title: "Atlantis Project 25" },
    { src: "/images/beachfront (26).webp", alt: "Atlantis Project 26", title: "Atlantis Project 26" },
    { src: "/images/beachfront (27).webp", alt: "Atlantis Project 27", title: "Atlantis Project 27" },
    { src: "/images/beachfront (28).webp", alt: "Atlantis Project 28", title: "Atlantis Project 28" },
    { src: "/images/beachfront (29).webp", alt: "Atlantis Project 29", title: "Atlantis Project 29" },
    { src: "/images/beachfront (30).webp", alt: "Atlantis Project 30", title: "Atlantis Project 30" },
    { src: "/images/beachfront (31).webp", alt: "Atlantis Project 31", title: "Atlantis Project 31" },
    { src: "/images/beachfront (32).webp", alt: "Atlantis Project 32", title: "Atlantis Project 32" },
    { src: "/images/beachfront (25).webp", alt: "Atlantis Project 33", title: "Atlantis Project 25" },
    { src: "/images/beachfront (26).webp", alt: "Atlantis Project 34", title: "Atlantis Project 26" },
    { src: "/images/beachfront (27).webp", alt: "Atlantis Project 35", title: "Atlantis Project 27" },
    { src: "/images/beachfront (28).webp", alt: "Atlantis Project 36", title: "Atlantis Project 28" },
    { src: "/images/beachfront (29).webp", alt: "Atlantis Project 37", title: "Atlantis Project 29" },
    { src: "/images/beachfront (30).webp", alt: "Atlantis Project 38", title: "Atlantis Project 30" },
    { src: "/images/beachfront (31).webp", alt: "Atlantis Project 39", title: "Atlantis Project 31" },
    { src: "/images/beachfront (32).webp", alt: "Atlantis Project 40", title: "Atlantis Project 32" },
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

export default BeachFront;
