"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import useProducts from "@/store/useProducts";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsThin = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});

const poppinsRegular = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export default function ProductsPage() {
  const { products } = useProducts();

  return (
    <main className="max-w-7xl mt-20 mx-auto">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-10 w-full px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.1 }}
      >
        {products.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: {
                opacity: 0,
                y: 80,
                scale: 0.8,
                rotate: -5,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.15,
                },
              },
            }}
            className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-2xl shadow-xl 
                flex flex-col items-center p-4 w-full
                border border-blue-500/30 backdrop-blur-sm cursor-pointer"
            whileHover={{
              scale: 1.05,
              y: -10,
              borderColor: "rgba(59, 130, 246, 0.7)",
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-full flex justify-center items-center mb-4">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="rounded-xl object-cover shadow-lg"
                />
              </motion.div>
            </div>
            <div className="w-full">
              <h5
                className={`${poppinsRegular.className} text- text-blue-200 font-bold`}
              >
                {item.name}
              </h5>
              <motion.span
                className="text-sm text-purple-300"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: 0,
                }}
              >
                {item.price}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
