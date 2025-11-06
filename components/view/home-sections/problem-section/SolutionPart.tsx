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
        className={`md:text-4xl text-sm ${nunitoBold.className} font-bold tracking-tighter text-gray-800 bg-orange-200 w-fit`}
      >
        Solution
      </h2>
      <p
        className={`text-gray-600 text-lg ${nunitoRegular.className} px-20 mt-4`}
      >
        Swanholm Technology closes the detection gap with Edge AI and a smart
        safety vest. Our ecosystem combines the Alert Vest, Sense Collar, and
        Sense App to detect falls, inactivity, or irregular motion — and trigger
        alerts (timer and manual) within seconds to supervisors or emergency
        contacts. Built into certified workwear, it transforms passive PPE into
        an active, connected safety ecosystem that thinks in real-time and acts
        when every second matters — keeping workers visible, connected, and
        never alone.
      </p>
    </article>
  );
};

export default ProblemPart;
