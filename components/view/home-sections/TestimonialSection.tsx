"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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
    text: "The Alert Vest gives our team peace of mind. It's easy to use and has already prevented a serious incident.",
    image: "assets/svgs/d-user.svg",
  },
  {
    name: "Johan L.",
    role: "Construction Worker",
    text: "I feel safer knowing someone will be alerted if I fall. The vest is comfortable and doesn't get in the way.",
    image: "assets/svgs/d-user.svg",
  },
  {
    name: "Maria P.",
    role: "HR Director, InfraBuild",
    text: "Our insurance costs dropped after implementing Alert Vest. It's a win for safety and our bottom line.",
    image: "assets/svgs/d-user.svg",
  },
];

export default function TestimonialSection() {
  return (
    <article className="w-full h-[100dvh] flex flex-col relative overflow-hidden">
      {/* Testimonial Trust Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900">
        {/* Animated speech bubbles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => {
            const left = `${(i * 11 + i * 7) % 100}%`;
            const top = `${(i * 13 + i * 5) % 100}%`;
            const size = 30 + (i % 5) * 10;
            const duration = 5 + (i % 4);
            const delay = (i * 23) % 6;

            return (
              <motion.div
                key={i}
                className="absolute bg-sky-400/10 rounded-full blur-xl"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left,
                  top,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                }}
              />
            );
          })}
        </div>

        {/* Voice wave overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.2),transparent_50%)]" />
      </div>

      {/* Floating quote marks */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const left = `${10 + i * 12}%`;
          const top = `${15 + (i % 4) * 20}%`;
          const duration = 4 + i * 0.5;
          const delay = i * 0.8;

          return (
            <motion.div
              key={i}
              className="absolute text-sky-400/20 text-6xl font-serif"
              style={{
                left,
                top,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            >
              &ldquo;
            </motion.div>
          );
        })}
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-1 relative z-10">
        <div className="flex-1 mx-auto w-full">
          <AnimatedSection
            variants={{
              hidden: { opacity: 0, y: -100, scale: 0.7 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  type: "spring",
                  stiffness: 70,
                },
              },
            }}
          >
            <h4
              className={`${poppinsBold.className} text-5xl tracking-tight text-center pt-32
              bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent
              drop-shadow-[0_0_40px_rgba(14,165,233,0.6)]`}
            >
              What Our Users Say
            </h4>
          </AnimatedSection>
        </div>

        <div className="flex-4 flex justify-center items-center w-full px-8">
          <motion.div
            className="flex flex-row gap-8 w-full max-w-6xl justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.2 }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 100,
                    scale: 0.7,
                    rotate: idx % 2 === 0 ? -10 : 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                      type: "spring",
                      stiffness: 80,
                      delay: idx * 0.2,
                    },
                  },
                }}
                className="bg-gradient-to-br from-sky-900/50 to-blue-900/50 border-2 border-sky-500/40 
                rounded-2xl shadow-2xl flex flex-col items-center p-8 flex-1 min-w-[260px] max-w-[340px]
                backdrop-blur-sm"
                whileHover={{
                  scale: 1.08,
                  y: -15,
                  borderColor: "rgba(14, 165, 233, 0.8)",
                  boxShadow: "0 0 50px rgba(14, 165, 233, 0.4)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-sky-400/50"
                  whileHover={{
                    scale: 1.15,
                    rotate: 360,
                    borderColor: "rgba(14, 165, 233, 0.9)",
                    transition: { duration: 0.5 },
                  }}
                >
                  <motion.div
                    className="relative w-full h-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(14, 165, 233, 0)",
                        "0 0 20px rgba(14, 165, 233, 0.5)",
                        "0 0 0 rgba(14, 165, 233, 0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.5,
                    }}
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>
                </motion.div>

                <motion.p
                  className={`${poppinsRegular.className} text-lg text-sky-100 italic mb-4 text-center relative`}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="text-sky-400 text-3xl absolute -left-2 -top-2">
                    &ldquo;
                  </span>
                  {t.text}
                  <span className="text-sky-400 text-3xl absolute -right-2 -bottom-2">
                    &rdquo;
                  </span>
                </motion.p>

                <motion.div
                  className="text-base text-sky-200 font-bold"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                >
                  {t.name}
                </motion.div>
                <div className="text-sm text-blue-300">{t.role}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </article>
  );
}
