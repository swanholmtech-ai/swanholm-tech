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

const CredibilitySection = () => {
  return (
    <section className="w-full h-[100dvh] flex mt-14 relative overflow-hidden">
      <div className="w-full">
        <h4
          className={`${poppinsBold.className} pt-32 text-5xl overflow-y-hidden text-teal-600 pl-12`}
        >
          Already Trusted in Europe
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
        <div className="absolute bottom-0 left-14">
          <Image
            src="/assets/svgs/trust.svg"
            alt="Vest"
            width={300}
            height={300}
            priority={true}
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/assets/imgs/eu.avif"
            alt="Solution"
            width={700}
            height={700}
            className="opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
