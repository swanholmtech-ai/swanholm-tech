"use client";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { slideInLeft } from "@/lib/animations";
import { motion } from "framer-motion";
import StepCard from "./problem-section/StepCard";
import { Nunito_Sans } from "next/font/google";
import { useState } from "react";
const nunitoRegular = Nunito_Sans({
  weight: ["600"],
  subsets: ["latin"],
  style: ["normal"],
});

const nunitoBold = Nunito_Sans({
  weight: ["800"],
  subsets: ["latin"],
  style: ["italic"],
});

export default function ProblemsSection() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <article
      className="w-full h-[100dvh] flex relative overflow-hidden"
      style={{
        backgroundColor: "#f2eded",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full flex">
        <div className="flex-1">
          <div className="px-12 pt-32 h-full">
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
                className={`${nunitoBold.className} text-xl md:text-2xl lg:text-4xl xl:text-5xl h-fit overflow-y-hidden tracking-tighter text-gray-600`}
              >
                Work Accidents Happen Every Day
              </h4>
            </AnimatedSection>

            <AnimatedSection variants={slideInLeft} delay={0.4}>
              <motion.div
                className="bg-gray-300 backdrop-blur-sm w-fit cursor-pointer mt-8 ml-4"
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(211, 203, 255, 0.97)",
                  transition: { duration: 0.2 },
                }}
                onClick={() => setCurrentStep(1)}
              >
                <p
                  className={`md:text-4xl text-gray-400 text-sm ${nunitoRegular.className} font-bold tracking-tighter hover:text-gray-600`}
                >
                  Problem Statement
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
                    delay: 0.2,
                    type: "spring",
                    stiffness: 80,
                  },
                },
              }}
            >
              <motion.div
                className="bg-gray-300 backdrop-blur-sm w-fit cursor-pointer mt-1 ml-4"
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(255, 216, 158, 0.97)",
                  transition: { duration: 0.2 },
                }}
                onClick={() => setCurrentStep(2)}
              >
                <p
                  className={`md:text-4xl text-gray-400 text-sm ${nunitoRegular.className} font-bold tracking-tighter hover:text-gray-600`}
                >
                  Solution
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
                className="bg-gray-300 backdrop-blur-sm w-fit cursor-pointer mt-1 ml-4"
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(255, 167, 228, 0.97)",
                  transition: { duration: 0.2 },
                }}
                onClick={() => setCurrentStep(3)}
              >
                <p
                  className={`md:text-4xl text-gray-400 text-sm ${nunitoRegular.className} font-bold tracking-tighter hover:text-gray-100`}
                >
                  Value We Provide
                </p>
              </motion.div>
            </AnimatedSection>
            <StepCard currentStep={currentStep} />
          </div>
        </div>
      </div>
    </article>
  );
}
