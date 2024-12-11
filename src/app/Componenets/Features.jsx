import React from "react";
import Link from "next/link";
import Image from "next/image";


const Features = () => {
  return (
    <section id="features">
      <div className="features container w-full mt-2 px-2">
        <h2 className="text-white mb-8 text-lg lg:text-6xl font-bold text-center">
          INTERIOR DESIGN FEATURES WE PROVIDE
        </h2>
        <div className="flex flex-wrap justify-center">
          
          <div className="w-full sm:w-1/3 sm:px-2 mb-4 sm:mb-4 relative">
          <Link href={"/home-interior-design"}>
              <Image
                src="/images/dubai-interior-design-premium-villa-sitting-room.webp"
                alt="Dubai's Top Interior Design Company- Luxurious Villa Interior Design"
                title="Luxurious Interior Design for Villas in Dubai"
                width={700}
                height={300}
                className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
                style={{ borderTopLeftRadius: '2rem' }}
                />
              <div className="absolute top-18 bottom-6 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center" style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}>
                  <div className="flex-grow"></div>
                  <h3 className="text-[#121212] text-lg lg:text-lg font-semibold hover:text-[#c38d90]">VILLA INTERIOR DESIGN</h3>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 sm:px-2 mb-4 sm:mb-4 relative">
          <Link href={"/home-interior-design"}>
              <Image
                src="/images/dubai-modern-apartment-living-room.webp"
                alt="Modern living room interior design in Dubai by We Do Interior Design Dubai"
                title="Modern Apartment Living Room Design in Dubai"
                width={700}
                height={300}
                className="w-full 
                           hover:transform hover:-translate-y-2 transition-transform duration-500"/>
              <div className="absolute top-18 bottom-6 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center" style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}>
                  <div className="flex-grow"></div>
                  <h3 className="text-[#121212] text-lg lg:text-lg font-semibold hover:text-[#c38d90]">APARTMENT INTERIOR DESIGN</h3>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 sm:px-2 mb-4 sm:mb-4 relative">
          <Link href={"/restaurant-interior-design"}>
              <Image
                src="/images/dubai-modern-luxury-restaurant-interior-design.webp"
                alt="Modern luxury restaurant interior design in Dubai, showcasing a sophisticated ambiance"
                title="Aesthetic Interior Design at Our Modern Luxury Restaurant"
                width={700}
                height={300}
                className="w-full lg:rounded-tr-3xl hover:transform hover:-translate-y-2 transition-transform duration-500"/>
              <div className="absolute top-18 bottom-6 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center" style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}>
                  <div className="flex-grow"></div>
                  <h3 className="text-[#121212] text-lg lg:text-lg font-semibold hover:text-[#c38d90]">RESTAURANT DESIGN</h3>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 sm:px-2 mb-4 sm:mb-4 relative">
          <Link href={"/commercial-interior-design"}>
              <Image
                src="/images/dubai-premium-office-interior-design-company.webp"
                alt="Premium office Interior design in Dubai with marble floors, wood table, and leather chairs"
                title="Design Your Dream Office: Luxury Interior Designers in Dubai "
                width={700}
                height={300}
                className="w-full hover:transform hover:-translate-y-2 transition-transform duration-500"/>
              <div className="absolute top-18 bottom-6 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center" style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}>
                  <div className="flex-grow"></div>
                  <h3 className="text-[#121212] text-lg lg:text-lg font-semibold hover:text-[#c38d90]">OFFICE INTERIOR DESIGN</h3>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 sm:px-2 mb-4 sm:mb-4 relative">
            <Link href={"/"}>
              <Image
                src="/images/dubai-luxury-pink-beauty-salon-interior.webp"
                alt="Modern luxury beauty salon Design in Dubai featuring a sleek pink aesthetic and premium equipment"
                title="Top Interior Design Company crafted: Modern Luxury Pink Beauty Salon in Dubai"
                width={700}
                height={300}
                className="w-full hover:transform hover:-translate-y-2 transition-transform duration-500"/>
              <div className="absolute top-18 bottom-6 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center" style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}>
                  <div className="flex-grow"></div>
                  <h3 className="text-[#121212] text-lg lg:text-lg font-semibold hover:text-[#c38d90]">BEAUTY SALON DESIGNS</h3>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 sm:px-2 mb-4 sm:mb-4 relative">
          <Link href={"/restaurant-interior-design"}>
              <Image
                src="/images/dubai-modern-cafe-interior-design.webp"
                alt="Modern cafe interior in Dubai with comfortable seating and minimalist design"
                title="Relax and Recharge at Our Modern Cafe in Dubai Designed by Interior Design Company"
                width={700}
                height={300}
                className="w-full hover:transform hover:-translate-y-2 transition-transform duration-500"/>
              <div className="absolute top-18 bottom-6 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center" style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}>
                  <div className="flex-grow"></div>
                  <h3 className="text-[#121212] text-lg lg:text-lg font-semibold hover:text-[#c38d90]">CAFE INTERIOR DESIGN</h3>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 sm:px-2 mb-4 sm:mb-4 relative">
            <Link href={"/"}>
              <Image
                src="/images/dubai-luxury-clinic-interior.webp"
                alt="Modern clinic interior in Dubai featuring advanced equipment and a comfortable patient waiting area"
                title="Experience Advanced Care in a Modern Clinic Setting Dubai"
                width={700}
                height={300}
                className="w-full lg:rounded-bl-3xl hover:transform hover:-translate-y-2 transition-transform duration-500"/>
              <div className="absolute top-18 bottom-6 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center" style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}>
                  <div className="flex-grow"></div>
                  <h3 className="text-[#121212] text-lg lg:text-lg font-semibold hover:text-[#c38d90]">CLINICS INTERIOR DESIGN</h3>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 sm:px-2 mb-4 sm:mb-4 relative">
            <Link href={"/"}>
              <Image
                src="/images/dubai-five-star-hotel-bedroom-design.webp"
                alt="Luxury hotel Interior Design Dubai: Bedroom with king bed, city view, balcony, and private bathroom"
                title="Experience Unparalleled Luxury in  Dubai Five-Star Hotel Designed by We Do Interior Design"
                width={700}
                height={300}
                className="w-full hover:transform hover:-translate-y-2 transition-transform duration-500"/>
              <div className="absolute top-18 bottom-6 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center" style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}>
                  <div className="flex-grow"></div>
                  <h3 className="text-[#121212] text-lg lg:text-lg font-semibold hover:text-[#c38d90]">HOTEL INTERIOR DESIGN</h3>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/3 sm:px-2 mb-4 sm:mb-4 relative">
            <Link href={"/"}>
              <Image
                src="/images/dubai-modern-luxury-boutique-interior-design.webp"
                alt="Modern luxury boutique interior Design in Dubai showcasing designer clothing premium selection."
                title="Discover Designer Luxury Modern Boutique Interior Design Company in Dubai"
                width={700}
                height={300}
                className="w-full rounded-b-3xl md:rounded-lg lg:rounded-br-5xl lg:rounded-bl-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
        style={{ borderBottomRightRadius: '2rem' }}
        />
                 <div className="absolute top-18 bottom-6 left-0 w-full flex items-center justify-center">
                <div className="bg-gray-200 bg-opacity-50 px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 sm:py-1.5 md:py-2 lg:py-2 xl:py-4 2xl:py-5 text-center flex flex-col justify-center" style={{ width: '97%', maxWidth: '100vw', height: '4vh' }}>
                  <div className="flex-grow"></div>
                  <h3 className="text-[#121212] text-lg lg:text-lg font-semibold hover:text-[#c38d90]">BOUTIQUE DESIGNS</h3>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </Link>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Features;