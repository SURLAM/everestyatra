"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Star,
  Clock,
  Users,
  Sparkles,
  Plane,
} from "lucide-react";

/* -------------------- PACKAGE DATA -------------------- */
const packages = [
  {
    title: "Annapurna Base Camp ",
    price: 4499,
    image:
      "https://ik.imagekit.io/2x1rpp2vh/CD425DE9-2E82-4950-9E6C-C533984E5FF9_1_201_a.jpeg",
    link: "/packages/annapurna-base-camp-trekking",
    limited: true,
    duration: "13 Nights / 14 Days",
    seats: "Limited",
    rating: "4.9",
    features: [
      "3-star/4-star hotel  ",
      "Professional Guided trekking",
      "All meals on trek",
      "Beauty of Annapurnas",
    ],
    description:
      "Beautiful Range of Annapurna Himalayas  - Nature of Annapurnas",
  },
  {
    title: "  Nepal luxury tours",
    price: 5499,
    image:
      "https://ik.imagekit.io/2x1rpp2vh/photo-1671888923921-76a3312978a2.avif",
    link: "/packages/nepal-luxury-tours",
    limited: false,
    duration: "15 Days",
    seats: "Available",
    rating: "4.8",
    features: [
      "4star/5star hotel",
      "Kathmandu-Pokhara-Chitwan",
      "Professional Guided tours",
      "Nature and Cultural Experience",
    ],
    description:
      "Experience Nepal tours with cultural charm, Natural beauty and warm hospitality",
  },
  {
    title: "Everest Base Camp ",
    price: 4999,
    image: "https://ik.imagekit.io/2x1rpp2vh/Everest_Base_Camp",
    link: "/packages/everest-base-camp-trek",
    limited: true,
    duration: "14 Nights / 15 Days",
    seats: "Limited",
    rating: "5.0",
    features: [
      "Fully Guided trekking",
      "All domestic flight / private transfers",
      "3Star hotels in Kathmandu",
      "Beauty of Everest-Top of the World",
    ],
    description:
      "An ultra-modern journey to the Everest Base Camp.Trip to Adventure Himalayas",
  },
];

/* -------------------- COMPONENT -------------------- */
export default function SignaturePackageGrid() {
  return (
    <section className="relative lg:pt-10  md:pt-36 pt-5">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-6 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className=" text-3xl sm:text-4xl lg:text-4xl font-serif font-extralight
          text-[#D6B36A] tracking-wide leading-tight"
        >
          Signature Luxury Journeys
        </motion.h2>

        <p className="mt-8 max-w-lg mx-auto text-sm sm:text-base text-white/70">
          Hand-crafted travel experiences designed for comfort, elegance and
          unforgettable memories.
        </p>

        <div className="mt-18 h-px w-9/12 mx-auto bg-linear-to-r from-transparent via-[#D6B36A]/70 to-transparent" />
      </div>

      {/* Grid */}
      <div className="mt-25 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-5 ">
        {packages.map((pkg, index) => (
          <motion.article
            key={pkg.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded
            bg-white/2 backdrop-blur-sm border border-white/10
            shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
          >
            {/* Image */}
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />

              {/* Limited badge */}
              {pkg.limited && (
                <span
                  className="absolute top-5 left-5 flex items-center gap-1
                rounded-full bg-emerald-500/90 px-4 py-1.5 text-xs font-medium text-white"
                >
                  <Sparkles size={14} />
                  Limited Seats
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-7 space-y-4">
              {/* Title */}
              <h3 className=" font-serif font-medium text-xl tracking-wide uppercase text-[#D6B36A]  ">
                {pkg.title}
              </h3>

              {/* Meta info */}
              <div className="flex flex-wrap gap-5  text-xs text-white/70">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {pkg.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14} /> {pkg.seats}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-[#D6B36A]" /> {pkg.rating}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 pt-3 text-sm text-white/70">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Plane size={14} className="mt-1 text-[#D6B36A]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Description */}
              <p className="text-sm text-white/60 line-clamp-2 pb-4">
                {pkg.description}
                <span className="ml-1 text-[#D6B36A] cursor-pointer">
                  View more
                </span>
              </p>

              {/* Footer */}
              <div className="pt-6 flex items-center justify-between border-t border-white/15">
                <div className="text-xl font-extralight text-[#D6B36A]/90">
                  From{" "}
                  <span className="ml-1 text-2xl font-extralight text-[#D6B36A]/90 ">
                    ${pkg.price}
                  </span>
                </div>

                <Link href={pkg.link}>
                  <motion.span
                    whileHover={{ gap: "1rem" }}
                    className="inline-flex items-center gap-2 rounded
                    bg-[#D6B36A] px-4 py-2 text-sm font-medium text-gray-900
                    shadow-lg transition-all"
                  >
                    Details
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </div>
            </div>

            {/* Glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0
            group-hover:opacity-100 transition duration-500
            bg-[radial-gradient(circle_at_top,rgba(214,179,106,0.18),transparent_65%)]"
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
