import Head from "next/head";
import Navbar from "./Componenets/Navbar";
import CallButton from "./Componenets/CallButton";
import WhatsAppButton from "./Componenets/WhatsAppButton";
import EmblaCarousel from "./Componenets/EmblaCarousel";
import AboutSection from "./Componenets/AboutSection";
import Projects from "./Componenets/Projects";
import GetinContact from "./Componenets/GetinContact";
import Features from "./Componenets/Features";
import Areas from "./Componenets/Areas";
import Services from "./Componenets/Services";
import OurAuthorities from "./Componenets/OurAuthorities";
import EmblaCarousel2 from "./Componenets/EmblaCarousel2";
import OurClients from "./Componenets/OurClients";
import EmblaCarousel3 from "./Componenets/EmblaCarousel3";
import ContactUs from "./Componenets/ContactUs";
import Footer from "./Componenets/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
      <Head>
        <link rel="canonical" href="https://wdfitout.com" />
      </Head>
      <Navbar className="absolute top-0 z-10 w-screen" />
      <EmblaCarousel />
      <CallButton />
      <WhatsAppButton />
      <AboutSection />
      <div className="flex flex-wrap justify-center">
        <Projects />
      </div>
      <div className="flex flex-wrap justify-center">
        <GetinContact />
      </div>
      <div className="flex flex-wrap justify-center">
        <Features />
      </div>
      <div className="flex flex-wrap justify-center">
        <Areas />
      </div>
      <div className="flex flex-wrap justify-center mt-6">
        <Services />
      </div>
      <OurAuthorities />
      <EmblaCarousel2 />
      <OurClients />
      <EmblaCarousel3 />
      <ContactUs />
      <Footer />
    </main>
  );
}
