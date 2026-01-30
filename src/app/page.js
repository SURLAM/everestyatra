export const metadata = {
  title: "Everest Yatra | Luxury Travel in Nepal Himalayas",
  description:
    "Explore Everest, Annapurna and beyond with expertly crafted luxury trekking and holiday experiences in Nepal.",
     icons: {
    icon: "/Nepal-logo.svg",
 
  },

};


import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import HeroInformatics from "@/components/hero/HeroInformatics";
import HeroCTA from "@/components/hero/HeroCTA";
import RelatedPackages from "@/components/packagess/RelatedPackages";
import LuxuryTestimonials from "@/components/packagess/LuxuryTestimonials";
import EverestyatraFlagship from "@/components/packagess/EverestYatraFlagshipRefined";

import Image from "next/image";






export default function Home() {
  return (
    <main className="bg-[#0A192C]">

      <Navbar />
      <Hero />
      <HeroInformatics />
      <RelatedPackages /> 
      <EverestyatraFlagship />
      <HeroCTA />
      <LuxuryTestimonials />
      
    </main>
  );
}
