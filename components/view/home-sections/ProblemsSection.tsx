"use client";

import {
  AnimatedSection,
  ParallaxSection,
} from "@/components/animations/AnimatedSection";
import { fadeInUp, slideInLeft, blurIn } from "@/lib/animations";
import { motion } from "framer-motion";

export default function ProblemsSection() {
  return (
    <section className="w-full h-[100dvh] flex mt-14 relative overflow-hidden">
      {/* Industrial Warning Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-orange-900">
        {/* Animated warning stripes */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-red-600/20 to-orange-600/20"
              style={{
                height: "20px",
                width: "100%",
                top: `${i * 80}px`,
                transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Hazard symbols overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.1),transparent_50%)]" />
      </div>

      {/* Animated sparks and warning particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => {
          // Use deterministic positioning based on index
          const left = `${(i * 13 + i * 7) % 100}%`;
          const top = `${(i * 17 + i * 11) % 100}%`;
          const duration = 1 + ((i * 23) % 3);
          const delay = (i * 29) % 4;

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full"
              style={{
                left,
                top,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -100, 0],
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

      {/* Dark Overlay with Accident Image */}
      <ParallaxSection speed={40} className="absolute inset-0 z-0">
        <div
          className="h-[120vh] w-full relative"
          style={{
            backgroundImage: "url('/assets/imgs/accident.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
          }}
        />
      </ParallaxSection>

      {/* Warning Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] animate-pulse" />

      {/* Content Container - Max Width */}
      <div className="max-w-7xl mx-auto relative z-10 w-full flex">
        <div className="flex-1">
          <div className="px-12 pt-40 h-full">
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
                    ease: [0.16, 1, 0.3, 1],
                    type: "spring",
                    stiffness: 65,
                  },
                },
              }}
            >
              <h4
                className="text-7xl font-bold h-fit overflow-y-hidden
                bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent
                drop-shadow-[0_0_40px_rgba(239,68,68,0.6)]
                animate-pulse"
              >
                Work Accidents Happen Every Day
              </h4>
            </AnimatedSection>

            <AnimatedSection variants={slideInLeft} delay={0.2}>
              <motion.div
                className="mt-8 p-6 bg-red-900/30 border-l-4 border-red-500 backdrop-blur-sm rounded-r-lg"
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(153, 27, 27, 0.4)",
                  borderColor: "rgba(239, 68, 68, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <p className="text-xl text-red-100 font-medium">
                  Every 15 minutes a serious accident happens in the EU
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection
              variants={{
                hidden: { opacity: 0, x: -100, rotate: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.4,
                    type: "spring",
                    stiffness: 80,
                  },
                },
              }}
            >
              <motion.div
                className="mt-6 p-6 bg-orange-900/30 border-l-4 border-orange-500 backdrop-blur-sm rounded-r-lg"
                whileHover={{
                  x: 10,
                  scale: 1.02,
                  backgroundColor: "rgba(194, 65, 12, 0.4)",
                  borderColor: "rgba(251, 146, 60, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <p className="text-xl text-orange-100 font-medium">
                  Lone work and hazardous environments put lives at risk
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
}
