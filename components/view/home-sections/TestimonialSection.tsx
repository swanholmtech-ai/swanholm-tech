import Image from "next/image";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  style: ["italic"],
});

const poppinsRegular = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const testimonials = [
  {
    name: "Anna S.",
    role: "Safety Manager, Skanska",
    text: "The Alert Vest gives our team peace of mind. It&apos;s easy to use and has already prevented a serious incident.",
    image: "assets/svgs/d-user.svg",
  },
  {
    name: "Johan L.",
    role: "Construction Worker",
    text: "I feel safer knowing someone will be alerted if I fall. The vest is comfortable and doesn&apos;t get in the way.",
    image: "assets/svgs/d-user.svg",
  },
  {
    name: "Maria P.",
    role: "HR Director, InfraBuild",
    text: "Our insurance costs dropped after implementing Alert Vest. It&apos;s a win for safety and our bottom line.",
    image: "assets/svgs/d-user.svg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full h-[100dvh] flex flex-col mt-14 border-2 border-gray-300 rounded-md relative overflow-hidden bg-white">
      <div className="flex-1 mx-auto w-full">
        <h4
          className={`${poppinsBold.className} text-4xl tracking-tight text-center pt-32 text-sky-700`}
        >
          What Our Users Say
        </h4>
      </div>
      <div className="flex-4 flex justify-center items-center w-full px-8">
        <div className="flex flex-row gap-8 w-full max-w-6xl justify-center">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-sky-50 border border-gray-200 rounded-lg shadow-md flex flex-col items-center p-8 flex-1 min-w-[260px] max-w-[340px]"
            >
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-sky-200">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p
                className={`${poppinsRegular.className} text-lg text-gray-700 italic mb-4 text-center`}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="text-sm text-gray-600 font-semibold">
                {t.name}
              </div>
              <div className="text-xs text-gray-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
