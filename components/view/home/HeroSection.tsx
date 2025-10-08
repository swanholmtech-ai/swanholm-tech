import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-[100dvh] flex border-2 border-gray-300 rounded-md bg-slate-100">
      <div className="flex-3">
        <div className="px-12 pt-40 h-full">
          <div style={{ perspective: "600px" , overflow: "hidden" }}>
            <h4
              className="text-5xl font-bold h-content overflow-y-hidden text-amber-700"
              style={{
                transform: "rotateY(-22deg)",
                transformStyle: "preserve-3d",
              }}
            >
              What if your Vest could think?
            </h4>
          </div>
          <p className="text-lg pt-8">
            Swanholm Tech is a technology company that provides technology solutions to businesses.
          </p>
        </div>
      </div>
      <div className="flex-2 flex items-center justify-center">
        <div className="bg-gray-200 w-120 h-120 rounded-full flex items-center justify-center border-6 border-gray-400">
        <Image
          src="/assets/images/vest-img.webp"
          alt="Vest"
          width={300}
          height={300}
          priority={true}
          />
          </div>
      </div>
    </section>
  );
}
