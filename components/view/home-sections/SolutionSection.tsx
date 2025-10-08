import Image from "next/image";

export default function SolutionSection() {
  return (
    <section className="w-full h-[100dvh] flex flex-col pt-28 border-2 border-gray-300 relative overflow-hidden">
      <div className="flex-1 mx-auto">
        <h4 className="text-4xl font-bold h-fit overflow-y-hidden text-sky-900 text-center italic">
          Work Confidently,
          <br />
          Your Smart Vest Has Your Back.
        </h4>
      </div>
      <div className="flex-4 p-12 flex items-center justify-center">
        <div className="flex justify-evenly w-full">
          <div className="flex-2 text-center flex flex-col items-center justify-center">
            <p className="text-3xl font-bold pb-4">AI Fall Detection</p>
            <p className="text-3xl font-bold">Three Alarm Type</p>
          </div>
          <div
            className="flex-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/assets/svgs/vest.svg"
              alt="Solution"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-2 text-center flex flex-col items-center justify-center">
            <p className="text-3xl font-bold pb-4">Swanholm Sense App</p>
            <p className="text-3xl font-bold">Privacy First </p>
          </div>
        </div>
      </div>
    </section>
  );
}
