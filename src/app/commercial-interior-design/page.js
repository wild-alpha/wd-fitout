import React from "react";
import Navbar from "../Componenets/Navbar";
import CallButton from "../Componenets/CallButton";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import Hero from "./Components/Hero";
import CommercialProjects from "./Components/CommercialProjects";
import Footer from "../Componenets/Footer";

export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <CallButton />
      <WhatsAppButton />
      <Hero />
      <CommercialProjects />
      <Footer />
    </div>
  );
};