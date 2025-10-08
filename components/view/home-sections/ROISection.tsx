import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
  weight: ["900"],
  subsets: ["latin"],
  style: ["italic"],
});

const ROISection = () => {
  return (
    <section className="w-full h-[100dvh] flex mt-14 border-2 border-gray-300 rounded-md relative overflow-hidden">
      <h4
        className={`${poppinsBold.className} pt-32 text-5xl h-fit w-2xl overflow-y-hidden text-sky-200 pl-12 text-stroke-default`}
      >
        SAFETY, THAT PAYS OFF
      </h4>
    </section>
  );
};

export default ROISection;
