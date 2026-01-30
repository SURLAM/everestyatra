import packages from "@/data/packages";
import PackageHero from "@/components/packagess/PackageHero";
import PackageGallery from "@/components/packagess/PackageGallery";
import PackageInfo from "@/components/packagess/PackageInfo";
import PackageAccordion from "@/components/packagess/PackageAccordion";
import BookingCard from "@/components/packagess/BookingCard";
import PackageLinksList from "@/components/packagess/PackageLinkslist";
import MobileBookingBar from "@/components/packagess/MobileBookingBar";
import { notFound } from "next/navigation";



export async function generateMetadata({ params }) {
  const { slug } = await params;   // ⭐ important

  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) return {};

  const title = `${pkg.title} Trek – ${pkg.duration} Guided Himalayan Journey | Everest Yatra`;

  const description = `Join our ${pkg.title} trek in the ${pkg.region}. Reach ${pkg.altitude}. Difficulty: ${pkg.difficulty}. ${pkg.Bestmonth}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [pkg.image],
    },
  };
}



export default async function PackageDetails({ params }) {
  const { slug } = await params;

  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
     
      <div className="pt-40 text-center text-xl text-gray-600">
        Package not found
      </div>
    );
  }


  return (
    <main className="py-22 ">
      <PackageHero pkg={pkg} />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10 lg:mt-2">
        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-2 space-y-16">
          <PackageInfo pkg={pkg} />
          <PackageGallery images={pkg.gallery} />
          <PackageAccordion pkg={pkg} />
          
        </div>

        {/* ================= RIGHT BOOKING CARD ================= */}
        <div>
          <MobileBookingBar pkg={pkg} />
          <BookingCard pkg={pkg} />
          <PackageLinksList currentSlug={slug} />
        </div>
      </div>
    </main>
  );
}
