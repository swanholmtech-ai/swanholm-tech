"use client";

import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function ContactPage() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  // Generate snowflakes only on the client (after mount)
  useEffect(() => {
    const flakes = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.4,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <main className="relative overflow-hidden max-w-7xl mt-20 mx-auto h-[calc(100vh-5rem)] text-center text-gray-200 flex items-center justify-center">
      {/* ❄️ Snowflakes Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {snowflakes.map((flake) => (
          <motion.div
            key={flake.id}
            className="absolute rounded-full bg-white"
            style={{
              width: flake.size,
              height: flake.size,
              left: `${flake.left}%`,
              top: -10,
              opacity: flake.opacity,
              filter: "blur(1px)",
            }}
            animate={{
              y: ["-10vh", "110vh"],
              x: ["0vw", `${Math.random() * 10 - 5}vw`],
            }}
            transition={{
              duration: flake.duration,
              delay: flake.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 flex justify-evenly items-center w-full px-8">
        <div className="flex-1 p-6 rounded-xl">
          <div className="flex flex-row gap-2 items-center py-2">
            <Phone className="text-cyan-300" />
            +46 73 649 7710
          </div>
          <div className="flex flex-row gap-2 items-center py-4">
            <Mail className="text-cyan-300" />
            info@swanholmtech.com
          </div>
          <div className="flex flex-row gap-2 items-center py-2">
            <Image
              aria-hidden
              src="/assets/svgs/swan.svg"
              alt="Swanholm logo"
              width={32}
              height={32}
            />
            Swanholm Technology AB
          </div>
          <div className="flex flex-row gap-2 items-center py-2">
            <MapPin className="text-cyan-300" />
            Ranhammarsvägen 24
          </div>
          <div className="flex flex-row gap-2 items-center py-2">
            <ChevronRight className="text-cyan-300" />
            168 67 Bromma, Sweden
          </div>
        </div>

        <div className="flex-2 rounded-xl p-6"></div>
      </div>
    </main>
  );
}
