"use client";

import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { slideInLeft } from "@/lib/animations";
import { staggerContainer } from "@/lib/animations";
import { listItemVariant } from "@/lib/animations";
import { ParallaxSection } from "@/components/animations/AnimatedSection";

const nunitoBold = Nunito_Sans({
  weight: ["800"],
  subsets: ["latin"],
  style: ["italic"],
});

const nunitoRegular = Nunito_Sans({
  weight: ["500"],
  subsets: ["latin"],
});

const nunitoThin = Nunito_Sans({
  weight: ["300"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <article className="w-full h-[100dvh] flex relative overflow-hidden">
      {/* Content Container - Max Width */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <AnimatedSection
          variants={{
            hidden: { opacity: 0, y: 100, scale: 0.6, rotateX: -45 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              transition: {
                duration: 1.3,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 60,
              },
            },
          }}
        >
          <h4
            className={`${nunitoBold.className} pt-32 text-xl md:text-2xl lg:text-4xl  overflow-y-hidden pl-12
            bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent
            drop-shadow-[0_0_50px_rgba(16,185,129,0.6)]`}
          >
            What if your Vest could save your life?
          </h4>
        </AnimatedSection>

        <AnimatedSection variants={slideInLeft} delay={0.2}>
          <motion.p
            className={`${nunitoThin.className} text-xl pt-10 pl-16 text-emerald-100 max-w-3xl`}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            Swanholm Technology&apos;s smart vest reduces cost of incidents,
            production stops, and sick leave{" "}
          </motion.p>
        </AnimatedSection>

        <motion.ul
          className={`${nunitoRegular.className} text-lg pt-10 pl-16 space-y-4 max-w-3xl`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.3 }}
        >
          {[
            {
              icon: "🤸🏽‍♂️",
              text: "3% of incident involves a fall or a slip",
              color: "emerald",
            },
            {
              icon: "📊",
              text: "Up to 20% of all accidents happen when the worker is alone",
              color: "green",
            },
            {
              icon: "⏰",
              text: "Every minute faster help arrives, the risk of serious injury decreases",
              color: "teal",
            },
            {
              icon: "🌤️",
              text: "A day less sick leave saves at least 20% of a monthly salary cost",
              color: "teal",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={listItemVariant}
              className={`flex items-center gap-4 p-4 bg-emerald-900/30 rounded-lg backdrop-blur-sm
              border border-emerald-500/20 text-emerald-100`}
              whileHover={{
                x: 15,
                scale: 1.03,
                borderColor: "rgba(16, 185, 129, 0.7)",
                backgroundColor: "rgba(5, 150, 105, 0.4)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.span
                className={`text-3xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {item.icon}
              </motion.span>
              <span className="text-lg">{item.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Images - Full Width positioned absolutely */}
      <div className="flex w-full absolute inset-0">
        <ParallaxSection speed={-30} className="absolute bottom-0 left-0">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="relative pl-10 pb-6">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-full blur-3xl animate-pulse" /> */}
              <Image
                src="/assets/svgs/chart.svg"
                alt="Vest"
                width={550}
                height={550}
                priority={true}
                className="relative drop-shadow-[0_0_50px_rgba(16,185,129,0.5)] opacity-44"
              />
            </div>
          </motion.div>
        </ParallaxSection>

        <AnimatedSection
          variants={{
            hidden: { opacity: 0, scale: 0.4, x: 150, rotate: 45 },
            visible: {
              opacity: 1,
              scale: 1,
              x: 0,
              rotate: 0,
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 70,
              },
            },
          }}
          delay={0.4}
          className="absolute bottom-0 right-0"
        >
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: -5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative pr-20 pb-[10%]">
              <Image
                src="/assets/bg/back-1.webp"
                alt="Solution"
                width={450}
                height={450}
                className="relative drop-shadow-[0_0_60px_rgba(34,197,94,0.4)]"
              />
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </article>
  );
}
