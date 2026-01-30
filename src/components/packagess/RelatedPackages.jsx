import packages from "@/data/packages";
import MiniPackageCard from "./MiniPackageCard";

export default function RelatedPackages({ currentSlug }) {
  const filtered = packages.filter((p) => p.slug !== currentSlug);

  return (
    <section className="bg-[#0A192C] py-30 lg:pt-10 lg:mb-7 max-w-7xl mx-auto text-center px-6 ">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto text-center ">
        <h3 className=" my-7 text-3xl lg:text-4xl text-white/80 font-serif font-semibold  ">
          Explore  Himalayan Adventures
        </h3>

        <h3 className="text-[#D6B36A] lg:text-2xl font-light pb-15  ">
          Top choices of Himalayan Adventures
        </h3>
        <div className="my-4 h-px max-w-4/12 mx-auto bg-linear-to-r from-transparent via-[#D6B36A]/60 to-transparent" />
      </div>
      {/* GRID */}
      <div
        className="max-w-5xl mx-auto
        grid gap-3
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3
       
        mt-20 
        
      "
      >
        {filtered.slice(0, 6).map((pkg) => (
          <MiniPackageCard key={pkg.slug} pkg={pkg} />
        ))}
        
      </div>
      
      
    </section>
    
  );
}
