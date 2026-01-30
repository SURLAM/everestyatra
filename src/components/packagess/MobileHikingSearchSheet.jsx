

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HikingTourPackages } from "@/data/HikingTourPackages";
import Link from "next/link";
import { X, Search } from "lucide-react";

export default function MobileHikingSearchSheet({ open, onClose }) {
  const [search, setSearch] = useState(" ");

  const filteredPackages = HikingTourPackages.filter(
    (pkg) =>
      pkg.name.toLowerCase().includes(search.toLowerCase()) ||
      pkg.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="
              fixed bottom-0 left-0 right-0 z-50
              bg-white/10 backdrop-blur-2xl
              border-t border-white/20
              rounded-t-xl p-6 max-h-[85vh] overflow-y-auto
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">
                Search Packages...
              </h3>
              <button onClick={onClose}>
                <X className="text-white/70" />
              </button>
            </div>

            {/* Input */}
            <div className="relative mb-5">
              <Search className="absolute left-4 top-3 text-white/60" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Everest, Annapurna, Luxury..."
                className="
                  w-full pl-12 pr-4 py-3 rounded-sm
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  text-white placeholder-white/60
                  focus:outline-none
                "
              />
            </div>

            {/* Results */}
            <div className="space-y-1">
              {filteredPackages.map((pkg) => (
                <Link
                  key={pkg.id}
                  href={pkg.slug}
                  onClick={onClose}
                  className="block px-4 py-4 rounded-sm hover:bg-white/10"
                >
                  <p className="text-white font-medium">{pkg.name}</p>
                  <p className="text-sm text-white/60">
                    {pkg.duration} • {pkg.category}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

