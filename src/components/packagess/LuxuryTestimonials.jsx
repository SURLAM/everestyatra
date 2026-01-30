"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPinned,
  Mountain,
  HeartHandshake,
  Home,
  Phone,
  Quote,
  ExternalLink,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const journey = [
  {
    icon: MessageCircle,
    title: "Private Consultation",
    desc: "A composed, one-to-one conversation to understand pace, expectations, and personal comfort.",
  },
  {
    icon: MapPinned,
    title: "Journey Architecture",
    desc: "Routes, acclimatization, and lodges are designed with balance, safety, and flow.",
  },
  {
    icon: Mountain,
    title: "Guided Himalayan Passage",
    desc: "Travel alongside certified local experts shaped by generational mountain knowledge.",
  },
  {
    icon: HeartHandshake,
    title: "Care & Assurance",
    desc: "Quiet health monitoring, refined meals, and calm logistical continuity throughout.",
  },
  {
    icon: Home,
    title: "A Meaningful Return",
    desc: "You return grounded, enriched, and changed — without rush or exhaustion.",
  },
];

const reviews = [
 
  {
    quote:
      "Everything felt intentional. The calm professionalism allowed us to fully absorb the Himalayas.",
    name: "Daniel R.",
    origin: "Switzerland",
  },
  {
    quote:
      "This wasn’t tourism — it was a carefully considered Himalayan experience built around us.",
    name: "Sophia M.",
    origin: "United Kingdom",
  },
  {
    quote:
      "Safety and comfort were constant. We always felt quietly supported without intrusion.",
    name: "Michael & Anna",
    origin: "Canada",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function JourneyTrustExcellence() {
  return (
    <section className="bg-[#061421] text-white pt-24 pb-22 border-t border-yellow-500/6 lg:px-10 px-6">
      <div className=" max-w-5xl mx-auto px-6 lg:px-10">
        {/* ================= INTRO ================= */}
        <div className="max-w-3xl mb-28">
          <p className="uppercase tracking-[0.45em] text-xs text-yellow-500/90 mb-8">
            The Everest Yatra Method
          </p>

          <h2 className="font-serif text-xl lg:text-3xl  leading-tight text-white/80">
            Crafted With Intention <br />
            <span className="text-[#D6B36A]/90">
              Executed With Calm Precision
            </span>
          </h2>

          <p className="mt-7 text-sm text-gray-300 leading-relaxed max-w-lg">
            Each journey follows a refined structure — unhurried, deliberate,
            and deeply respectful of both traveler and mountain.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className=" grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:gap-22 lg:bg-white/1 lg:p-15 p-2 lg:border border-white/3 rounded  ">
          {/* ================= TIMELINE ================= */}
          <div className="relative ">
            {/* Vertical Rail */}
            <div className="absolute left-5.5 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#D6B36A]/40 to-transparent" />

            <div className="space-y-10 ">
              {journey.map((step, i) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                    className="relative flex gap-7"
                  >
                    {/* Node */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full border border-[#D6B36A]/60 bg-[#061421] flex items-center justify-center">
                        <Icon size={15} className="text-[#D6B36A]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-lg ">
                      <h2 className="text-md font-serif mb-2 text-indigo-100/90">
                        {step.title}
                      </h2>
                      <p className="text-gray-300/80  text-sm font-light leading-relaxed ">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= TRUST LEDGER ================= */}
          <div>
            <div className="mt-12 lg:mt-0 ">
              <p className=" uppercase tracking-[0.45em] text-xs text-yellow-400/70 mb-7 pl-15  pt-20 lg:pt-0 ">
                Guest Reflections
              </p>
              <h2 className="font-serif text-xl  text-gray-200 pl-15 ">
                Words Offered Quietly After the Journey
              </h2>
            </div>

            <div className="space-y-10 mt-10">
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-15"
                >
                  {/* Quote Watermark */}
                  <Quote
                    size={18}
                    className="absolute left-0 top-0 text-[#D6B36A]/70"
                  />

                  <p className="text-gray-300/90 leading-relaxed text-sm max-w-xl font-light">
                    {r.quote}
                  </p>

                  <div className="mt-2 text-sm text-gray-500 tracking-wide border-t border-[#D6B36A]/20 pt-4">
                    <span className="text-white/90 font-medium">{r.name}</span>{" "}
                    — {r.origin}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 lg:mt-20 mb-10 flex justify-center">
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-4 sm:gap-5
          px-8 py-3
              rounded-full
              border border-[#D6B36A]/20
              text-[#D6B36A]/90
              tracking-wide
              hover:bg-[#D6B36A]
              hover:text-[#061421]
              hover:border-[#D6B36A]
              hover:shadow-lg
              hover:font-medium
              text-sm
            
              transition-all duration-300
            "
          >
            Consult With Our Expert
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
