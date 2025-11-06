import { Nunito_Sans } from "next/font/google";

const nunitoBold = Nunito_Sans({
  weight: ["700"],
  subsets: ["latin"],
});

const nunitoRegular = Nunito_Sans({
  weight: ["500"],
  subsets: ["latin"],
});

const ValuePart = () => {
  return (
    <article className={`${nunitoRegular.className} w-full h-full mt-12`}>
      <h2
        className={`md:text-4xl text-sm ${nunitoBold.className} font-bold tracking-tighter text-gray-800 bg-red-200 w-fit`}
      >
        Value We Provide
      </h2>
      <h4>For Workers</h4>
      <p
        className={`text-gray-600 text-lg ${nunitoRegular.className} px-20 mt-4`}
      >
        It means peace of mind and help when it needed most.
      </p>
      <h4>For Employers</h4>
      <p
        className={`text-gray-600 text-lg ${nunitoRegular.className} px-20 mt-4`}
      >
        It means fewer incidents and faster response.
      </p>
      <h4>For Families</h4>
      <p
        className={`text-gray-600 text-lg ${nunitoRegular.className} px-20 mt-4`}
      >
        It means knowing their loved ones are never alone.
      </p>
      <p>
        “Together, we move toward Vision Zero — a future where every accident is
        one too many.”​
      </p>
    </article>
  );
};

export default ValuePart;
