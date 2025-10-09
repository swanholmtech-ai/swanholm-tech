"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import {
  AnimatedSection,
  ScrollScale,
} from "@/components/animations/AnimatedSection";
import { fadeInUp, slideInLeft, slideInRight, scaleIn } from "@/lib/animations";
import { motion } from "framer-motion";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  style: ["italic"],
});

export default function SolutionSection() {
  return (
    <section className="w-full h-[100dvh] flex flex-col mt-14 relative overflow-hidden">
      {/* High-Tech Interface Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-indigo-900">
        {/* Animated circuit board pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="circuit"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 50 L 0 50 M 50 0 L 50 100 M 25 25 L 75 25 M 25 75 L 75 75"
                  fill="none"
                  stroke="rgba(6,182,212,0.3)"
                  strokeWidth="2"
                />
                <circle cx="50" cy="50" r="4" fill="rgba(6,182,212,0.5)" />
                <circle cx="25" cy="25" r="2" fill="rgba(168,85,247,0.4)" />
                <circle cx="75" cy="75" r="2" fill="rgba(168,85,247,0.4)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Holographic overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      {/* Floating data streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 font-mono text-sm opacity-60"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {Array.from({ length: 5 }).map((_, j) => (
              <motion.span
                key={j}
                className="block"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: j * 0.1,
                }}
              >
                {Math.random().toString(36).substring(7)}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Content Container - Max Width */}
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-1 relative z-10">
        <div className="flex-1 mx-auto">
          <AnimatedSection
            variants={{
              hidden: { opacity: 0, y: -80, scale: 0.7 },
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
              className={`${poppinsBold.className} text-6xl tracking-tight text-center pt-32
              bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent
              drop-shadow-[0_0_40px_rgba(6,182,212,0.6)]`}
            >
              Work Confidently,
              <br />
              Your Smart Vest Has Your Back.
            </h4>
          </AnimatedSection>
        </div>

        <div className="flex-4 p-12 flex items-center justify-center">
          <div className="flex justify-evenly w-full items-center">
            <AnimatedSection variants={slideInLeft} delay={0.1}>
              <motion.div
                className="flex-2 text-center flex flex-col items-center justify-center gap-6 p-8
                bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl backdrop-blur-sm
                border border-cyan-500/30"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(6, 182, 212, 0.7)",
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <motion.svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </motion.svg>
                </div>
                <p
                  className={`text-2xl ${poppinsBold.className} text-cyan-300`}
                >
                  AI Fall Detection
                </p>
                <p className={`text-xl ${poppinsBold.className} text-blue-400`}>
                  Three Alarm Types
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection
              variants={{
                hidden: { opacity: 0, scale: 0.3, rotate: -180 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: 0.3,
                  },
                },
              }}
            >
              <div className="flex-3 flex items-center justify-center">
                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.2,
                    rotate: 15,
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
                  <motion.div
                    className="relative"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(6, 182, 212, 0)",
                        "0 0 50px rgba(6, 182, 212, 0.5)",
                        "0 0 0 rgba(6, 182, 212, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Image
                      src="/assets/svgs/vest.svg"
                      alt="Solution"
                      width={450}
                      height={450}
                      className="relative"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection variants={slideInRight} delay={0.1}>
              <motion.div
                className="flex-2 text-center flex flex-col items-center justify-center gap-6 p-8
                bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-2xl backdrop-blur-sm
                border border-purple-500/30"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(168, 85, 247, 0.7)",
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <motion.svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </motion.svg>
                </div>
                <p
                  className={`text-2xl ${poppinsBold.className} text-purple-300`}
                >
                  Swanholm Sense App
                </p>
                <p
                  className={`text-xl ${poppinsBold.className} text-indigo-400`}
                >
                  Privacy First
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
