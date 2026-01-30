"use client";
import Link from "next/link";
import packages from "@/data/packages";
import { SquareArrowOutUpRight  } from "lucide-react";

export default function PackageLinksList({ currentSlug }) {
  return (
    <div className="mt-10">
      {/* TITLE */}
      <h4 className="text-md font-bold tracking-wider uppercase text-yellow-400 mb-4 text-center bg-linear-to-t from-cyan-700/30 via-cyan-900/40 to-cyan-900/50 px-4  hover:text-gray-100 py-4 rounded">
        Explore More Packages
      </h4>

      {/* LIST */}
      <ul className="space-y-2">
        {packages
          .filter((p) => p.slug !== currentSlug)
          .slice(0, 8)
          .map((pkg) => (
            <li key={pkg.slug}>
              <Link
                href={`/packages/${pkg.slug}`}
                className="
                  group
                  flex items-center justify-between
                  px-4 py-3
                  rounded
                  
                 border border-white/10  overflow-hidden bg-linear-to-t from-cyan-400/10 via-cyan-900/10 to-transparent  shadow-sm 
                 
                  hover:border-yellow-300/40
                  transition
                "
              >
                {/* TITLE */}
                <span
                  className="
                  text-md
                  font-sans 
                  text-gray-300
                  group-hover:text-yellow-500
                  transition-normal
                  
                  
                "
                >
                  {pkg.title}
                </span>

                {/* ARROW */}
                <SquareArrowOutUpRight
                  size={16}
                  className="
                    text-gray-300
                    group-hover:text-yellow-500
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
