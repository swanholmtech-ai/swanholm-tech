"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
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
    <section className="w-full h-[100dvh] relative overflow-hidden">
      {/* Animated starfield - keeping the sparkling dots */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => {
            // Use deterministic positioning based on index
            const left = `${(i * 7 + i * 3) % 100}%`;
            const top = `${(i * 11 + i * 5) % 100}%`;
            const opacity = 0.2 + ((i * 13) % 60) / 100;
            const duration = 2 + ((i * 17) % 4);
            const delay = (i * 19) % 3;

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left,
                  top,
                  opacity,
                  zIndex: 20,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, opacity, 0],
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
      </div>

      {/* Vest Image */}
      <div className="absolute inset-0 z-0">
        <div className="h-[120vh] w-full relative">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url('/assets/bg/bg-1.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto h-full relative z-10">
        <div className="px-12 pt-40 h-full">
          <div>
            <h4
              className={`${poppinsBold.className} text-5xl font-bold h-content overflow-y-hidden`}
              style={{
                background: 'linear-gradient(-45deg, #06b6d4,rgb(181, 255, 203),rgb(255, 255, 255), #06b6d4,rgb(255, 251, 0))',
                backgroundSize: '400% 400%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-shift 12s ease-in-out infinite',
              }}
            >
              What if your Vest could save your life?
            </h4>

            <style jsx>{`
              @keyframes gradient-shift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
          </div>

          <p className={`${poppinsRegular.className} text-xl pt-8 text-gray-300 max-w-2xl pl-4`}>
            Revolutionary smart safety technology that protects workers in
            real-time, combining AI detection with instant holographic alerts to
            save lives.
          </p>

          <ul className={`${poppinsThin.className} text-lg pt-10 pl-6 space-y-3 max-w-2xl`}>
            {[
              "Every worker deserves to come home safe.",
              "Your vest technology watches out when no one else can.",
              "You don't just get a notification, you get a saved life.",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-400">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
