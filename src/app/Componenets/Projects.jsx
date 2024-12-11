import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects container w-full mt-10">
        <h2 className="text-white mb-4 text-lg lg:text-6xl font-bold text-center">
       INTERIOR DESIGN PROJECTS</h2>
        <div className="flex flex-wrap justify-center">
          
        <div className="w-full px-2 sm:w-1/2 mb-4 relative">
        <Link href={"/home-interior-design"}>
      <Image
        src="/images/dubai-interior-design-tv-lounge.webp"
        alt="Dubai Interior Design - Luxurious TV Lounge Design "
        title="Luxurious TV Lounge Designed by Dubai Interior Design Company"
        width={700}
        height={300}
        className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
                style={{ borderTopLeftRadius: '2rem' }}
      />
    <div className="absolute top-18 bottom-44 left-0 w-full flex items-center justify-center">
  <div
    className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center"
    style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}
  >
    <div className="flex-grow"></div>
    <p className="text-[#121212] text-lg font-semibold hover:text-[#c38d90]">
      HOME INTERIOR DESIGN
    </p>
    <div className="flex-grow"></div>
  </div>
</div>

    </Link>
    <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>Elevate your living experience with our premier 
        home Interior Design services in Dubai.
         As a best interior design company we have transformed 
         numerous residences in iconic locations such as
          Emaar Beachfront,Al Manara Center, Penthouse Dubai, 
          Jumeirah Beach Residence, and Atlantis The Royal. 
          We specialize in creating bold bespoke design.</p>
    </div>
  </div>

  <div className="w-full px-2 sm:w-1/2 mb-4 relative">
    <Link href="/restaurant-interior-design">
      <Image
        src="/images/dubai-interior-design-company-restaurant-counter.webp"
        alt="Dubai Interior Design - Modern Restaurant Counter Design "
        title="Modern Restaurant Design by Top Interior Designers in Dubai"
        width={700}
        height={300}
        className="w-full lg:rounded-tr-3xl hover:transform hover:-translate-y-2 transition-transform duration-500"
        />
    <div className="absolute top-18 bottom-40 left-0 w-full flex items-center justify-center hover:-translate-y-2">
  <div
    className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center"
    style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}
  >
    <div className="flex-grow"></div>
    <p className="text-[#121212] text-lg font-semibold hover:text-[#c38d90]">
      RESTAURANT INTERIOR DESIGN
    </p>
    <div className="flex-grow"></div>
  </div>
</div>

    </Link>
    <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>Creating a Mesmerizing restaurant interior design is
         important for setting the ambiance and enhancing the dining experience.
          At our interior design company in Dubai, we have expertise
           in transforming restaurant spaces into iconic 
           and refreshing environments with the efforts
            of our skilled interior designers.</p>
    </div>
  </div>

  <div className="w-full px-2 sm:w-1/2 mb-4 relative">
  <Link href="/retail-designs">
      <Image
        src="/images/barber-shop-retail-interior-design.webp"
        alt="Retail Barber shop - One of the leading Interior Design Companies in Dubai "
        title="Top Barber Shop Design by Interior Design company Dubai"
        width={700}
        height={300}
        className="w-full lg:rounded-bl-3xl hover:transform hover:-translate-y-2 transition-transform duration-500"
        />
    <div className="absolute top-18 bottom-36 left-0 w-full flex items-center justify-center">
  <div
    className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center"
    style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}
  >
    <div className="flex-grow"></div>
    <p className="text-[#121212] text-lg font-semibold hover:text-[#c38d90]">
      RETAIL DESIGNS
    </p>
    <div className="flex-grow"></div>
  </div>
</div>

    </Link>
    <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>Unlock the potential of your retailing space with our bold bespoke
         design specifically for Dubai. As one of the leading interior design
          companies in Dubai, we have curated a portfolio of successful projects
         like Peaky Blinders Barber Shop & Al Manal Centre.	</p>
    </div>
  </div>

  <div className="w-full px-2 sm:w-1/2 mb-4 relative">
    <Link href="/commercial-interior-design">
      <Image
        src="/images/corporate-office-reception-interior-design-dubai.webp"
        alt="Corporate office reception interior design in Dubai"
        title="Luxurious Modern Villa Interior Design with Premium Aesthetic in Dubai by WeDo Interiors"
        width={700}
        height={300}
        className="w-full rounded-b-3xl md:rounded-lg lg:rounded-br-5xl lg:rounded-bl-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
        style={{ borderBottomRightRadius: '2rem' }}
        />
    <div className="absolute top-18 bottom-40 lg:bottom-36 left-0 w-full flex items-center justify-center">
  <div
    className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center"
    style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}
  >
    <div className="flex-grow"></div>
    <p className="text-[#121212] text-lg font-semibold hover:text-[#c38d90]">
      COMMERCIAL INTERIOR DESIGN
    </p>
    <div className="flex-grow"></div>
  </div>
</div>

    </Link>
    <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>Explore the pinnacle of commercial interior design Dubai with 
        our esteemed interior designer services. As a best interior 
        designing company Dubai, we are specialize in crafting 
        luxurious interiors. From sleek offices in Business Bay 
        to prestigious hotels and in Atlantis the Royal,
         showcase our commitment to excellence.	 </p>
    </div>
  </div> 
        </div>
      </div>
    </section>
  );
};

export default Projects;