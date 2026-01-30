"use client";
import Link from "next/link";
import { ArrowRight, LucideExternalLink } from "lucide-react";

export default function MiniPackageCard({ pkg }) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="
        group block
        bg-white/2 border border-white/6 shadow-[0_30px_90px_rgba(0,0,0,0.45)]
        rounded-md
        overflow-hidden
        hover:shadow-xl
        transition
      "
    >
      {/* IMAGE */}
      <div className="relative h-70 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="px-5 pt-3 pb-2">
        <h3 className="font-normal text-gray-200 leading-wide text-lg mt-2 tracking-wider">
          {pkg.title}
        </h3>

        <p className="text-sm text-gray-400 mt-2 ">
          {pkg.duration} • {pkg.difficulty}
        </p>

        <div
          className="       
          px-4 pb-3 pt-6 mt-6 mb-2
          text-4xl  font-extralight  rounded text-[#D6B36A] border-t border-yellow-500/12
        "
        >
          {"From "} {pkg.price}
        </div>

        <div className=" my-2 flex items-center justify-center bg rounded  bg-[#D6B36A]/70 hover:bg-[#D6B36A]/90 text-md   py-2">
          <div className=" inline-flex items-center gap-3 rounded text-white font-medium leading-relaxed ">
            Details
            <div>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
