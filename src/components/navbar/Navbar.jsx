"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  Mountain,
  ChevronDown,
  ArrowRight,
  SquareArrowOutUpRight,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileTrekOpen, setMobileTrekOpen] = useState(false);
  const megaRef = useRef(null);

  // Close mega menu on outside click (desktop)
  useEffect(() => {
    const handler = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full h-16 md:h-18 z-9999 bg-[#0B1C2D] isolate">
        <div className="max-w-7xl mx-auto py-6 px-6  h-full flex items-center justify-between ">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/everestyatralogo.svg"
              alt="EVERESTYATRA Logo"
              width={160}
              height={50}
              priority
              className="h-auto w-40 lg:w-50"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-sans-serif text-white ">
            <NavLink href="/">Home</NavLink>

            {/* ===== TREKKING MEGA MENU (DESKTOP) ===== */}
            <div
              ref={megaRef}
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              {/* MAIN BUTTON */}
              <button
                className="flex items-center gap-1 hover:text-yellow-400 transition"
                type="button"
              >
                Trekking <ChevronDown size={14} />
              </button>

              {/* HOVER BUFFER (IMPORTANT) */}
              <div className=" absolute right-0 top-full h-4 w-full" />

              {/* MEGA MENU */}
              {megaOpen && (
                <div className="absolute left-0 top-full mt-4 z-50">
                  <div
                    className="
        bg-[#0A192C] border border-white/10  text-gray-200
        rounded shadow-xl
        p-4 w-80
        grid grid-cols-1
        pointer-events-auto
      "
                  >
                    <MegaLink
                      href="/packages/nepal-luxury-tours"
                      icon={<SquareArrowOutUpRight />}
                      title="Nepal Luxury Tours"
                      desc="Tours-Hiking-Safari"
                    />

                    <MegaLink
                      href="/packages/everest-base-camp-trek"
                      icon={<SquareArrowOutUpRight />}
                      title="Everest Base Camp Trekking"
                      desc="Everest Region,Nepal"
                    />

                    <MegaLink
                      href="/packages/annapurna-base-camp-trekking"
                      icon={<SquareArrowOutUpRight />}
                      title="Annapurna Base Camp Trekking"
                      desc="Annapurna Region,West Nepal"
                    />
                    <MegaLink
                      href="/packages/poonhill-ghorepani-ghandruk-trek"
                      icon={<SquareArrowOutUpRight />}
                      title="Ghorepani-Ghandruk trekking"
                      desc="Family Loved Trekking"
                    />
                    <MegaLink
                      href="/packages/annapurna-circuit-trekking"
                      icon={<SquareArrowOutUpRight />}
                      title="Annapurna-Tilicho Trekking"
                      desc="Beauty of Annapurna"
                    />

                    <MegaLink
                      href="/packages/khumai-korchan-trekking"
                      icon={<SquareArrowOutUpRight />}
                      title="Khumai-Mardihimal Trekking"
                      desc="Short-sweet-Adventure"
                    />
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/packages"
              className="flex items-center gap-1 hover:text-yellow-400 transition "
            >
              Packages
              <ChevronDown size={18} className="mt-1px" />
            </Link>

            <NavLink href="/about">About</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-10000 bg-[#091725] text-white/80 p-6 overflow-y-auto  ">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5"
          >
            <X size={28} />
          </button>

          <div className="mt-20 flex flex-col gap-8 text-lg   ">
            <Link
              href="/"
              className="border-b border-white/8 p-2"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* ===== MOBILE TREKKING ACCORDION ===== */}
            <button
              onClick={() => setMobileTrekOpen(!mobileTrekOpen)}
              className="flex items-center justify-between border-b border-white/8 p-2"
            >
              Trekking
              <ChevronDown
                className={`transition ${mobileTrekOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileTrekOpen && (
              <div className=" ml-4 flex flex-col gap-2 p-2 text-sm text-gray-300 ">
                <Link
                  href="/packages/nepal-luxury-tours"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-yellow-400/18 py-3"
                >
                  Nepal Luxury Tours
                </Link>

                <Link
                  href="/packages/everest-base-camp-trek"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-yellow-400/18 py-3"
                >
                  Everest Base Camp Trekking
                </Link>

                <Link
                  href="/packages/annapurna-base-camp-trekking"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-yellow-400/18 py-3"
                >
                  Annapurna Base Camp Trekking
                </Link>

                <Link
                  href="/packages/poonhill-ghorepani-ghandruk-trek"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-yellow-400/18 py-3"
                >
                  Ghandruk-Poonhill Treekking
                </Link>

                <Link
                  href="/packages/annapurna-circuit-trekking"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-yellow-400/18 py-3"
                >
                  Annapurna( Circuit) Tilicho Trekking
                </Link>

                <Link
                  href="/packages/everest-base-camp-trek"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-yellow-400/18 pb-3"
                >
                  Khumai-MardiHimal Trekking
                </Link>
              </div>
            )}

            <Link
              href="/packages"
              className="border-b border-white/8 p-2 justify-between flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              Packages
              <ArrowRight size={18} className="mt-1px hover:text-yellow-500" />
            </Link>

            <Link
              href="/about"
              className="border-b border-white/8 p-2"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <Link
              href="/faq"
              className="border-b border-white/8 p-2"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="border-b border-white/8 p-2"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function NavLink({ href, children }) {
  return (
    <Link href={href} className="hover:text-yellow-400 transition">
      {children}
    </Link>
  );
}

function MegaLink({ href, icon, title, desc, iconA }) {
  return (
    <Link
      href={href}
      className="flex gap-2 p-2 rounded hover:p-3 hover:text-gray-800 transition-all duration-300"
    >
      <div className="text-yellow-400/80   m-2 w-7 h-7 flex items-center justify-center  ">
        {icon}
      </div>

      <div className="w-full border-b border-gray-700 pb-5">
        <h4 className="font-semibold text-sm py-1 text-gray-300/90 hover:text-yellow-400/80 ">{title}</h4>
        <p className="text-sm  text-gray-400/80 hover:text-yellow-400/80 ">{desc}</p>
      </div>
    </Link>
  );
}
