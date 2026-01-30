"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function PackageAccordion({ pkg }) {
  return (
    <section className="max-w-5xl mx-auto space-y-4 mt-20 ">
      <Accordion title="Details Itinerary" items={pkg.itinerary} />
      <Accordion title="Included" items={pkg.includes} />
      <Accordion title="Eexcludes" items={pkg.excludes} />
    </section>
  );
}

function Accordion({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" border border-white/10 rounded-sm overflow-hidden bg-linear-to-t from-cyan-400/10 via-cyan-900/10 to-transparent  shadow-sm  hover:border-white/20 ">
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left pointer-cursor"
      >
        <h3 className="text-lg md:text-lg font-medium text-white/80 hover:text-yellow-400 cursor-pointer">
          {title}
        </h3>

        {/* Icon */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="gray-100"
        >
          <ChevronDown className="text-yellow-400" size={22} />
        </motion.span>
      </button>

      {/* CONTENT */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1], // luxury easing
            }}
            className="overflow-hidden"
          >
            <div className="px-4 py-10 text-gray-300 bg-[#0B1C2D] border-t border-gray-700 text-md font-stretch-30%">
              <ul className="space-y-6 list-image-none pl-5 ">
                {items.map((item, i) => (
                  <li key={i} className="bg-white/3 py-4 px-5 rounded leading-relaxed border-b  border-white/7 text-gray-300 ">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
