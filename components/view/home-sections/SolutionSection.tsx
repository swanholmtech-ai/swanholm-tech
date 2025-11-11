"use client";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";
import VestSvg from "../vest-hover-effect/VestSvg";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  style: ["italic"],
});

export default function SolutionSection() {
  return (
    <article className="w-full h-[100dvh] flex flex-col relative overflow-hidden back-ground-color">
      {/* Subtle circuit pattern */}
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
                stroke="rgba(18, 52, 58, 0.3)"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="4" fill="rgba(35, 53, 56, 0.9)" />
              <circle cx="25" cy="25" r="2" fill="rgba(3, 1, 5, 0.8)" />
              <circle cx="75" cy="75" r="2" fill="rgba(0, 0, 0, 0.8)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Holographic overlays */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" /> */}

      {/* Floating binary data streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => {
          const left = `${8 + i * 9}%`;
          const top = `${15 + (i % 4) * 20}%`;
          const duration = (3 + i * 0.5) * 10;
          const delay = i * 0.3;

          const dataStrings = [
            "01011010",
            "11001001",
            "10101010",
            "11001100",
            "10110010",
            "01101001",
            "10011001",
            "11010010",
          ];

          return (
            <motion.div
              key={i}
              className="absolute text-cyan-900 font-mono text-sm opacity-100"
              style={{ left, top }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                delay,
              }}
            >
              {Array.from({ length: 5 }).map((_, j) => (
                <motion.span
                  key={j}
                  className="block"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 10, // very slow fade in/out
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                    delay: j * 2, // staggered fade per line
                  }}
                >
                  {dataStrings[i % dataStrings.length]}
                </motion.span>
              ))}
            </motion.div>
          );
        })}
      </div>

      {/* Centered headline */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="flex-1 flex flex-col items-center justify-center h-full text-center">
          <AnimatedSection
            variants={{
              hidden: { opacity: 0, y: 120, scale: 0.7, rotateX: 45 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                transition: {
                  duration: 1.3,
                  type: "tween", // smooth, no spring bounce
                  ease: [0.16, 1, 0.3, 1], // gentle easing
                },
              },
            }}
          >
            <h4
              className={`${poppinsBold.className} text-2xl md:text-3xl lg:text-4xl tracking-tight text-gray-400`}
            >
              Work Confidently,
              <br />
              Your Smart Vest Has Your Back.
            </h4>
          </AnimatedSection>
        </div>
        <div className="flex-2 w-[80%]">
          <div className="relative z-10 flex flex-row items-center justify-evenly h-full text-center">
            <VestSvg />
          </div>
        </div>
      </div>
    </article>
  );
}
