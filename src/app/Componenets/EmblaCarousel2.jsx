"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel2() {
  // Configuration for Embla Carousel
  const options = {
    loop: true,
    slidesToScroll: 1,
    slidesInView: 3, // Show 3 images at a time
    containScroll: "trimSnaps",
  };

  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 4000 })]);

  return (
    <div className="embla max-w-full mx-auto h-120" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images//slider(1)-1.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider(1)-2.webp" alt="Slide 2" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider(1)-3.webp" alt="Slide 3" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider(1)-4.webp" alt="Slide 4" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider(1)-5.webp" alt="Slide 5" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider(1)-6.webp" alt="Slide 6" width={125} height={100} />
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel2;
