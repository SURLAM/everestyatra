

"use client";
import { useRouter } from "next/navigation";
import { ShieldCheck, CloudDownload } from "lucide-react";

export default function BookingCard({ pkg }) {
  const router = useRouter();

  return (
    <aside className="hidden lg:block sticky top-28 bg-gray-200 px-4 mt-16 py-6 lg:py-8 rounded shadow-xl">
      <h3 className="text-4xl lg:text-3xl text-gray-800 text-tight text-center font-semibold  mt-2 ">
        Book This Trip
      </h3>

      <p className="text-md text-green-700 text-center mb-4">
        Limited seats available
      </p>

      <p className="text-6xl text-center py-5  font-light  text-gray-700">
        {pkg.price}
      </p>

      {/* ✅ GO TO RESERVATION PAGE */}
  

      <p className="text-xs text-gray-600 mt-5 text-center">
        No payment required • Reservation request only
      </p>

      <div className="mt-2 h-px bg-gray-300" />
      <button
        onClick={() => router.push(`/reserve/${pkg.slug}`)}
        className="w-full bg-green-700 hover:bg-green-600 text-white py-3 rounded-sm font-medium text-xl transition cursor-pointer mb-2"
      >
        Book Now
      </button>
      <a
        href={pkg.pdf}
        download
        className="w-full inline-flex items-center justify-center gap-3 border border-gray-500 hover:border-gray-700 text-gray-700 hover:text-black py-3 rounded-md font-medium transition"
      >
        <CloudDownload size={18} />
        Download Itinerary
      </a>

      <div className="mt-6 flex items-center gap-2 text-xs text-gray-500 ">
        <ShieldCheck size={16} className="text-green-600 " />
        Trusted by 5,000+ trekkers
      </div>
    </aside>
  );
}
