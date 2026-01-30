

export default function PackageInfo({ pkg }) {
  return (
    <section >
      <div className="bg-white/5 mb-3  rounded text-center border-b border-white/10 ">
        <h2 className="text-2xl  font-serif text-gray-200  lg:mt-16 p-4">
          Trip Specifications
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-3 mb-12  ">
        <InfoBox label="Duration" value={pkg.duration} />
        <InfoBox label="Difficulty" value={pkg.difficulty} />
        <InfoBox label="Price" value={pkg.price} />
        <InfoBox label="Trip Style" value="Fully Guided" />
      </div>
      <h2 className="text-2xl bg-white/7 rounded p-3 text-center font-serif  text-gray-100 mt-25 mb-3 border-b border-white/10">
        Journey Overview
      </h2>

      <div className="  bg-white/4 rounded p-7 text-left font-sans  mt-4 mb-3 border-b border-white/10 space-y-4 ">
        {pkg.description.map((item, index) => (
          <p
            key={index}
            className="text-gray-200 text-sm tracking-relaxed leading-6"
          >
            {Object.values(item)[0]}
          </p>
        ))}
      </div>

    </section>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="bg-white/12 rounded text-center ">
      <p className="bg-gray-800  rounded-t w-full  px-3 py-2 inline-block text-md font-semibold text-gray-100">
        {label}
      </p>
      <p className="  text-yellow-300 px-3 py-2 inline-block text-md font-normal mt-1">
        {value}
      </p>
    </div>
  );
}
