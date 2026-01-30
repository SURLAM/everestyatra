

"use client";
import { motion } from "framer-motion";

export default function PackageHero({ pkg }) {
  if (!pkg) return null;

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Hero Image */}
      <motion.img
        src={pkg.image}
        alt={pkg.title}
        initial={{ scale: 1.4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-3  mb-45 ">
          <h1 className=" text-4xl md:text-5xl  lg:text-6xl xl:text-7xl font-stretch-extra-condensed text-gray-100 font-serif font-extralight ">

            {pkg.title}
          </h1>

          <p className="mt-4 text-lg lg:text-2xl text-yellow-400 font-light">
            {pkg.duration} • {pkg.difficulty}
          </p>
        </div>
      </div>
    </section>
  );
}
