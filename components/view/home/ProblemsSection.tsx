import Image from "next/image";

export default function ProblemsSection() {
  return (
    <section
      className="w-full h-[100dvh] flex mt-14 border-2 border-gray-300 rounded-md relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/images/accident.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
        }}
      />
      <div className="relative z-10 w-full flex">
        <div className="flex-1">
          <div className="px-12 pt-40 h-full">
            <h4 className="text-5xl font-bold h-fit overflow-y-hidden text-amber-700">Work Accident Happen Every day</h4>
            <p className="text-lg pt-8">
              Every 15 minutes a serious accident happened in the EU
            </p>
            <p className="text-lg pt-8">
              Lone work and hazardous environments put lives at risk
            </p>
          </div>
        </div>
      <div className="flex-1"></div>
      </div>
    </section>
  );
}
