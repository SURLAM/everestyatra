

"use client";
import { useEffect, useRef, useState } from "react";

export default function PackageGallery({ images }) {
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let speed = 0.4; // luxury smooth speed

    const animate = () => {
      if (!paused) {
        track.scrollLeft += speed;

        // 🔥 TRUE infinite wrap (NO jump)
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft -= track.scrollWidth / 2;
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [paused]);

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-2xl bg-white/7 p-3  text-gray-200 mb-4 mt-20 text-center font-serif border-b border-white/7">
        Trip Highlights
      </h2>

      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="
          flex gap-4
          overflow-x-hidden
          select-none
        "
      >
        {/* clone twice = seamless infinity */}
        {[...images, ...images, ...images].map((item, i) => (
          <StoryCard key={i} data={item} />
        ))}
      </div>
    </section>
  );
}


/* ================= STORY CARD ================= */


function StoryCard({ data }) {
  return (
    <div
      className="
        relative
        w-37.5 md:w-45
        h-60 md:h-65
        shrink-0
        rounded
        overflow-hidden
        bg-black
        shadow-lg
        group
      "
    >
      <img
        src={data.image || data}
        alt={data.title || "Trip highlight"}
        draggable={false}
        className="
          w-full h-full object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      {/* gradient */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black via-black/50 to-transparent" />

      {/* text */}
      <div className="absolute bottom-3 left-3 right-3 text-white">
        <h4 className="text-sm font-semibold">
          {data.title || "Himalayan Adventure"}
        </h4>
        <p className="text-xs text-gray-300 mt-1">
          {data.subtitle || "Beyond the ordinary"}
        </p>
      </div>

      {/* progress bar */}
      <div className="absolute top-2 left-2 right-2 h-0.75 bg-white/30 rounded-full overflow-hidden">
        <div className="h-full bg-yellow-400 animate-story-progress" />
      </div>
    </div>
  );
}
