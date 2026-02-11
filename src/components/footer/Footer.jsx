import Link from "next/link";
import { Mountain, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#061422]  text-gray-300/80  border-t border-white/15 ">
      <div className=" max-w-4xl mx-auto  lg:py-15 py-10  grid grid-cols-1 md:grid-cols-3 lg:gap-30 gap-10 lg:px-15 px-10 ">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/everestyatralogo.svg"
              alt="EVERESTYATRA Logo"
              width={160}
              height={50}
              priority
              className="h-auto w-40 "
            />
          </Link>

          <p className=" mt-5 lg:mt-2 text-sm text-gray-400">Explore Nepal With Us.</p>
          <p className=" mb-3  text-sm text-gray-400">
            Nature | Culture | Adventure
          </p>
          <p className=" mt-8 text-sm text-white/80 hover:translate-y-1 hover:text-yellow-400 ">
            info@everestyatra.com
          </p>
          <Link
            href="/"
            className=" text-sm  text-white/80 hover:text-yellow-400
            hover:translate-y-1"
          >
            {" "}
            www.everestyatra.com
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>
        </div>

        <FooterCol title="Popular Trekking ">
          <Link
            href="/packages/nepal-luxury-tours"
            className="hover:text-yellow-400 hover:translate-y-1  "
          >
            Nepal Luxury Tours{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block text-yellow-400 hover:translate-y-1"
            />
          </Link>

          <Link
            href="/packages/everest-base-camp-trek"
            className="hover:text-yellow-400 hover:translate-y-1  "
          >
            Everest Base Camp trekking{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400 "
            />
          </Link>

          <Link
            href="/packages/annapurna-base-camp-trekking"
            className="hover:text-yellow-400 hover:translate-y-1"
          >
            Annapurna Base Camp trek{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>

          <Link
            href="/packages/poonhill-ghorepani-ghandruk-trek"
            className="hover:text-yellow-400 hover:translate-y-1"
          >
            Ghorepani Ghandruk trek{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>

          <Link
            href="/packages/annapurna-circuit-trekking"
            className="hover:text-yellow-400 hover:translate-y-1"
          >
            Annapurna-Circuit Trekking{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>

          <Link
            href="/packages/khumai-korchan-trekking"
            className="hover:text-yellow-400 hover:translate-y-1"
          >
            Khumai-MardiHimal trekking{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>
        </FooterCol>

        <FooterCol title="Company">
          <Link
            href="/about"
            className="hover:text-yellow-400 hover:translate-y-1"
          >
            About{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>

          <Link
            href="/contact"
            className="hover:text-yellow-400 hover:translate-y-1"
          >
            Contact{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>

          <Link
            href="/faq"
            className="hover:text-yellow-400 hover:translate-y-1"
          >
            FAQ{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>

          <Link
            href="/faq/privacy"
            className="hover:text-yellow-400 hover:translate-y-1"
          >
            Privacy Policy{" "}
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>
          <Link
            href="/faq/terms"
            className="hover:text-yellow-400 hover:translate-y-1"
          >
            Terms
            <SquareArrowOutUpRight
              size={12}
              className="inline-block hover:translate-y-1 text-yellow-400"
            />
          </Link>
        </FooterCol>
      </div>

      <div className="text-center text-xs py-5  border-t border-white/5">
        © everestyatra.com {"|"} {new Date().getFullYear()} Nepal🇳🇵
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div >
      <h4 className="text-white/80  py-5 font-semibold ">
        {title}
      </h4>
      <div className="flex flex-col gap-4 text-xs text-gray-300/80   ">
        {children}
      </div>
    </div>
  );
}
