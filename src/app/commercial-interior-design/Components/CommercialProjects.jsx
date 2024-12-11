import React from "react";
import Link from "next/link";
import Image from "next/image";

const CommercialProjects = () => {

  return (
    <section id="#projects">
    <div className="projects container w-full mt-10">
      <div className="flex flex-wrap justify-center">
        
      <div className="w-full px-2 sm:w-1/2 mb-4 relative">
  <Link href="commercial-interior-design/star-tech">
    <Image
       src="/images/commercial (2).webp"
      alt="Residential Project"
      width={700}
      height={300}
      className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
              style={{ borderTopLeftRadius: '2rem' }}
    />
  <div className="absolute top-18 bottom-40 lg:bottom-36 left-0 w-full flex items-center justify-center">
<div
  className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center"
  style={{ width: '98%', maxWidth: '100vw', height: '4vh' }}
>
  <div className="flex-grow"></div>
  <p className="text-[#121212] text-xl lg:text-lg font-semibold hover:text-[#c38d90]">
    STAR TECH COMPANY
  </p>
  <div className="flex-grow"></div>
</div>
</div>

  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
    <p>WE DO Interior Design And Fitout designed a smart and functional office for Star Tech Company in Dubai. The space is perfect for today's tech teams, with everything they need to work efficiently. WE DO helps Dubai businesses create offices that work as hard as they do. Contact us to discuss your project! 
      </p>
  </div>
</div>

<div className="w-full px-2 sm:w-1/2 mb-4 relative">
<Link href="commercial-interior-design/sns">
    <Image
       src="/images/commercial (3).webp"
      alt="Residential Project"
      width={700}
      height={300}
      className="w-full lg:rounded-tr-3xl"
    />
  <div className="absolute top-18 bottom-52 lg:bottom-36 left-0 w-full flex items-center justify-center">
<div
  className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center"
  style={{ width: '98%', maxWidth: '100vw', height: '4vh' }}
>
  <div className="flex-grow"></div>
  <p className="text-[#121212] text-xl lg:text-lg font-semibold hover:text-[#c38d90]">
    SAUDI NETWORK SERVICES
  </p>
  <div className="flex-grow"></div>
</div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
    <p>As an Interior Design and Fitout comapny, we  designed a professional and modern workspace for Saudi Network Services in Dubai. The clean design keeps things organized and efficient, perfect for their team's needs. WE DO, Dubai's interior design experts, create offices that inspire productivity. Want a workspace that works for you? Contact WE DO Interior Design & Fitout today!</p>
  </div>
</div>

<div className="w-full px-2 sm:w-1/2 mb-4 relative">
<Link href="commercial-interior-design/nest-finder">
    <Image
       src="/images/commercial (4).webp"
      alt="Residential Project"
      width={700}
      height={300}
      className="w-full"
      
    />
  <div className="absolute top-18 bottom-44 lg:bottom-36 left-0 w-full flex items-center justify-center">
<div
  className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center"
  style={{ width: '98%', maxWidth: '100vw', height: '4vh' }}
>
  <div className="flex-grow"></div>
  <p className="text-[#121212] text-xl lg:text-lg font-semibold hover:text-[#c38d90]">
    NEST FINDER
  </p>
  <div className="flex-grow"></div>
</div>
</div>

  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
    <p>Turn your Dubai house into a dream home with WE DO Interior Design And Fitout! For Nest Finder, we created a cozy and beautiful living space that feels just right. WE DO, Dubai's interior design experts, can help you find your perfect interior style, whether it's modern, traditional, or something in between. Let's create your ideal nest together!</p>
  </div>
</div>

<div className="w-full px-2 sm:w-1/2 mb-4 relative">
<Link href="commercial-interior-design/meby-tourism">
    <Image
       src="/images/commercial (5).webp"
      alt="Residential Project"
      width={700}
      height={300}
      className="w-full"
      
    />
  <div className="absolute top-18 bottom-52 lg:bottom-36 left-0 w-full flex items-center justify-center">
<div
  className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center"
  style={{ width: '98%', maxWidth: '100vw', height: '4vh' }}
>
  <div className="flex-grow"></div>
  <p className="text-[#121212] text-xl lg:text-lg font-semibold hover:text-[#c38d90]">
    MEBY TOURISM
  </p>
  <div className="flex-grow"></div>
</div>
</div>

  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
    <p>Picture yourself planning your dream vacation at Meby Tourism's Dubai office! WE DO Interior Design And Fitout created a space that feels inspiring and inviting. The design reflects the excitement of travel, making you want to explore the world. WE DO, Dubai's interior design experts, helps businesses like Meby Tourism create a welcoming atmosphere for their clients. Let's design your dream workspace!

    </p>
  </div>
</div>

      </div>
    </div>
  </section>
);
};



export default CommercialProjects;