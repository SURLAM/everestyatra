import PackageCard from "./PackageCard";

export default function PackageGrid({ packages }) {
  return (
    <div
      className=" bg-[#0A192C] backdrop-blur-xl 
            shadow-[0_30px_90px_rgba(0,0,0,0.45)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {packages.map((pkg) => (
        <PackageCard key={pkg.slug} pkg={pkg} />
      ))}
    </div>
  );
}


