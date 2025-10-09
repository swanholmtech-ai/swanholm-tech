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
    <section className="w-full h-[100dvh] flex mt-14 relative overflow-hidden">
      <div className="w-full">
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
            className={`${poppinsBold.className} pt-32 text-5xl h-fit w-2xl overflow-y-hidden text-sky-200 pl-12 text-stroke-default`}
          >
            SAFETY, THAT PAYS OFF
          </h4>
        </AnimatedSection>

        <AnimatedSection variants={slideInLeft} delay={0.2}>
          <motion.p
            className={`${poppinsThin.className} text-lg pt-8 pl-16`}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            Accidents cost in Lives, Downtime, and Insurance. Alert Vest reduces
            risks and improves employer branding.
          </motion.p>
        </AnimatedSection>

        <motion.ul
          className={`${poppinsRegular.className} text-lg pt-8 pl-16`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.3 }}
        >
          {[
            "Fewer accidents & sick leave",
            "Lower insurance costs",
            "Stronger safety culture",
          ].map((text, index) => (
            <motion.li
              key={index}
              variants={listItemVariant}
              whileHover={{
                x: 15,
                scale: 1.05,
                color: "#0ea5e9",
                transition: { duration: 0.2 },
              }}
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="flex w-full">
        <ParallaxSection speed={-30} className="absolute bottom-0 left-0">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/assets/imgs/vest-d2-ai.avif"
              alt="Vest"
              width={300}
              height={300}
              priority={true}
            />
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
              scale: 1.05,
              rotate: -3,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="/assets/svgs/chart.svg"
              alt="Solution"
              width={700}
              height={700}
            />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ROISection;
