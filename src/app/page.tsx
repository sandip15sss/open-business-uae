import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChoose />
      <Services />
      <Process />
      <FinalCTA />
    </>
  );
}
