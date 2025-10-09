"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  ParallaxSection,
} from "@/components/animations/AnimatedSection";
import {
  fadeInUp,
  staggerContainer,
  listItemVariant,
  scaleIn,
} from "@/lib/animations";

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

const CredibilitySection = () => {
  return (
    <section className="w-full h-[100dvh] flex mt-14 relative overflow-hidden">
      {/* European Trust Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900">
        {/* Animated trust waves */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-xl"
              style={{
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, 30, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Credibility overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.15),transparent_50%)]" />
      </div>

      {/* Floating trust particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const left = `${(i * 7 + i * 11) % 100}%`;
          const top = `${(i * 13 + i * 17) % 100}%`;
          const duration = 3 + (i % 5);
          const delay = (i * 19) % 4;

          return (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-teal-400 rounded-full"
              style={{
                left,
                top,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.8, 0],
                y: [0, -50, 0],
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

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full flex relative z-10">
        <div className="w-full px-12">
          <AnimatedSection
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.8 },
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
              className={`${poppinsBold.className} pt-32 text-6xl overflow-y-hidden
              bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent
              drop-shadow-[0_0_40px_rgba(20,184,166,0.6)]`}
            >
              Already Trusted in Europe
            </h4>
          </AnimatedSection>

          <AnimatedSection variants={fadeInUp} delay={0.2}>
            <motion.p
              className={`${poppinsThin.className} text-xl pt-8 text-teal-100 max-w-2xl`}
              whileHover={{
                x: 10,
                transition: { duration: 0.3 },
              }}
            >
              Accidents cost in Lives, Downtime, and Insurance. Alert Vest
              reduces risks and improves employer branding.
            </motion.p>
          </AnimatedSection>

          <motion.ul
            className={`${poppinsRegular.className} text-lg pt-8 space-y-3 max-w-2xl`}
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
                className="flex items-center gap-3 text-teal-200"
                whileHover={{
                  x: 15,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.span
                  className="w-3 h-3 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 rgba(20, 184, 166, 0)",
                      "0 0 20px rgba(20, 184, 166, 0.6)",
                      "0 0 0 rgba(20, 184, 166, 0)",
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

        <div className="flex w-full relative">
          <AnimatedSection variants={scaleIn} delay={0.4}>
            <motion.div
              className="absolute bottom-0 left-14"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse" />
              <Image
                src="/assets/svgs/trust.svg"
                alt="Vest"
                width={300}
                height={300}
                priority={true}
                className="relative"
              />
            </motion.div>
          </AnimatedSection>

          <ParallaxSection speed={30} className="absolute bottom-0 right-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.25, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
            >
              <Image
                src="/assets/imgs/eu.avif"
                alt="Solution"
                width={700}
                height={700}
                className="opacity-20"
              />
            </motion.div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
