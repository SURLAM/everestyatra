"use client";

import heroStories from "@/data/heroStories";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroStories() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isPaused = useRef(false);

  const SPEED = 0.4; // 👉 CONTROL SPEED HERE (0.2 slow, 0.6 faster)

  useEffect(() => {
    const slider = sliderRef.current;

    const animate = () => {
      if (!isPaused.current) {
        slider.scrollLeft += SPEED;

        // Infinite loop reset
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 1;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="absolute lg:-bottom-30 xl:-bottom-40 2xl:-bottom-40 w-full z-40">
      <div className="max-w-5xl mx-auto lg:px-8  ">
        <div
          ref={sliderRef}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          className="
            flex gap-3 lg:gap-2 overflow-x-hidden
            select-none
          "
        >
          {[...heroStories, ...heroStories].map((story, index) => (
            <Link
              key={index}
              href={story.link}
              className="
                w-50 h-70 
                rounded-lg overflow-hidden
                relative shrink-0
                shadow-lg
              "
            >
              <Image
                src={story.image}
                alt={story.title}
               width={400}
                height={400}
                className="oject-cover"
              
              />

              {/* TEXT OVERLAY */}
              <div
                className="
                absolute inset-0
                bg-linear-to-t from-black via-black/30  to-transparent
                flex items-end px-3 pb-7
              "
              >
                <div>
                  <h4 className="text-gray-100 text-sm lg:text-xs font-bold leading-tight mb-1 ">
                    {story.title}
                  </h4>
                  <p className="text-xs text-gray-200 mb-2 mt-1">{story.subtitle}</p>
                </div>
              </div>

              {/* CARD PROGRESS BAR */}
              <div className="absolute bottom-3 left-3 right-3 h-0.75 bg-white/50 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-300 animate-story-progress" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
