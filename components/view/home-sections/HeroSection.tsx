import Image from "next/image";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  style: ["italic"],
});

const poppinsRegular = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

const poppinsThin = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="w-full h-[100dvh] bg-cover bg-center bg-no-repeat bg-linear-to-br: url('/assets/imgs/vest-img.webp')">
      {/* <div className="absolute bottom-0 right-0">
        <Image
          src="/assets/imgs/vest-img.webp"
          alt="Solution"
          width={300}
          height={300}
        />
      </div> */}
      <div
        className="h-full w-full"
        style={{
          backgroundImage: "url('/assets/imgs/vest-img.webp')",
          backgroundSize: "350px",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-12 pt-40 h-full">
          <div>
            <h4
              className={`${poppinsBold.className} text-5xl font-bold h-content overflow-y-hidden text-cyan-700 tracking-tighter`}
            >
              What if your Vest could save your life?
            </h4>
          </div>
          <p className={`${poppinsRegular.className} text-lg pt-8`}>
            Swanholm Tech is a technology company that provides technology
            solutions to businesses.
          </p>
          <ul className={`${poppinsThin.className} text-xl pt-8 pl-16`}>
            <li>Every worker deserves to come home safe.</li>
            <li>Your vest technology watches out when no one else can.</li>
            <li>
              You don&apos;t just get a notification, you get a saved life.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
