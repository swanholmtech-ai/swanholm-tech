import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsBold = Poppins({
  weight: ["900"],
  subsets: ["latin"],
  style: ["italic"],
});

const poppinsThin = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});

const poppinsRegular = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const ROISection = () => {
  return (
    <section className="w-full h-[100dvh] flex mt-14 border-2 border-gray-300 rounded-md relative overflow-hidden">
      <div className="w-full">
        <h4
          className={`${poppinsBold.className} pt-32 text-5xl h-fit w-2xl overflow-y-hidden text-sky-200 pl-12 text-stroke-default`}
        >
          SAFETY, THAT PAYS OFF
        </h4>
        <p className={`${poppinsThin.className} text-lg pt-8 pl-16`}>
          Accidents cost in Lives, Downtime, and Insurance. Alert Vest reduces
          risks and improves employer branding.
        </p>
        <ul className={`${poppinsRegular.className} text-lg pt-8 pl-16`}>
          <li>Fewer accidents & sick leave</li>
          <li>Lower insurance costs</li>
          <li>Stronger safety culture</li>
        </ul>
      </div>
      <div className="flex w-full">
        <div className="absolute bottom-0 left-0">
          <Image
            src="/assets/imgs/vest-d2-ai.avif"
            alt="Vest"
            width={300}
            height={300}
            priority={true}
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/assets/svgs/chart.svg"
            alt="Solution"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default ROISection;
