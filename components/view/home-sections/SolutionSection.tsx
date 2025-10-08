import Image from "next/image";

export default function SolutionSection() {
  return (
    <section className="w-full h-[100dvh] flex flex-col pt-28 border-2 border-gray-300 relative overflow-hidden">
      <div className="flex-1 mx-auto">
        <h4 className="text-4xl font-bold h-fit overflow-y-hidden text-sky-900 text-center">
          Work Confidently,
          <br />
          Your Smart Vest Has Your Back.
        </h4>
      </div>
      <div className="flex-4 p-12 flex items-center justify-center">
        <div className="flex gap-12 ">
          <div>
            <p className="text-lg pt-8 font-bold">AI Fall Detection</p>
            <p className="text-lg pt-8">Three Alarm Type</p>
          </div>
          <div>
            <Image
              src="/assets/svgs/vest.svg"
              alt="Solution"
              width={400}
              height={400}
            />
          </div>
          <div>
            <p className="text-lg pt-8 font-bold">Swanholm Sense App</p>
            <p className="text-lg pt-8">Privacy First </p>
          </div>
        </div>
      </div>
    </section>
  );
}
