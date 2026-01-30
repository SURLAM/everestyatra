"use client";
import { useState } from "react";
import { CloudDownload, X } from "lucide-react";
import { useRouter } from "next/navigation";



export default function MobileBookingBar({ pkg }) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      {/* ===== BOTTOM BAR ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div
          className="
          bg-white/95 backdrop-blur
          border-t border-gray-200
          px-4 py-3
          flex items-center justify-between
          shadow-[0_-10px_30px_rgba(0,0,0,0.08)]
        "
        >
          {/* PRICE */}
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-xl font-extrabold text-gray-900">{pkg.price}</p>
          </div>

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="
              bg-yellow-400 hover:bg-yellow-300
              text-black font-bold
              px-6 py-3 rounded-sm
              transition
            "
          >
            Book Now
          </button>
        </div>
      </div>

      {/* ===== SLIDE UP SHEET ===== */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/80 "
          />

          {/* SHEET */}
          <div
            className="
            absolute bottom-0 left-0 right-0
            bg-gray-200
            rounded
            p-10
            animate-slideUp
          "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-2 pb-4 text-gray-800">
              <h3 className="text-xl font-bold text-gray-800 ">
                Book This Trip
              </h3>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* PRICE */}
            <p className="text-5xl font-sans font-normal text-gray-700 pb-10">
              {pkg.price}
            </p>

            {/* BOOK BUTTON */}
            <button
              onClick={() => router.push(`/reserve/${pkg.slug}`)}
              className="
              w-full bg-green-600 hover:bg-green-500
              text-white py-3 rounded-sm
              font-bold text-lg transition
            "
            >
              Confirm Inquiry
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              No payment required • Instant inquiry
            </p>

            {/* PDF */}
            <a
              href={pkg.pdf}
              download
              className="
                mt-6
                w-full inline-flex items-center justify-center gap-2
                border border-gray-300
                py-3 rounded-xl
                text-gray-700
                font-medium
              "
            >
              <CloudDownload size={18} />
              Download Itinerary (PDF)
            </a>
          </div>
        </div>
      )}
    </>
  );
}
