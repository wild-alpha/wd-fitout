"use client";
import React, { useState } from "react";
import Image from "next/image";

const BeachFront = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageUrls = [
    { src: "/images/manara villa (1).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/manara villa (2).webp", alt: "Atlantis Project 2", title: "Atlantis Project 2" },
    { src: "/images/manara villa (3).webp", alt: "Atlantis Project 3", title: "Atlantis Project 3" },
    { src: "/images/manara villa (4).webp", alt: "Atlantis Project 4", title: "Atlantis Project 4" },
    { src: "/images/manara villa (5).webp", alt: "Atlantis Project 5", title: "Atlantis Project 5" },
    { src: "/images/manara villa (6).webp", alt: "Atlantis Project 6", title: "Atlantis Project 6" },
    { src: "/images/manara villa (7).webp", alt: "Atlantis Project 7", title: "Atlantis Project 7" },
    { src: "/images/manara villa (8).webp", alt: "Atlantis Project 8", title: "Atlantis Project 8" },
    { src: "/images/manara villa (9).webp", alt: "Atlantis Project 9", title: "Atlantis Project 9" },
    { src: "/images/manara villa (10).webp", alt: "Atlantis Project 10", title: "Atlantis Project 10" },
    { src: "/images/manara villa (11).webp", alt: "Atlantis Project 11", title: "Atlantis Project 11" },
    { src: "/images/manara villa (12).webp", alt: "Atlantis Project 12", title: "Atlantis Project 12" },
    { src: "/images/manara villa (13).webp", alt: "Atlantis Project 13", title: "Atlantis Project 13" },
    { src: "/images/manara villa (14).webp", alt: "Atlantis Project 14", title: "Atlantis Project 14" },
    { src: "/images/manara villa (15).webp", alt: "Atlantis Project 15", title: "Atlantis Project 15" },
    { src: "/images/manara villa (16).webp", alt: "Atlantis Project 16", title: "Atlantis Project 16" },
    { src: "/images/manara villa (17).webp", alt: "Atlantis Project 17", title: "Atlantis Project 17" },
    { src: "/images/manara villa (18).webp", alt: "Atlantis Project 18", title: "Atlantis Project 18" },
    { src: "/images/manara villa (19).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/manara villa (20).webp", alt: "Atlantis Project 2", title: "Atlantis Project 2" },
    { src: "/images/manara villa (21).webp", alt: "Atlantis Project 3", title: "Atlantis Project 3" },
    { src: "/images/manara villa (22).webp", alt: "Atlantis Project 4", title: "Atlantis Project 4" },
    { src: "/images/manara villa (23).webp", alt: "Atlantis Project 5", title: "Atlantis Project 5" },
    { src: "/images/manara villa (24).webp", alt: "Atlantis Project 6", title: "Atlantis Project 6" },
    { src: "/images/manara villa (25).webp", alt: "Atlantis Project 7", title: "Atlantis Project 7" },
    { src: "/images/manara villa (26).webp", alt: "Atlantis Project 8", title: "Atlantis Project 8" },
    { src: "/images/manara villa (27).webp", alt: "Atlantis Project 9", title: "Atlantis Project 9" },
    { src: "/images/manara villa (28).webp", alt: "Atlantis Project 10", title: "Atlantis Project 10" },
    { src: "/images/manara villa (29).webp", alt: "Atlantis Project 11", title: "Atlantis Project 11" },
    { src: "/images/manara villa (30).webp", alt: "Atlantis Project 12", title: "Atlantis Project 12" },
    { src: "/images/manara villa (31).webp", alt: "Atlantis Project 13", title: "Atlantis Project 13" },
    { src: "/images/manara villa (32).webp", alt: "Atlantis Project 14", title: "Atlantis Project 14" },
    { src: "/images/manara villa (33).webp", alt: "Atlantis Project 15", title: "Atlantis Project 15" },
    { src: "/images/manara villa (34).webp", alt: "Atlantis Project 16", title: "Atlantis Project 16" },
    { src: "/images/manara villa (35).webp", alt: "Atlantis Project 17", title: "Atlantis Project 17" },
    { src: "/images/manara villa (36).webp", alt: "Atlantis Project 18", title: "Atlantis Project 18" },
    { src: "/images/manara villa (37).webp", alt: "Atlantis Project 1", title: "Atlantis Project 1" },
    { src: "/images/manara villa (38).webp", alt: "Atlantis Project 2", title: "Atlantis Project 2" },
    { src: "/images/manara villa (39).webp", alt: "Atlantis Project 3", title: "Atlantis Project 3" },
    { src: "/images/manara villa (40).webp", alt: "Atlantis Project 4", title: "Atlantis Project 4" },
    { src: "/images/manara villa (41).webp", alt: "Atlantis Project 5", title: "Atlantis Project 5" },
    { src: "/images/manara villa (42).webp", alt: "Atlantis Project 6", title: "Atlantis Project 6" },
    { src: "/images/manara villa (43).webp", alt: "Atlantis Project 7", title: "Atlantis Project 7" },
    { src: "/images/manara villa (44).webp", alt: "Atlantis Project 8", title: "Atlantis Project 8" },
    { src: "/images/manara villa (45).webp", alt: "Atlantis Project 9", title: "Atlantis Project 9" },
    { src: "/images/manara villa (46).webp", alt: "Atlantis Project 10", title: "Atlantis Project 10" },
    { src: "/images/manara villa (47).webp", alt: "Atlantis Project 11", title: "Atlantis Project 11" },
    { src: "/images/manara villa (48).webp", alt: "Atlantis Project 12", title: "Atlantis Project 12" },
    { src: "/images/manara villa (49).webp", alt: "Atlantis Project 13", title: "Atlantis Project 13" },
    { src: "/images/manara villa (50).webp", alt: "Atlantis Project 14", title: "Atlantis Project 14" },
    { src: "/images/manara villa (51).webp", alt: "Atlantis Project 15", title: "Atlantis Project 15" },
    { src: "/images/manara villa (52).webp", alt: "Atlantis Project 16", title: "Atlantis Project 16" },
    { src: "/images/manara villa (53).webp", alt: "Atlantis Project 17", title: "Atlantis Project 17" },
    { src: "/images/manara villa (54).webp", alt: "Atlantis Project 18", title: "Atlantis Project 18" },
    { src: "/images/manara villa (55).webp", alt: "Atlantis Project 1", title: "Atlantis Project 19" },
    { src: "/images/manara villa (56).webp", alt: "Atlantis Project 2", title: "Atlantis Project 20" },
    { src: "/images/manara villa (57).webp", alt: "Atlantis Project 3", title: "Atlantis Project 21" },
    { src: "/images/manara villa (58).webp", alt: "Atlantis Project 4", title: "Atlantis Project 4" },
    { src: "/images/manara villa (59).webp", alt: "Atlantis Project 5", title: "Atlantis Project 5" },
    { src: "/images/manara villa (60).webp", alt: "Atlantis Project 6", title: "Atlantis Project 6" },
    { src: "/images/manara villa (61).webp", alt: "Atlantis Project 7", title: "Atlantis Project 7" },
    { src: "/images/manara villa (62).webp", alt: "Atlantis Project 8", title: "Atlantis Project 8" },
    { src: "/images/manara villa (63).webp", alt: "Atlantis Project 9", title: "Atlantis Project 9" },
    { src: "/images/manara villa (64).webp", alt: "Atlantis Project 10", title: "Atlantis Project 10" },
    { src: "/images/manara villa (65).webp", alt: "Atlantis Project 11", title: "Atlantis Project 11" },
    { src: "/images/manara villa (66).webp", alt: "Atlantis Project 12", title: "Atlantis Project 12" },
    { src: "/images/manara villa (67).webp", alt: "Atlantis Project 13", title: "Atlantis Project 13" },
    { src: "/images/manara villa (68).webp", alt: "Atlantis Project 14", title: "Atlantis Project 14" },
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
