import { Nunito_Sans } from "next/font/google";

const nunitoBold = Nunito_Sans({
  weight: ["700"],
  subsets: ["latin"],
});

const nunitoRegular = Nunito_Sans({
  weight: ["500"],
  subsets: ["latin"],
});

const ProblemPart = () => {
  return (
    <article className={`${nunitoRegular.className} w-full h-full mt-12`}>
      <h2
        className={`md:text-4xl text-sm ${nunitoBold.className} font-bold tracking-tighter text-gray-800 bg-violet-300 w-fit`}
      >
        Problem Statement
      </h2>
      <p
        className={`text-gray-600 text-lg ${nunitoRegular.className} px-20 mt-4`}
      >
        Even with modern PPE and safety routines, a detection gap remains.
        Traditional PPE improves visibility — but offers no real-time detection
        when accidents occur. The gap between incident occurrence and incident
        awareness is still one of the biggest weaknesses in workplace safety.
        For lone and remote workers, that delay can be the difference between
        help in seconds or tragedy in silence.
      </p>
    </article>
  );
};

export default ProblemPart;
