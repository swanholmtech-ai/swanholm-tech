import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-[100dvh] flex border-2 border-gray-300 rounded-md">
      <div className="flex-3 bg-slate-100">
        <div className="px-12 pt-40 h-full">
          <h4 className="text-5xl font-bold h-fit overflow-y-hidden">What if your Vest could think?</h4>
        <p className="text-lg pt-8">
          Swanholm Tech is a technology company that provides technology solutions to businesses.
        </p>
        </div>
      </div>
      <div className="flex-2 bg-cyan-950 flex items-center justify-center">
        <Image
          src="assets/images/svgs/vest.svg"
          alt="Vest"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
