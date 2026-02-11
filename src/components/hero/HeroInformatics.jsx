import {
  Mountain,
  Globe,
  Footprints,
  ShieldCheck,
  Compass,
  FootprintsIcon,
  TentTree,
  HeartHandshake,
} from "lucide-react";
import HikingHeroSearch from "../packagess/HikingHeroSearch";
import SignaturePackageGrid from "../packagess/SignaturePackageGrid";
import Link from "next/link";
import Image from "next/image";

export default function HeroInformatics() {
  return (
    <section className="relative  md:pb-45 pt-65 lg:pt-50 pb-10 lg:pb-5 bg-[#0A192C]  text-white overflow-hidden border-b border-white/10">
      {/* subtle royal glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,158,58,0.07),transparent_25%)]" />

      <div className="relative  px-4 lg:px-0 ">
        {/* ================= TITLE ================= */}
        <div className="    pb-5 lg:p-5 lg:mt-10  mt-15 md:mt-30  max-w-4xl mx-auto text-center mb-24 sm:mt-5  lg:mt-4xl border bg-white/1 border-yellow-400/9 rounded ">
          <div className=" relative my-10 max-w-3xl md:max-w-xl mx-auto md:mt-20 lg:mt-15">
            <HikingHeroSearch />
          </div>
          <p className=" uppercase  text-xs font-light tracking-wide  letters lg:mt-20 mt-15 mb-10    text-yellow-400/90 text-center leading-normal">
            Welcome to the <br /> <br />
            Kingdom of the Himalayas , BEAUTY OF NATURE | CULTURE | ADVENTURE
            <br />
            <br />
            <span className="text-white/70 font-thin text-lg">
              {" "}
              एभरेष्ट यात्रा 🙏 नमस्ते नेपाल{" "}
            </span>{" "}
          </p>

          <h2 className=" text-indigo-100/80 text-center text-4xl md:text-6xl lg:text-7xl leading-tightest font-serif font-bold transformlg:tracking-tight lg:mt-5 px-0">
            EVEREST  NEPAL
          </h2>
          <div className="mt-18 h-px w-4/12 mx-auto bg-linear-to-r from-transparent via-[#D6B36A]/70 to-transparent" />
          <p className=" lg:my-10 my-5 p-10 rounded-2xl lg:px-15 lg:max-w-2xl md:max-w-lg mx-auto text-sm text-gray-200/80 leading-relaxed px-6 font-light">
            NEPAL is not just a destination — it is a feeling.
            <br />A land of soaring Himalayan peaks, sacred traditions,
            untouched valleys, and journeys that transform the soul.
            <br />
            <br />
            <span className="text-white/80 font-bold"> Everest Yatra</span> is a
            rare blend of towering mountains, ancient civilizations, spiritual
            depth, and genuine hospitality — Nepal offers experiences found
            nowhere else on Earth.
          </p>
          <div className="flex justify-center items-center gap-2 border-t border-yellow-400/9 pt-5 max-w-5xl mx-auto">
            <Mountain size={18} className="text-yellow-400/70 " />
            <Link href="/">
              <p className="text-yellow-400 text-center font-extralight  text-sm tracking-widest ">
                www.everestyatra.com
              </p>
            </Link>
          </div>
        </div>

        <div>
          <SignaturePackageGrid />
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="mt-18 lg:mt-25 mb-10 h-px max-w-3xl mx-auto bg-linear-to-r from-transparent via-white/17 to-transparent " />

        <div className=" max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 items-center font-sans text-[#D6B36A] lg:px-5 py-15  xl:pt-30 md:pt-10 md:mb-2">
          {/* LEFT — TEXT */}
          <div className="md:bg-white/1 md:border border-white/7 rounded-sm space-y-6  lg:px-5 lg:p-10 p-4 py-8 transition-transform duration-400 ease-out hover:scale-110 ">
            <InfoItem
              icon={Globe}
              title="Why Travel Nepal"
              text="A rare blend of towering mountains, ancient civilizations, spiritual depth, and genuine hospitality — Nepal offers experiences found nowhere else on Earth."
            />

            <InfoItem
              icon={Mountain}
              title="Why the Himalayas"
              text="The Himalayas are living legends. Trekking here offers silence, scale, and a profound connection with nature that few places can rival."
            />

            <InfoItem
              icon={Footprints}
              title="Why Trekking & Hiking"
              text="Walking ancient trails through forests and villages allows you to experience Nepal slowly, deeply, and authentically."
            />

            <InfoItem
              icon={ShieldCheck}
              title="Why Everest Yatra"
              text="Built by Himalayan professionals, Everest Yatra delivers safe, refined, and deeply personal journeys — crafted with respect for nature and culture."
            />
          </div>

          {/* RIGHT — IMAGE */}
          <div className=" relative w-full  h-125 md:h-125 lg:h-135 transition-transform duration-400 ease-out hover:scale-110 ">
            <Image
              src="https://ik.imagekit.io/2x1rpp2vh/5149DD41-DA08-4C78-986B-199FCE05ACE8_1_201_a.jpeg"
              alt="Himalayan Trekking Nepal"
              fill
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/95  via-black/30 to-black/15 pointer-events-none" />

            {/* Floating Heritage Badge */}
            <div className="absolute md:-bottom-20  -bottom-15 left-25 lg:-bottom-15 lg:left-14 xl:-bottom-20 xl:left-10 bg-[#0A192C]/90 backdrop-blur md:px-6 lg:px-10  lg:py-5 lg:mb-5 md:py-6 px-6 py-3 rounded-lg border border-white/10 shadow-2xl">
              <p className="text-xs uppercase tracking-widest text-yellow-500 text-center">
                Since 2005
              </p>
              <p className="lg:text-md  text-md font-sans mt-1 text-yellow-400/90">
                Trusted Himalayan Experts
              </p>
              <p className="lg:text-sm text-xs text-gray-300 mt-2 text-center">
                Nature ● Culture ● Adventure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= INFO ITEM ================= */

function InfoItem({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4 ">
      <div
        className="
        w-8 h-8 md:w-7 md:h-7 p-1
        rounded-full
        flex items-center justify-center
        border border-[#D6B36A]
        text-[#D6B36A]
        shrink-0
      "
      >
        <Icon size={16} />
      </div>

      <div>
        <h3 className="md:text-md  font-serif  md:mb-3 mb-2">{title}</h3>
        <p className="text-gray-300/80 font-sans text-sm leading-normal ">
          {text}
        </p>
      </div>
    </div>
  );
}
