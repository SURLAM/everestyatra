"use client";

import { useState, useRef } from "react";
import { ChevronDown, AlertCircle } from "lucide-react";

export default function LuxuryTermsConditions({ onAccept }) {
  const [active, setActive] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [showError, setShowError] = useState(false);
  const sectionRef = useRef(null);

  const terms = [
    {
      q: "Reservation & Booking Confirmation",
      a: "Submitting a booking request does not guarantee availability. Confirmation is issued only after approval by our expert team.",
    },
    {
      q: "Advance Deposit Policy",
      a: "Some journeys require advance deposits to secure permits, guides, and accommodations.",
    },
    {
      q: "Passport & Visa Responsibility",
      a: "Clients are responsible for valid passports and Nepal entry visas.",
    },
    {
      q: "Mandatory Travel Insurance",
      a: "Insurance covering trekking, evacuation, and medical emergencies is mandatory.",
    },
    {
      q: "Health & Fitness Declaration",
      a: "Travelers confirm they are physically and mentally fit for high-altitude travel.",
    },
    {
      q: "Itinerary Flexibility",
      a: "Weather or safety conditions may require itinerary adjustments.",
    },
    {
      q: "Client Cancellation Policy",
      a: "Cancellation charges may apply depending on notice period.",
    },
    {
      q: "Company Cancellation Rights",
      a: "Trips may be canceled due to force majeure with fair alternatives.",
    },
    {
      q: "Personal Belongings Responsibility",
      a: "Clients are responsible for safeguarding personal belongings.",
    },
    {
      q: "Risk Acknowledgement",
      a: "Himalayan travel involves inherent risks accepted willingly by the traveler.",
    },
  ];

  // ❗ Call this before final booking submit
  const validateTerms = () => {
    if (!accepted) {
      setShowError(true);
      setActive(0); // auto-open first term
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
    setShowError(false);
    onAccept?.();
    return true;
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-[#061421] via-[#071b2f] to-[#020b14]"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs mb-4 pt-15">
            Important Notice
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Terms & Conditions
          </h2>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Please carefully review and accept before confirming your booking.
          </p>
        </div>

        {/* ERROR MESSAGE */}
        {showError && (
          <div className="mb-8 flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/30 px-6 py-4 rounded-sm text-yellow-300">
            <AlertCircle size={18} />
            <span className="text-sm">
              Please review and accept the Terms & Conditions to proceed.
            </span>
          </div>
        )}

        {/* ACCORDION */}
        <div className="space-y-5">
          {terms.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className="
                  border border-white/10 rounded-sm
                  bg-linear-to-t from-cyan-500/10 via-cyan-900/10 to-transparent
                  hover:border-yellow-400/30
                  transition
                "
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="
                    w-full flex justify-between items-center
                    px-6 pt-7 pb-4  text-left
                    text-white/85 font-semibold
                    hover:text-yellow-400 transition
                  "
                >
                  <span className="pr-5">{item.q}</span>
                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-500 ${
                      isOpen ? "rotate-180 text-yellow-400" : "text-white/60"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="border-t border-white/10 overflow-hidden px-6 mb-4   pt-3 text-gray-300/20leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
