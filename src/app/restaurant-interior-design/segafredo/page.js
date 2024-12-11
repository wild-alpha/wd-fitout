import React from "react";
import Navbar from "@/app/Componenets/Navbar";
import CallButton from "@/app/Componenets/CallButton";
import WhatsAppButton from "@/app/Componenets/WhatsAppButton";
import Hero from "./Components/Hero";
import Segafredo from "./Components/Segafredo";
import Footer from "@/app/Componenets/Footer";

export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
    <Navbar />
    <CallButton />
    <WhatsAppButton />
    <Hero />
    <Segafredo />
    <Footer />
    </div>
  );
};