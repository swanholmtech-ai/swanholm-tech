import Image from "next/image";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  style: ["italic"],
});

export default function SolutionSection() {
  return (
    <section className="w-full h-[100dvh] flex flex-col pt-28 border-2 border-gray-300 relative overflow-hidden">
      <div className="flex-1 mx-auto">
        <h4
          className={`${poppinsBold.className} text-4xl tracking-tight text-center`}
        >
          Work Confidently,
          <br />
          Your Smart Vest Has Your Back.
        </h4>
      </div>
      <div className="flex-4 p-12 flex items-center justify-center">
        <div className="flex justify-evenly w-full">
          <div className="flex-2 text-center flex flex-col items-center justify-center">
            <p className={`text-3xl ${poppinsBold.className}`}>
              AI Fall Detection
            </p>
            <p className={`text-3xl ${poppinsBold.className}`}>
              Three Alarm Type
            </p>
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
            <p className={`text-3xl ${poppinsBold.className}`}>
              Swanholm Sense App
            </p>
            <p className={`text-3xl ${poppinsBold.className}`}>
              Privacy First{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
