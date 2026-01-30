"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { HikingTourPackages } from "@/data/HikingTourPackages";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MobileHikingSearchSheet from "./MobileHikingSearchSheet";

/* ---------------- Helpers ---------------- */
const parseAltitude = (alt) => Number(alt.replace("m", ""));
const parseDurationMax = (duration) => {
  const nums = duration?.match(/\d+/g);
  return nums ? Math.max(...nums.map(Number)) : 0;
};

export default function HikingHeroSearch() {
  const [search, setSearch] = useState("");
  const [maxAltitude, setMaxAltitude] = useState("");
  const [maxDays, setMaxDays] = useState("");
  const [open, setOpen] = useState(false);
  const [recent, setRecent] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapperRef = useRef(null);

  /* ---------------- Recent Searches ---------------- */
  useEffect(() => {
    setRecent(JSON.parse(localStorage.getItem("recentSearches") || "[]"));
  }, []);

  const saveRecent = (value) => {
    if (!value) return;
    const updated = [value, ...recent.filter((v) => v !== value)].slice(0, 6);
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const removeRecent = (value) => {
    const updated = recent.filter((v) => v !== value);
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const clearRecent = () => {
    setRecent([]);
    localStorage.removeItem("recentSearches");
  };

  /* ---------------- Filter ---------------- */
  const filtered = HikingTourPackages.filter((pkg) => {
    const text =
      pkg.name.toLowerCase().includes(search.toLowerCase()) ||
      pkg.category.toLowerCase().includes(search.toLowerCase());

    const altitudeMatch = maxAltitude
      ? parseAltitude(pkg.altitude) <= Number(maxAltitude)
      : true;

    const durationMatch = maxDays
      ? parseDurationMax(pkg.duration) <= Number(maxDays)
      : true;

    return text && altitudeMatch && durationMatch;
  });

  /* ---------------- Outside Click ---------------- */
  useEffect(() => {
    const close = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <section className="  w-full max-w-6xl mx-auto relative flex justify-center">
      <div className="hidden md:block w-full max-w-3xl mx-auto ">
        <div ref={wrapperRef} className="relative">
          {/* 🔍 SEARCH BAR */}
          <div className="relative  flex items-center  backdrop-blur-xs  border border-[#D6B36A]/60 rounded-lg pr-1 pl-3 py-1 ">
            <Search className="text-white/80" />

            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              placeholder="Search Packages ..."
              className="
                flex-1 bg-transparent text-center text-white/80
                placeholder-white/60 focus:outline-none
              "
            />

            {/* Clear input */}
            {search && (
              <button onClick={() => setSearch("")} className="text-white/70">
                <X size={18} />
              </button>
            )}

            {/* SEARCH BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
                ml-3 px-6 py-2 
                text-gray-200 font-sans-serif text-lg
                border-l border-[#D6B36A]/60
                hover:bg-yellow-400 hover:text-gray-800  transition  mr-2
              "
            >
              Search
            </button>
          </div>

          {/* ================= DROPDOWN ================= */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="
                  absolute mt-4  z-50
                  bg-white/5 backdrop-blur-3xl
                  border border-white/10 rounded-lg overflow-hidden w-full 
                "
              >
                {/* Filters */}
                <div className="grid grid-cols-2 gap-3 p-4 border-b border-white/5 ">
                  <select
                    value={maxAltitude}
                    onChange={(e) => setMaxAltitude(e.target.value)}
                    className="bg-white/10 text-white px-3 py-2 rounded-lg border border-white/10"
                  >
                    <option value="">Max Altitude</option>
                    <option value="4000">≤ 4000m</option>
                    <option value="5000">≤ 5000m</option>
                    <option value="6000">≤ 6000m</option>
                  </select>

                  <select
                    value={maxDays}
                    onChange={(e) => setMaxDays(e.target.value)}
                    className="bg-white/10 text-white px-3 py-2 rounded-lg border border-white/10"
                  >
                    <option value="">Max Days</option>
                    <option value="7">≤ 7 days</option>
                    <option value="10">≤ 10 days</option>
                    <option value="14">≤ 14 days</option>
                    <option value="20">≤ 20 days</option>
                  </select>
                </div>

                {/* Recent Searches */}
                {!search && recent.length > 0 && (
                  <div className="p-4 border-b border-white/10">
                    <div className="flex justify-between mb-2">
                      <p className="text-xs text-white/50">Recent Searches</p>
                      <button
                        onClick={clearRecent}
                        className="text-xs text-red-400"
                      >
                        Clear All
                      </button>
                    </div>

                    {recent.map((item) => (
                      <div
                        key={item}
                        className="flex justify-between items-center py-2 border-b border-white/10"
                      >
                        <span className="text-white/80 text-sm">{item}</span>
                        <button onClick={() => removeRecent(item)}>
                          <X size={14} className="text-red-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Results */}
                {filtered.length ? (
                  filtered.map((pkg) => (
                    <Link
                      key={pkg.id}
                      href={pkg.slug}
                      onClick={() => {
                        saveRecent(pkg.name);
                        setOpen(false);
                      }}
                      className="
                        block px-6 py-4
                        border-b border-white/10
                        hover:bg-white/10 transition
                      "
                    >
                      <p className="text-white font-medium">{pkg.name}</p>
                      <p className="text-sm text-white/60">
                        {pkg.duration} • {pkg.altitude} • {pkg.category}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="px-6 py-4 text-white/60">No packages found</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Trigger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="
          md:hidden w-[90%] py-4 px-5
          rounded-2xl bg-white/10 backdrop-blur-xl
          border border-white/20
          flex items-center gap-3 text-white/70
        "
      >
        <Search /> Search Packages
      </button>

      <MobileHikingSearchSheet
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </section>
  );
}
