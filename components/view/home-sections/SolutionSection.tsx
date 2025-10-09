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
            className={`${poppinsBold.className} text-4xl tracking-tight text-center pt-32 text-teal-700`}
          >
            Work Confidently,
            <br />
            Your Smart Vest Has Your Back.
          </h4>
        </AnimatedSection>
      </div>

      <div className="flex-4 p-12 flex items-center justify-center">
        <div className="flex justify-evenly w-full text-cyan-700">
          <AnimatedSection variants={slideInLeft} delay={0.1}>
            <motion.div
              className="flex-2 text-center flex flex-col items-center justify-center gap-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <p className={`text-3xl ${poppinsBold.className}`}>
                AI Fall Detection
              </p>
              <p className={`text-3xl ${poppinsBold.className}`}>
                Three Alarm Type
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
            <div
              className="flex-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <Image
                  src="/assets/svgs/vest.svg"
                  alt="Solution"
                  width={400}
                  height={400}
                />
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection variants={slideInRight} delay={0.1}>
            <motion.div
              className="flex-2 text-center flex flex-col items-center justify-center gap-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <p className={`text-3xl ${poppinsBold.className}`}>
                Swanholm Sense App
              </p>
              <p className={`text-3xl ${poppinsBold.className}`}>
                Privacy First{" "}
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
