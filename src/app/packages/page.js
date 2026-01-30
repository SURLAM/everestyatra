import packages from "@/data/packages";
import PackageGrid from "@/components/packagess/PackageGrid";



export default function PackagesPage() {
  return (
    < div className="bg-[#0A192C]">
    
    <main className=" py-32  px-3 lg:px-5 max-w-7xl mx-auto bg-[#0A192C]">
      <h1 className="max-w-5xl mx-auto text-4xl font-serif mb-15 lg:mb-20 lg:my-5 lg:text-5xl text-center text-gray-200/90 ">
        DREAM <span className="text-yellow-400">ADVENTURES</span> STARTS HERE !
      </h1>

      <PackageGrid packages={packages} />
    </main>
    </div>
  );
}
