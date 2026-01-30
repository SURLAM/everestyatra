"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= DATA ================= */


const faqs = [
  {
    q: "Is trekking in Nepal safe for first-time trekkers?",
    a: "Yes. Nepal is one of the safest trekking destinations in the world. With certified guides, well-established routes, and Everest Yatra’s safety-first protocols, even first-time trekkers can enjoy a secure and rewarding experience.",
  },
  {
    q: "What level of fitness is required for Himalayan treks?",
    a: "Moderate fitness is sufficient for most treks. Regular walking, light cardio, and basic endurance training before arrival will help you enjoy the journey comfortably.",
  },
  {
    q: "How does Everest Yatra ensure safety during treks?",
    a: "We use certified local guides, maintain daily health checks, carry emergency oxygen, follow acclimatization schedules, and stay connected with rescue services at all times.",
  },
  {
    q: "What is the best time to visit Nepal for trekking?",
    a: "Spring (March–May) and Autumn (September–November) are the best seasons, offering clear mountain views, stable weather, and comfortable trekking conditions.",
  },
  {
    q: "Are luxury trekking options available in Nepal?",
    a: "Absolutely. Everest Yatra offers luxury lodges, premium meals, private guides, and personalized itineraries for travelers seeking comfort without compromising adventure.",
  },
  {
    q: "Do I need prior trekking experience?",
    a: "Not always. Many treks are suitable for beginners. Our team helps you choose the right route based on your fitness, experience, and expectations.",
  },
  {
    q: "How is altitude sickness managed?",
    a: "We follow slow ascent principles, proper acclimatization days, hydration guidance, and continuous monitoring. Our guides are trained to identify and respond early.",
  },
  {
    q: "What accommodation can I expect during the trek?",
    a: "You’ll stay in hand-picked teahouses or luxury mountain lodges depending on your package, all selected for cleanliness, comfort, and warm hospitality.",
  },
  {
    q: "Is travel insurance mandatory?",
    a: "Yes. Travel insurance covering high-altitude trekking and emergency evacuation is mandatory for all guests.",
  },
  {
    q: "What meals are provided during the trek?",
    a: "Nutritious, freshly prepared meals including local Nepali and international options are provided. Special dietary needs can be arranged in advance.",
  },
  {
    q: "Can solo travelers join Everest Yatra trips?",
    a: "Yes. Solo travelers are welcome. You can join group departures or request a private, customized journey.",
  },
  {
    q: "Are permits required for trekking?",
    a: "Yes. All necessary trekking permits are arranged by Everest Yatra, so you can travel stress-free.",
  },
  {
    q: "How experienced are your guides?",
    a: "Our guides are local Himalayan experts with years of high-altitude trekking experience, first-aid certification, and deep cultural knowledge.",
  },
  {
    q: "What makes Everest Yatra different from other companies?",
    a: "We combine local expertise, safety, luxury comfort, ethical tourism, and personalized service to deliver unforgettable Himalayan journeys.",
  },
  {
    q: "Can itineraries be customized?",
    a: "Yes. Every trip can be tailored to your pace, interests, group size, and comfort level.",
  },
  {
    q: "Is Nepal suitable for family or senior travelers?",
    a: "Yes. We design gentle itineraries with comfortable accommodations for families and senior travelers.",
  },
  {
    q: "What should I pack for a Nepal trek?",
    a: "We provide a detailed packing list after booking, covering clothing, gear, and essentials suitable for Himalayan conditions.",
  },
  {
    q: "How do you handle emergencies?",
    a: "We maintain 24/7 communication, coordinate helicopter rescues when required, and ensure immediate medical response.",
  },
  {
    q: "Are cultural experiences included?",
    a: "Yes. Our trips include monasteries, villages, local traditions, and authentic cultural interactions.",
  },
  {
    q: "How do I book a trip with Everest Yatra?",
    a: "Simply choose your package, submit an inquiry, and our team will guide you through the booking process.",
  },
];

/* ================= ANIMATION VARIANTS ================= */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ================= COMPONENT ================= */

export default function LuxuryFAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 relative bg-[#0A192C]">
      <div className="max-w-4xl mx-auto px-4">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs lg:my-10 lg:pt-10">
            Helpful Answers
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white/90">
            Frequently Asked Questions
          </h2>

          <p className="mt-10 pb-14  text-gray-400 font-normal max-w-4xl mx-auto border-b border-yellow-400/12">
            Everything you need to know about trekking, luxury travel, safety,
            and adventures in the Nepal Himalayas.
          </p>
        </motion.div >

        {/* ===== FAQ LIST ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-5"
        >
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                variants={itemFade}
                className="
                  rounded-sm
                  border border-white/6
                  bg-white/5
                  backdrop-blur
                  hover:border-yellow-400/15
                  transition-colors
                  
                "
              >
                {/* ===== QUESTION BUTTON ===== */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="
                    w-full flex items-center justify-between
                    px-6 py-5
                    text-left
                    text-white/80
                    font-normal
                    text-base md:text-base lg:text-base
                    hover:text-yellow-400/80
                    transition-colors
                    
                  "
                >
                  <span className="pr-6">{item.q}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <ChevronDown className="text-yellow-400/80" />
                  </motion.span>
                </button>

                {/* ===== ANSWER (SMOOTH ACCORDION) ===== */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-200 leading-relaxed text-sm md:text-base border-t border-yellow-400/12 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
