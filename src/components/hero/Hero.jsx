"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroSlides from "@/data/heroSlides";
import HeroStories from "./HeroStories";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[80vh] ">
      <AnimatePresence>
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.07, opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw,
         (max-width: 1280px) 75vw,(max-width: 1024px) 80vw,
         1920px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* HERO CONTENT */}
      <div className=" relative w-full z-10 h-full flex items-center">
      
        <div className=" max-w-5xl mx-auto    items-center ">
          <motion.h1
            key={slide.title}
            initial={{ y:-10, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className=" text-4xl lg:text-4xl  mb-2 text-indigo-50  px-5 lg:font-bold md:font-semibold font-stretch-extra-condensed tracking-tight leading-tight "
          >
            {slide.title}
          </motion.h1>

          <motion.p
            initial={{ y:-10, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className=" max-w-5xl text-lg  text-yellow-500 my-2 px-6 font-semibold  lg:text-xl font-sans "
          >
            {slide.description}
          </motion.p>

          <Link
            href="/packages"
            className="
            inline-flex items-center gap-2
            bg-yellow-400 hover:bg-yellow-500 
            text-black font-sans font-semibold text-lg 
             py-3 px-6 lg:px-8 rounded mx-4 lg:mt-2
            transition duration-300 shadow-lg relative z-20 mb-20
          "
          >
            Explore Packages
            <ArrowRight className="w-7 h-7  transition-transform group-hover:translate-x-1 items-center " />
          </Link>
        
        </div>
      </div>

      {/* HERO STORIES */}
      <HeroStories />
    </section>
  );
}
