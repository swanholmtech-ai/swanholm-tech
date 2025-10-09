"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { ParallaxSection } from "@/components/animations/AnimatedSection";
import { fadeInUp, staggerContainer, listItemVariant } from "@/lib/animations";

const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  style: ["italic"],
});

const poppinsRegular = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

const poppinsThin = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="w-full h-[100dvh] bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <ParallaxSection speed={-40} className="absolute inset-0 -z-10">
        <div
          className="h-[120vh] w-full"
          style={{
            backgroundImage: "url('/assets/imgs/vest-img.webp')",
            backgroundSize: "350px",
            backgroundPosition: "right bottom",
            backgroundRepeat: "no-repeat",
          }}
        />
      </ParallaxSection>

      <div className="px-12 pt-40 h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 60,
          }}
        >
          <h4
            className={`${poppinsBold.className} text-5xl font-bold h-content overflow-y-hidden text-cyan-700 tracking-tighter 
            hover:scale-105 transition-all duration-300 hover:text-cyan-800 hover:rotate-2 cursor-pointer`}
          >
            What if your Vest could save your life?
          </h4>
        </motion.div>

        <motion.p
          className={`${poppinsRegular.className} text-lg pt-8`}
          initial={{ opacity: 0, x: -60, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Swanholm Tech is a technology company that provides technology
          solutions to businesses.
        </motion.p>

        <motion.ul
          className={`${poppinsThin.className} text-xl pt-8 pl-16`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px", amount: 0.3 }}
        >
          {[
            "Every worker deserves to come home safe.",
            "Your vest technology watches out when no one else can.",
            "You don't just get a notification, you get a saved life.",
          ].map((text, index) => (
            <motion.li
              key={index}
              variants={listItemVariant}
              whileHover={{
                x: 10,
                color: "#06b6d4",
                transition: { duration: 0.2 },
              }}
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
