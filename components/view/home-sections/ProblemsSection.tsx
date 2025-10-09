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
      <ParallaxSection speed={40} className="absolute inset-0 z-0">
        <div
          className="h-[120vh] w-full"
          style={{
            backgroundImage: "url('/assets/imgs/accident.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.3,
          }}
        />
      </ParallaxSection>

      <div className="relative z-10 w-full flex">
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
              <h4 className="text-5xl font-bold h-fit overflow-y-hidden text-amber-700">
                Work Accident Happen Every day
              </h4>
            </AnimatedSection>

            <AnimatedSection variants={slideInLeft} delay={0.2}>
              <motion.p
                className="text-lg pt-8"
                whileHover={{
                  x: 10,
                  color: "#f59e0b",
                  transition: { duration: 0.2 },
                }}
              >
                Every 15 minutes a serious accident happened in the EU
              </motion.p>
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
              <motion.p
                className="text-lg pt-8"
                whileHover={{
                  x: 10,
                  scale: 1.02,
                  color: "#f59e0b",
                  transition: { duration: 0.2 },
                }}
              >
                Lone work and hazardous environments put lives at risk
              </motion.p>
            </AnimatedSection>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
}
