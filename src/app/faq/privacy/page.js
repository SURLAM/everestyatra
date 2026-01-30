"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const SECTIONS = [
  { id: "privacy", title: "Privacy Policy", text: "We protect your personal data and use it only to provide and improve Everest Yatra services.We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services" },

  { id: "collection", title: "Information Collection", text: "We collect name, email, phone, address, and payment data when required for bookings and communication." },
  { id: "sharing", title: "Sharing Policy", text: "We never sell your data. Trusted partners receive limited information only to provide services." },
  { id: "cookies", title: "Cookies", text: "Cookies help personalize your experience and remember your preferences." },
  { id: "security", title: "Security", text: "We protect data using SSL encryption and secure infrastructure." },
  { id: "mobile", title: "Mobile Terms", text: "SMS users may receive updates and offers. You can stop anytime by texting STOP." }
];

export default function PrivacyPage() {
  const [open, setOpen] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0A192C] text-white/90 overflow-y-auto">

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.75 bg-amber-400 origin-left z-50"
      />

      <div className="max-w-5xl mx-auto px-4 lg:px-16 py-28 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* Sticky Menu */}
        <aside className="hidden lg:block sticky top-28 space-y-2">
          <p className="text-sm pt-4  tracking-tight uppercase text-white/40">Legal</p>
          {SECTIONS.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className=" bg-white/4 items-center text-start pl-6 p-2  rounded-sm  block text-sm text-white/70 hover:text-amber-400 transition "
            >
              {s.title}
            </a>
          ))}
        </aside>

        {/* Content */}
        <main className="lg:col-span-3 space-y-18">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl lg:text-3xl font-serif tracking-tight mb-4 mt-10 text-center md:text-center ">
              Privacy & Mobile Terms
            </h1>
            <p className="text-gray-400 text-md text-center md:text-center ">

              Transparency and trust define Everest Yatra.  
              Learn how your information is protected.
            </p>
          </motion.div>

            <div className="mt-10  h-px w-6/12 mx-auto bg-linear-to-r from-transparent via-[#D6B36A]/70 to-transparent" />


          {/* Sections */}
          <div className=" space-y-4 mt-20 ">
            {SECTIONS.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 rounded-sm bg-white/3 backdrop-blur"
              >
                <button
                  onClick={() => setOpen(open === s.id ? null : s.id)}
                  className="w-full flex justify-between items-center px-7 py-4 hover:bg-white/7 hover:text-amber-400 transition"
                >
                  <span className="text-md text-white/80 font-light">{s.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition ${
                      open === s.id ? "rotate-180 text-amber-400" : "text-amber-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open === s.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 py-6 text-white/70 leading-relaxed border-t border-yellow-400/20">
                        {s.text}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
