import Link from "next/link";
import { ShieldCheck, Clock } from "lucide-react";

export default function BookingConversionStrip() {
  return (
    <section className="py-24 bg-[#050F19] text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="font-serif text-3xl sm:text-4xl mb-6">
          Your Himalayan Journey Begins Here
        </h3>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Speak directly with our Himalayan experts. No obligation. No pressure.
          Just honest guidance and carefully crafted journeys.
        </p>

        {/* Trust Signals */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-400 mb-12">
          <div className="flex items-center gap-2 justify-center">
            <ShieldCheck size={16} className="text-[#D6B36A]" />
            No payment required to inquire
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Clock size={16} className="text-[#D6B36A]" />
            Limited departures each season
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            inline-flex items-center gap-3
            border border-[#D6B36A]/50
            text-[#D6B36A]
            px-12 py-5
            rounded-full
            hover:bg-[#D6B36A]
            hover:text-[#061421]
            transition
          "
        >
          Plan Your Journey
        </Link>
      </div>
    </section>
  );
}
