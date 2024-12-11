"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"; // Note the import without curly braces
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel3() {
  // Configuration for Embla Carousel with drag threshold
  const options = {
    loop: true,
    dragFree: false,  // You can use dragFree or adjust other parameters as needed
    draggable: true,
    threshold: 5,    // Custom drag threshold value (in pixels)
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
          <Image src="/images/slider-(2)-1.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-2.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-3.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-4.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-5.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-6.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-7.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images//slider-(2)-8.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-9.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-10.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-11.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-12.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-13.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-14.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-15.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-16.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-17.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-18.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-19.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-20.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-21.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-22.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-23.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-24.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-25.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-26.webp" alt="Slide 1" width={125} height={100} />
        </div>
        <div className="embla__slide flex items-center justify-center flex-[0_0_16.6667%]">
          <Image src="/images/slider-(2)-27.webp" alt="Slide 1" width={125} height={100} />
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel3;