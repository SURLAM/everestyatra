"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Mountain, Users,  } from "lucide-react";

export default function PackageCard({ pkg }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 40 }}
      className="
        group
        bg-white/2 border border-white/7
        rounded
       
        overflow-hidden
        shadow-[0_25px_60px_rgba(0,0,0,0.08)]
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.18)]
        flex flex-col
        relative
      "
    >
      {/* ================= IMAGE + BADGES ================= */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* ⭐ Best Seller Badge */}
        {pkg.popular && (
          <div className="absolute top-47 -left-1 bg-cyan-900 text-green-100 px-4 py-2 rounded-sm text-sm font-medium shadow-lg flex items-center gap-1">
          
            <Star size={14} /> Best Seller
          </div>
        )}

        {/* 🟢 Limited Seats */}
        {pkg.limitedSeats && (
          <div className="absolute top-58 -left-1 bg-green-800 text-white px-4 py-2 rounded-sm text-sm font-medium flex items-center gap-1">
            <Users size={14} /> Limited Seats
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="px-10 pt-8 pb-3 flex flex-col flex-1 justify-between">
        <div>
          {/* TITLE */}
          <h3 className="text-xl font-inter text-gray-100 leading-snug">
            {pkg.title}
          </h3>

          {/* REGION + ALTITUDE */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-gray-400 text-sm">
            {pkg.region && (
              <div className="flex items-center gap-1">
                <MapPin size={18} /> {pkg.region}
              </div>
            )}
            {pkg.altitude && (
              <div className="flex items-center gap-1">
                <Mountain size={16} /> Max {pkg.altitude}m
              </div>
            )}
          </div>

          {/* DURATION + DIFFICULTY */}
          <p className="mt-4  text-sm text-[#D6B36A]/70 tracking-wide">
            {pkg.duration} • {pkg.difficulty}
          </p>
          <p className="mt-4  text-sm text-[#D6B36A]/70 tracking-wide">
            {pkg.Bestmonth} 
          </p>

          {/* DIVIDER */}
          <div className="my-5 h-px w-full bg-linear-to-r from-transparent via-[#D6B36A]/80 to-transparent" />

          {/* HOVER REVEAL HIGHLIGHTS */}
          {pkg.highlights && (
            <ul className="hidden group-hover:flex flex-col gap-2 text-gray-200 text-sm mb-4 transition-all duration-500">
              {pkg.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ArrowRight size={14} /> {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ================= CTA + PRICE ================= */}
        <div className="my-4 flex flex-col gap-5">
          <p className="text-5xl font-extralight text-[#D6B36A]/90">
            {pkg.price}
          </p>

          <Link
            href={`/packages/${pkg.slug}`}
            className="
              inline-flex items-center justify-center gap-4
              px-6 py-3 font-semibold
              rounded mt-2
              bg-[#D6B36A]/90
             
              hover:bg-[#D6B36A] hover:text-gray-700
              text-[#05213c]
              font-sans
              tracking-wide
              transition
            "
          >
            View Details
            <ArrowRight
              size={24}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}


