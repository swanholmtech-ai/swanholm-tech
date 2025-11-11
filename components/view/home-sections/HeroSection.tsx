"use client";

import { Nunito_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { slideInLeft } from "@/lib/animations";
import { staggerContainer } from "@/lib/animations";
import { listItemVariant } from "@/lib/animations";
import { CircleCheckIcon } from "lucide-react";
import { useState, useEffect } from "react";

const nunitoBold = Nunito_Sans({
  weight: ["800"],
  subsets: ["latin"],
  style: ["italic"],
});

const nunitoRegular = Nunito_Sans({
  weight: ["500"],
  subsets: ["latin"],
});

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/assets/bg/back-1.webp",
    "/assets/bg/back-2.webp",
    "/assets/bg/back-3.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000); // stays 7s per image
    return () => clearInterval(interval);
  }, []);

  const gridSize = 3;
  const tiles = Array.from({ length: gridSize * gridSize }, (_, i) => i);

  const containerW = 500;
  const containerH = 500;

  return (
    <article className="w-full h-[100dvh] flex relative overflow-hidden bg-paper">
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
            className={`${nunitoBold.className} pt-32 text-xl md:text-2xl lg:text-4xl tracking-tight overflow-y-hidden pl-12
            text-gray-600`}
          >
            What if your Vest could save your life?
          </h4>
        </AnimatedSection>

        <AnimatedSection variants={slideInLeft} delay={0.2}>
          <motion.p
            className={`${nunitoRegular.className} text-xl pt-10 pl-16 text-gray-500 max-w-3xl tracking-tight`}
          >
            Revolutionary smart safety technology that protects workers in
            real-time, combining AI detection with instant holographic alerts to
            save lives.
          </motion.p>
        </AnimatedSection>

        <motion.ul
          className={`${nunitoRegular.className} text-lg pt-8 pl-16 space-y-4 max-w-3xl text-gray-600`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.3 }}
        >
          {[
            {
              text: "Every worker deserves to come home safe",
            },
            {
              text: "Your vest technology watches out when no one else can",
            },
            {
              text: "You don't just get a notification, you get a saved life",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={listItemVariant}
              className={`flex items-center gap-4`}
              whileHover={{
                x: 15,
                scale: 1.03,
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

      <div
        className="relative flex-shrink-0 overflow-hidden mt-[26vh] mr-[10vw]"
        style={{
          width: containerW,
          height: containerH,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImage]}
            className="absolute inset-0 grid grid-cols-3 grid-rows-3"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              exit: {
                transition: { staggerChildren: 0.08, staggerDirection: -1 },
              },
            }}
          >
            {tiles.map((i) => {
              const row = Math.floor(i / gridSize);
              const col = i % gridSize;

              return (
                <motion.div
                  key={i}
                  className="relative overflow-hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    exit: { opacity: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{
                      backgroundImage: `url(${images[currentImage]})`,
                      backgroundSize: `${containerW}px ${containerH}px`,
                      backgroundPosition: `${(col / (gridSize - 1)) * 100}% ${
                        (row / (gridSize - 1)) * 100
                      }%`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  );
}
