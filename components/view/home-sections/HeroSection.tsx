"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { ParallaxSection } from "@/components/animations/AnimatedSection";
import { fadeInUp, staggerContainer, listItemVariant } from "@/lib/animations";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  style: ["italic"],
});

const poppinsRegular = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

const poppinsThin = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="w-full h-[100dvh] relative overflow-hidden">
      {/* Cosmic Background with Animated Stars */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
        {/* Animated starfield */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => {
            // Use deterministic positioning based on index
            const left = `${(i * 7 + i * 3) % 100}%`;
            const top = `${(i * 11 + i * 5) % 100}%`;
            const opacity = 0.2 + ((i * 13) % 60) / 100;
            const duration = 2 + ((i * 17) % 4);
            const delay = (i * 19) % 3;

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left,
                  top,
                  opacity,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, opacity, 0],
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

        {/* Cosmic nebulae */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Holographic Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(168,85,247,0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Parallax Vest with Holographic Glow */}
      <ParallaxSection speed={-40} className="absolute inset-0 z-0">
        <div className="h-[120vh] w-full relative">
          {/* Holographic glow rings */}
          <div className="absolute right-0 bottom-0 w-[600px] h-[600px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-cyan-400/30 rounded-full"
                style={{
                  width: `${300 + i * 100}px`,
                  height: `${300 + i * 100}px`,
                  right: `${-50 + i * 50}px`,
                  bottom: `${-50 + i * 50}px`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  borderColor: [
                    "rgba(6, 182, 212, 0.3)",
                    "rgba(168, 85, 247, 0.5)",
                    "rgba(236, 72, 153, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url('/assets/imgs/vest-img.webp')",
              backgroundSize: "450px",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              filter:
                "drop-shadow(0 0 60px rgba(6, 182, 212, 0.4)) brightness(1.2) contrast(1.1)",
            }}
          />
        </div>
      </ParallaxSection>

      {/* Content with Futuristic Styling */}
      <div className="max-w-7xl mx-auto h-full relative z-10">
        <div className="px-12 pt-40 h-full">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 60,
            }}
          >
            <h4
              className={`${poppinsBold.className} text-7xl font-bold h-content overflow-y-hidden
              bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent
              tracking-tighter hover:scale-105 transition-all duration-500 cursor-pointer
              drop-shadow-[0_0_40px_rgba(6,182,212,0.6)]
              animate-pulse`}
            >
              What if your Vest could save your life?
            </h4>
          </motion.div>

          <motion.p
            className={`${poppinsRegular.className} text-xl pt-8 text-cyan-100 max-w-2xl`}
            initial={{ opacity: 0, x: -60, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Revolutionary smart safety technology that protects workers in
            real-time, combining AI detection with instant holographic alerts to
            save lives.
          </motion.p>

          <motion.ul
            className={`${poppinsThin.className} text-lg pt-10 pl-0 space-y-3 max-w-2xl`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px", amount: 0.3 }}
          >
            {[
              "Every worker deserves to come home safe.",
              "Your vest technology watches out when no one else can.",
              "You don't just get a notification, you get a saved life.",
            ].map((text, index) => (
              <motion.li
                key={index}
                variants={listItemVariant}
                className="flex items-center gap-3 text-cyan-200"
                whileHover={{
                  x: 15,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.span
                  className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 rgba(6, 182, 212, 0)",
                      "0 0 20px rgba(6, 182, 212, 0.6)",
                      "0 0 0 rgba(6, 182, 212, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
