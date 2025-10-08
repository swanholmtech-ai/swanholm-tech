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

const newsItems = [
  {
    title: "Alert Vest Featured in Safety Europe Magazine",
    date: "May 2024",
    description:
      "Our innovative safety vest was highlighted as a top solution for workplace safety in the latest issue of Safety Europe.",
    image: "/assets/imgs/news1.avif",
  },
  {
    title: "Awarded Best Industrial IoT Device 2024",
    date: "April 2024",
    description:
      "Alert Vest received the prestigious Best Industrial IoT Device award at the European Tech Expo.",
    image: "/assets/imgs/news2.avif",
  },
  {
    title: "Partnership with SafeWork Initiative",
    date: "March 2024",
    description:
      "We are proud to announce our partnership with SafeWork to promote safer workplaces across Europe.",
    image: "/assets/imgs/news3.avif",
  },
];

const NewsSection = () => {
  return (
    <section className="w-full min-h-[80dvh] flex flex-col mt-14 border-2 border-gray-300 rounded-md relative overflow-hidden bg-white">
      <div className="w-full">
        <h4
          className={`${poppinsBold.className} pt-20 text-5xl text-teal-600 pl-12`}
        >
          Latest News
        </h4>
        <p className={`${poppinsThin.className} text-lg pt-6 pl-16`}>
          Stay up to date with our latest achievements, partnerships, and media
          features.
        </p>
        <div className="flex flex-wrap gap-8 pt-10 pl-16 pr-16">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className={`bg-gray-50 rounded-lg shadow-md flex flex-col md:flex-row items-center p-6 w-full md:w-[32%] min-w-[280px]`}
            >
              <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="md:pl-6 w-full md:w-2/3">
                <h5
                  className={`${poppinsRegular.className} text-xl text-gray-800`}
                >
                  {item.title}
                </h5>
                <span className="text-sm text-gray-400">{item.date}</span>
                <p
                  className={`${poppinsThin.className} text-base pt-2 text-gray-600`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <Image
          src="/assets/svgs/news.svg"
          alt="News"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default NewsSection;
