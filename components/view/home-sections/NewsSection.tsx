"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

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
    <section className="w-full min-h-[80dvh] flex flex-col mt-14 relative overflow-hidden">
      {/* News Media Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Animated news ticker effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              style={{
                height: "3px",
                width: "100%",
                top: `${i * 100}px`,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Broadcast wave overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_50%)]" />
      </div>

      {/* Floating media particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => {
          const left = `${(i * 9 + i * 13) % 100}%`;
          const top = `${(i * 11 + i * 7) % 100}%`;
          const duration = 4 + (i % 4);
          const delay = (i * 17) % 5;

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-sm"
              style={{
                left,
                top,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
                rotate: [0, 360, 0],
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

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="w-full">
          <AnimatedSection
            variants={{
              hidden: { opacity: 0, y: -80, scale: 0.8 },
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
              className={`${poppinsBold.className} pt-20 text-6xl pl-12
              bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent
              drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]`}
            >
              Latest News
            </h4>
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp} delay={0.2}>
            <p
              className={`${poppinsThin.className} text-xl pt-6 pl-16 text-blue-100 max-w-3xl`}
            >
              Stay up to date with our latest achievements, partnerships, and
              media features.
            </p>
          </AnimatedSection>

          <motion.div
            className="flex flex-wrap gap-8 pt-10 pl-16 pr-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.1 }}
          >
            {newsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 80,
                    scale: 0.8,
                    rotate: -5,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: idx * 0.15,
                    },
                  },
                }}
                className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-2xl shadow-xl 
                flex flex-col md:flex-row items-center p-6 w-full md:w-[32%] min-w-[280px]
                border border-blue-500/30 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  borderColor: "rgba(59, 130, 246, 0.7)",
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={120}
                      height={120}
                      className="rounded-xl object-cover shadow-lg"
                    />
                  </motion.div>
                </div>
                <div className="md:pl-6 w-full md:w-2/3">
                  <h5
                    className={`${poppinsRegular.className} text-xl text-blue-200 font-bold`}
                  >
                    {item.title}
                  </h5>
                  <motion.span
                    className="text-sm text-purple-300"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {item.date}
                  </motion.span>
                  <p
                    className={`${poppinsThin.className} text-base pt-2 text-indigo-200`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatedSection variants={scaleIn} delay={0.5}>
        <motion.div
          className="absolute bottom-0 right-0 pointer-events-none"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        >
          <Image
            src="/assets/svgs/news.svg"
            alt="News"
            width={500}
            height={500}
            className="opacity-15"
          />
        </motion.div>
      </AnimatedSection>
    </section>
  );
};

export default NewsSection;
