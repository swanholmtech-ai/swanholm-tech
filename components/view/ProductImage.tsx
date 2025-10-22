"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProductType } from "@/types/types";

const ProductImage = ({ item }: { item: ProductType }) => {
  const [hovered, setHovered] = useState(false);
  const size = item.id === 173 || item.id === 548 ? 140 : 160;

  return (
    <div
      className="relative"
      style={{ width: size, height: size, perspective: 1000 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: hovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Image */}
        <motion.div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain rounded-xl"
          />
        </motion.div>

        {/* Back Image */}
        <motion.div
          className="absolute inset-0"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={item.imageBack || item.image}
            alt={`${item.name} back`}
            fill
            className="object-contain rounded-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductImage;
