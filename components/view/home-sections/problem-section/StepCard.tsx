import { Nunito_Sans } from "next/font/google";

const nunitoRegular = Nunito_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const nunitoBold = Nunito_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const StepCard = () => {
  return (
    <article className="w-full h-full">
      <div className="w-full flex gap-4 justify-center items-center py-4">
        <div className="w-[50%] bg-emerald-100 p-4 m-4 min-h-[160px] flex flex-col justify-between shadow-sm">
          <h2
            className={`${nunitoBold.className} text-lg md:text-xl lg:text-2xl xl:text-4xl h-fit overflow-y-hidden tracking-tighter`}
          >
            €550 B = 3.3% of EU GDP
          </h2>
          <p className={`${nunitoRegular.className} text-lg text-gray-800`}>
            lost each year to workplace injuries and diseases. (Source: EU-OSHA)
          </p>
        </div>
        <div className="w-[50%] bg-fuchsia-200 p-4 m-4 min-h-[160px] flex flex-col justify-between shadow-sm">
          <h2
            className={`${nunitoBold.className} text-lg md:text-xl lg:text-2xl xl:text-4xl h-fit overflow-y-hidden tracking-tighter`}
          >
            ~3,298fatal and ~2.8 M non-fatal
          </h2>
          <p className={`${nunitoRegular.className} text-lg text-gray-800`}>
            accidents occur annually across the EU. (Source: Eurostat, 2023)
          </p>
        </div>
      </div>
      <div className="w-full flex gap-4 justify-center items-center py-4">
        <div className="w-[50%] bg-violet-200 p-4 m-4 min-h-[160px] flex flex-col justify-between shadow-sm">
          <h2
            className={`${nunitoBold.className} text-lg md:text-xl lg:text-2xl xl:text-4xl h-fit overflow-y-hidden tracking-tighter`}
          >
            STF are the #2 cause
          </h2>
          <p className={`${nunitoRegular.className} text-lg text-gray-800`}>
            of workplace accidents — leading to severe, long-term injuries.
            (Source: Eurostat, 2023)
          </p>
        </div>
        <div className="w-[50%] bg-amber-100 p-4 m-4 min-h-[160px] flex flex-col justify-between shadow-sm">
          <h2
            className={`${nunitoBold.className} text-lg md:text-xl lg:text-2xl xl:text-4xl h-fit overflow-y-hidden tracking-tighter`}
          >
            Lone workers face higher risk
          </h2>
          <p className={`${nunitoRegular.className} text-lg text-gray-800`}>
            of delayed rescue and undetected incidents.(Source: EU-OSHA, HSE UK)
          </p>
        </div>
      </div>
    </article>
  );
};

export default StepCard;
