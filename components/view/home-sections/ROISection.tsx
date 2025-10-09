"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import {
  AnimatedSection,
  ParallaxSection,
} from "@/components/animations/AnimatedSection";
import {
  fadeInUp,
  slideInLeft,
  staggerContainer,
  listItemVariant,
} from "@/lib/animations";
import { motion } from "framer-motion";

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

const ROISection = () => {
  return (
    <section className="w-full h-[100dvh] flex relative overflow-hidden">
      {/* Luxury Financial Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
        {/* Animated financial grid */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="financial"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 40 L 0 40 M 40 0 L 40 80"
                  fill="none"
                  stroke="rgba(16,185,129,0.4)"
                  strokeWidth="1"
                />
                <text x="10" y="25" fill="rgba(16,185,129,0.6)" fontSize="10">
                  $
                </text>
                <text x="50" y="65" fill="rgba(16,185,129,0.6)" fontSize="10">
                  €
                </text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#financial)" />
          </svg>
        </div>

        {/* Golden particle effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => {
            // Use deterministic positioning based on index
            const left = `${(i * 19 + i * 13) % 100}%`;
            const top = `${(i * 23 + i * 17) % 100}%`;
            const duration = 3 + ((i * 31) % 4);
            const delay = (i * 37) % 6;

            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-amber-400 rounded-full"
                style={{
                  left,
                  top,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.8, 0],
                  y: [0, -150, 0],
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

        {/* Success overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.1),transparent_50%)]" />
      </div>

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
            className={`${poppinsBold.className} pt-32 text-7xl h-fit overflow-y-hidden pl-12
            bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent
            drop-shadow-[0_0_50px_rgba(16,185,129,0.6)]`}
          >
            SAFETY, THAT PAYS OFF
          </h4>
        </AnimatedSection>

        <AnimatedSection variants={slideInLeft} delay={0.2}>
          <motion.p
            className={`${poppinsThin.className} text-xl pt-10 pl-16 text-emerald-100 max-w-3xl`}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            Accidents cost in Lives, Downtime, and Insurance. Alert Vest reduces
            risks and improves employer branding.
          </motion.p>
        </AnimatedSection>

        <motion.ul
          className={`${poppinsRegular.className} text-lg pt-10 pl-16 space-y-4 max-w-3xl`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.3 }}
        >
          {[
            {
              icon: "💰",
              text: "Fewer accidents & sick leave",
              color: "emerald",
            },
            { icon: "📊", text: "Lower insurance costs", color: "green" },
            { icon: "🏆", text: "Stronger safety culture", color: "teal" },
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-full blur-3xl animate-pulse" />
              <Image
                src="/assets/imgs/vest-d2-ai.avif"
                alt="Vest"
                width={350}
                height={350}
                priority={true}
                className="relative drop-shadow-[0_0_50px_rgba(16,185,129,0.5)]"
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
            <div className="relative">
              <Image
                src="/assets/svgs/chart.svg"
                alt="Solution"
                width={750}
                height={750}
                className="relative drop-shadow-[0_0_60px_rgba(34,197,94,0.4)]"
              />
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ROISection;
