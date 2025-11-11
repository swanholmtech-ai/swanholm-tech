"use client";

import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { slideInLeft } from "@/lib/animations";
import { staggerContainer } from "@/lib/animations";
import { listItemVariant } from "@/lib/animations";
import { ParallaxSection } from "@/components/animations/AnimatedSection";
import { CircleCheckIcon } from "lucide-react";

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
            Revolutionary smart safety technology that protects workers in
            real-time, combining AI detection with instant holographic alerts to
            save lives.
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
              text: "Every worker deserves to come home safe",
              color: "emerald",
            },
            {
              text: "Your vest technology watches out when no one else can",
              color: "green",
            },
            {
              text: "You don't just get a notification, you get a saved life",
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
                <CircleCheckIcon className="w-6 h-6" />
              </motion.span>
              <span className="text-lg">{item.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Images - Full Width positioned absolutely */}
      <div className="flex w-full absolute inset-0">
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
