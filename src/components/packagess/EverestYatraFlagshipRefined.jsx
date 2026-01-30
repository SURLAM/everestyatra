"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Mountain, Users, ArrowRight } from "lucide-react";
import { useRef } from "react";

const packages = [
  {
    title: "Everest Base Camp",
    duration: "15 Days",
    level: "Moderate",
    link: "/packages/everest-base-camp-trek",
  },
  {
    title: "Annapurna Base Camp",
    duration: "14 Days",
    level: "Moderate",
    link: "/packages/annapurna-base-camp-trekking",
  },
  {
    title: "Poonhill-Ghorepani-Ghandruk",
    duration: "11 Days",
    level: "Easy–Moderate",
    link: "/packages/poonhill-ghorepani-ghandruk-trek",
  },
  {
    title: " Nepal Luxury Tours",
    duration: "15 Days",
    level: "Comfort Focused",
    link: "/packages/nepal-luxury-tours",
  },
  {
    title: "Khumai-Korchan Trekking",
    duration: "10 Days",
    level: "Comfort Focused",
    link: "/packages/khumai-korchan-trekking",
  },
  {
    title: "Annapurna Circuit Tilicho-lake",
    duration: "14 Days",
    level: "Challenging",
    link: "/packages/annapurna-circuit-trekking",
  },
];

export default function EverestYatraFlagshipRefined() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <main className="bg-[#061421] text-white scroll-smooth">
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://ik.imagekit.io/2x1rpp2vh/EverestHimalayas.webp)",
          }}
        />
        <div className="absolute inset-0  bg-linear-to-b from-transparent via-black/25 to-[#061421]/90" />

        <motion.div
          style={{ y: yHero }}
          className="relative z-10 max-w-5xl mx-auto px-7  text-center pt-20"
        >
          <p className="uppercase tracking-[0.35em] text-[11px] text-yellow-500 pt-96 lg:pt-0mt-40 lg:mt-0">
            Since the Himalayas Became Home
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-yellow-500/90 my-10 transition-transform duration-400 ease-out hover:scale-110">
            Discover "Mt.EVEREST " <br />
            <span className="text-indigo-50 font-extralight lg:text-5xl transition-transform duration-400 ease-out hover:scale-110">
              With Absolute Confidence
            </span>
          </h1>

          <p className=" max-w-2xl mx-auto text-gray-100 text-sm sm:text-lg leading-relaxed  transition-transform duration-400 ease-out hover:scale-110">
            Thoughtfully designed journeys guided by local experts — where
            safety, authenticity, and quiet luxury define every step.
          </p>
        </motion.div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:mt-10 lg:gap-2 gap-8 text-center text-sm">
          {[
            { icon: ShieldCheck, text: "International Safety Standards" },
            { icon: Users, text: "Local Himalayan Experts" },
            { icon: Mountain, text: "Carefully Crafted Routes" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-6">
                <Icon className="text-[#D6B36A]" size={28} />
                <p className="text-md text-gray-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-16 mt-10 lg:mb-15">
        <div className="max-w-4xl mx-auto  rounded border border-white/6 py-26 bg-white/1">
          <h2 className="font-serif text-3xl text-center text-gray-300 mb-26">
            Classic Adventures
          </h2>

          <div className="h-px w-5/12 mx-auto bg-linear-to-r from-transparent via-[#D6B36A]/90 to-transparent mb-16" />

          <div className="space-y-4 max-w-xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-between border-b border-[#D6B36A]/10 pb-5"
              >
                {/* LEFT */}
                <div className="px-7">
                  <h3 className="text-lg text-white/80 mb-1">{pkg.title}</h3>
                  <p className="text-sm text-[#D6B36A]/70">
                    {pkg.duration} – {pkg.level}
                  </p>
                </div>

                {/* RIGHT */}
                {pkg.link && (
                  <Link
                    href={pkg.link}
                    className="text-sm text-[#D6B36A]/80 inline-flex items-center gap-2 hover:gap-3 transition-all pr-7"
                  >
                    View <ArrowRight size={18} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://ik.imagekit.io/2x1rpp2vh/Annapurna_Tilicho.webp)",
          }}
        />
        <div className="absolute inset-0  bg-linear-to-b from-transparent via-black/20 to-[#061421]/90" />

        <motion.div
          style={{ y: yHero }}
          className="relative z-10 max-w-6xl mx-auto px-7  text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[11px] text-yellow-500 pt-96 transition-transform duration-400 ease-out hover:scale-110">
            Explore the Himalayas with Confidence
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-yellow-500/90  mt-60 transition-transform duration-400 ease-out hover:scale-110">
            Explore "ANNAPURNA " <br />
            <span className="text-indigo-50 font-extralight lg:text-5xl  ">
              With Family And Friends.
            </span>
          </h1>

          <p className="mt-10 max-w-2xl mx-auto text-gray-100 text-sm sm:text-lg leading-relaxed transition-transform duration-400 ease-out hover:scale-110 ">
            Thoughtfully designed journeys guided by local experts — where
            safety, authenticity, and quiet luxury define every step.
          </p>
        </motion.div>
      </section>

    
    </main>
  );
}
