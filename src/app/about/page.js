import {
  Mountain,
  Globe,
  ShieldCheck,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Everestyatra – Premium Nepal Trekking & Tours",
  description:
    "Everest Yatra is a premium trekking and adventure travel organizer in Nepal, offering luxury Himalayan experiences, expert guides, and unforgettable journeys.",
};

export default function AboutPage() {
  return (
    <main className="  bg-[#0A192C] text-stone-200">
      {/* ================= HERO ================= */}
      <section className="relative h-[75VH]">
        <Image
          src="https://ik.imagekit.io/2x1rpp2vh/Everest-Base-Camp-trekking"
          alt="Everestyatra Himalaya"
          fill
          className="object-cover opacity-90"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent " />

        <div className="relative max-w-5xl mx-auto pl-6  pt-76 ">
          <h1 className="text-4xl lg:text-7xl  font-serif font-light  mt-20 hover:translate-y-5 duration-400 ">
            About <span className="text-yellow-500/90 ">EverestYatra</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-7xl mx-auto text-left mt-5 hover:translate-y-5 duration-400">
            Where journeys are not just trips — they are <br />
            <span className="text-yellow-400 font-semiold font-sans leading-relaxed text-left">
              {" "}
              life-changing Himalayan experiences.
            </span>
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className=" max-w-5xl mx-auto lg:px-16 lg:py-32  grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left lg:bg-white/1 lg:border border-white/5 rounded-lg lg:shadow-2xl lg:p-18 px-6 py-10 hover:translate-y-5 duration-400 overflow-hidden">
          <h2 className="text-2xl  font-serif font-extralight my-8 bg-yellow-500/80 rounded  py-3 text-center mb-10">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-sm ">
            <strong className="text-yellow-400 font-semibold text-lg">
              Everestyatra.com
            </strong>{" "}
            is a Nepal-based premium travel, trekking, and adventure company,
            dedicated to crafting unforgettable journeys across the Himalayas.
            We specialize in trekking, peak climbing, cultural tours, and luxury
            adventure experiences.
          </p>

          <p className="text-gray-300 leading-relaxed text-sm">
            Founded by passionate mountain professionals, Everestyatra blends
            local expertise, global service standards, and deep respect for
            nature and culture — ensuring every journey is meaningful, safe, and
            inspiring.
          </p>
        </div>

        <div className="relative w-full  transition-transform duration-400 ease-out hover:scale-110 ">
          <Image
            src="https://ik.imagekit.io/2x1rpp2vh/538E2738-5741-4E70-BC6D-A445D44EA86C_1_201_a.jpeg"
            alt="Everestyatra Himalaya"
            height={500}
            width={500}
            
         
            className="object-cover rounded-sm"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/95  via-black/30 to-black/15 pointer-events-none" />
        </div>
      </section>

      {/* ================= WHY TRAVEL WITH US ================= */}
      <section className="bg-[#10263F]/20 py-10   border-t border-white/6">
        <div className="max-w-6xl mx-auto px-4 ">
          <h2 className="text-xl md:text-3xl font-serif text-center  py-18 text-yellow-400/80">
            Why Travel With EverestYatra ?
          </h2>

          <div className="border border-yellow-400/20   p-15 rounded-lg grid sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:translate-y-3 duration-400">
            <Feature
              className=" shadow-xl text-center  transition-all duration-300 hover:scale-105 "
              icon={<Mountain />}
              title="Himalayan Experts"
              text="Our guides are certified professionals with deep local knowledge and years of experience."
            />
            <Feature
              icon={<ShieldCheck />}
              title="Safety First"
              text="We follow international safety standards, best equipment, and responsible trekking practices."
            />
            <Feature
              icon={<Globe />}
              title="Global Travelers"
              text="Trusted by adventurers from all over the world for premium trekking experiences."
            />
            <Feature
              icon={<HeartHandshake />}
              title="Responsible Travel"
              text="We support local communities, culture, and sustainable tourism in Nepal."
            />
          </div>
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-15 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light my-8 text-yellow-400/90">
          Our Mission
        </h2>
        <p className=" p-3 lg:px-8 rounded-tl-4xl rounded-br-4xl l text-gray-200/90 max-w-3xl mx-auto leading-relaxed pt-7 ">
          Our mission is to deliver authentic, safe, and unforgettable Himalayan
          journeys while preserving Nepal’s natural beauty and empowering local
          communities. At Everestyatra, travel is not about destinations — it’s
          about transformation.
        </p>
      </section>

      <div className=" h-px w-2/12 mx-auto bg-linear-to-r from-transparent via-[#D6B36A]/70 to-transparent" />

      {/* ================= CTA ================= */}
      <section className="bg-linear-to-r from-bg-[#10263F] to-bg-[#10263F] text-yellow-400/90 pb-25">
        <div className="max-w-xl mx-auto px-2  pt-10 text-center">
          <h2 className="lg:text-3xl  text-2xl font-serif  text-gra-300">
            Ready To Explore Beautiful Himalayas?
          </h2>
          <p className="  mb-15 text-gray-300 text-md pt-3">
            Join Everestyatra team and experience Nepal like never before.
          </p>

          <Link
            href="/packages"
            className="
            inline-flex items-center gap-3
            bg-yellow-400/80  text-black hover:bg-transparent hover:text-yellow-400/80 hover:border border-yellow-300/25 tracking-tight transform-translate-y-1
            py-3 px-9 rounded-full text-md font-sans font-semibold
            transition duration-300 shadow-lg 
          "
          >
            Explore Packages
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= REUSABLE COMPONENT ================= */

function Feature({ icon, title, text }) {
  return (
    <div className=" border border-white/10 rounded-tl-4xl rounded-br-4xl  p-6 text-center shadow-lg hover:shadow-xl hover:translate-y-3 duration-400 justify-items-center">


      <div className=" mt-4 mb-6 text-yellow-400/70 rounded-full w-10 h-10  flex-items-center justify-items-center place-items-center mx-auto border border-yellow-400/30 pt-2 ">
        {icon}
      </div>


      <h3 className="text-lg mb-3 pb-3 text-indigo-50 font-serif font-extralight">
        {title}
      </h3>


      <p className="text-gray-300/80 text-sm leading-relaxed font-sans tex-left">
        {text}
      </p>
    </div>
  );
}
