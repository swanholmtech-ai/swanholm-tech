"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  style: ["italic"],
});

export default function SolutionSection() {
  return (
    <article className="w-full h-[100dvh] flex flex-col relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-indigo-900" />

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
              className="absolute text-cyan-400 font-mono text-sm opacity-60"
              style={{ left, top }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.4, 0.2],
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
          <h4
            className={`${poppinsBold.className} text-2xl md:text-3xl lg:text-4xl tracking-tight
          bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent
          drop-shadow-[0_0_40px_rgba(6,182,212,0.6)]`}
          >
            Work Confidently,
            <br />
            Your Smart Vest Has Your Back.
          </h4>
        </div>
        <div className="flex-2 w-[80%]">
          <div className="relative z-10 flex flex-row items-center justify-evenly h-full text-center">
            <Image
              src="/assets/svgs/vest.svg"
              alt="Solution"
              width={300}
              height={300}
              className="relative"
            />
            <div className="flex flex-col justify-center h-full text-left p-3 gap-4">
              <p
                className={`text-2xl ${poppinsBold.className} text-cyan-300 cursor-pointer hover:scale-105 transition-all hover:text-cyan-400 hover:rotate-2 hover:translate-y-2`}
              >
                AI Fall Detection
              </p>
              <p
                className={`text-2xl ${poppinsBold.className} text-cyan-300 cursor-pointer hover:scale-105 transition-all hover:text-cyan-400 hover:rotate-2 hover:translate-y-2`}
              >
                Three Alarm Types
              </p>
              <p
                className={`text-2xl ${poppinsBold.className} text-cyan-300 cursor-pointer hover:scale-105 transition-all hover:text-cyan-400 hover:rotate-2 hover:translate-y-2`}
              >
                Active Printed Light
              </p>
              <p
                className={`text-2xl ${poppinsBold.className} text-cyan-300 cursor-pointer hover:scale-105 transition-all hover:text-cyan-400 hover:rotate-2 hover:translate-y-2`}
              >
                Swanholm Sense App
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
