"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Star, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Safety Prirority",
    desc: "International safety standards, certified mountain guides, emergency protocols, and constant on-ground support.",
  },
  {
    icon: Users,
    title: "Himalayan Experts",
    desc: "Generations of mountain knowledge delivered by local experts born and raised in the Himalayas.",
  },
  {
    icon: MapPin,
    title: "Comfort Journeys",
    desc: "Every journey is personally curated around your pace, interests, comfort, and aspirations.",
  },
  {
    icon: Star,
    title: "Luxury in the Wild",
    desc: "Refined lodges, premium service, and elevated comfort — even in the most remote regions.",
  },
];

export default function EverestYatraRoyalFlagship() {
  return (
    <section className="relative bg-[#061421] text-white overflow-hidden">
      {/* Subtle Royal Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(114,146,48,0.06),transparent_40%)]" />

      <div className=" relative max-w-5xl mx-auto px-6 pt-32  sm:py-40">
        {/* ===== HERO TYPOGRAPHY ===== */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="uppercase tracking-[0.15em] text-yellow-500 text-xs lg:text-xs sm:text-sm mb-8">
            Everest Yatra • Nepal Himalayas
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-3xl xl:text-3xl font-semibold leading-relaxed text-white/90">
            Journey Beyond Travel
            <br />
            <span className="text-[#D6B36A]">
              Into the Heart of the Himalayas
            </span>
          </h1>

          <p className="mt-10 text-gray-200/80  sm:text-sm xl:text-sm  xl:font-sans leading-relaxed max-w-2xl mx-auto ">
            Everest Yatra curates refined Himalayan journeys defined by safety,
            authenticity, and quiet luxury — designed for travelers who value
            depth, elegance, and peace of mind.
          </p>

          {/* CTA */}
          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-2">
            <Link
              href="/packages"
              className="group inline-flex items-center justify-center gap-2 bg-[#D6B36A] hover:bg-[#D6B36A]/90 text-gray-900 px-5 py-2  rounded-full  text-md tracking-tight shadow-xl transition-all hover:-translate-y-1 font-medium"
            >
              Explore Journeys
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-5 gap-2 py-2 rounded-full  border  border-[#D6B36A]/40 text-[#D6B36A] text-md tracking-tight hover:border-[#D6B36A]/30 transition-all hover:translate-y-1"
            >
              Speak With an Expert
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Divider */}
        </motion.header>

        <div className=" mt-35 lg:mt-15 h-px lg:max-w-4/12 max-w-6/12 mx-auto bg-linear-to-l from-transparent via-[#D6B36A]/50 to-transparent" />

        {/* ===== TRUST PILLARS ===== */}
        <section className=" mt-28 sm:mt-36 lg:mt-10 ">
          <div className=" max-w-3xl mx-auto text-center mb-20 ">
            <p className="uppercase tracking-[0.15em] text-yellow-500 text-xs mb-6">
              The Everest Yatra Promise
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-3xl text-white/90 font-semibold leading-relaxed">
              Travel The Himalayas
              <br />
              <span className="text-[#D6B36A]">With Absolute Confidence</span>
            </h2>

            <p className=" max-w-2xl mx-auto mt-8 text-gray-300 text-sm sm:text-base leading-relaxed">
              True luxury is knowing every detail of your journey is handled
              with careand expertise.
            </p>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-5 ">
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  className="bg-white/3 backdrop-blur-md border border-white/10 rounded p-6 hover:border-yellow-500/25 hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-yellow-300/20 text-[#D6B36A] mb-6">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-lg  sm:text-xl font-serif lg:mb-6 mb-4 text-[#D6B36A]/90">
                    {item.title}
                  </h3>

                  <p className="text-gray-200/90 text-sm sm:text-base font-base leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
