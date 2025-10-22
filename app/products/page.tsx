"use client";
import { motion, useInView } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import useProducts from "@/store/useProducts";
import { Poppins } from "next/font/google";
import { useRef } from "react";
import ProductImage from "@/components/view/ProductImage";

const poppinsRegular = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

const poppinsThin = Poppins({
  weight: ["200"],
  subsets: ["latin"],
});

export default function ProductsPage() {
  const { products } = useProducts();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.1,
  });

  return (
    <main className="max-w-7xl mt-20 mx-auto h-[calc(100vh-5rem)]">
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-10 w-full px-4"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
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
            className="flex flex-col items-center px-4 py-2 w-full cursor-pointer"
            style={{
              border: "1px solid rgba(88, 88, 88, 0.2)", // define an initial border!
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
              borderColor: "rgb(255, 251, 21)",
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-full h-[80px] flex justify-center items-center">
              <h5
                className={`${poppinsRegular.className} text-sm text-blue-200 font-bold`}
              >
                {item.name}
              </h5>
            </div>

            <div className="w-full flex-1 flex justify-center items-center mb-4">
              {/* <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              > */}
              <ProductImage item={item} />
              {/* </motion.div> */}
            </div>
            <div className="w-full h-[10px] flex justify-center items-center">
              <div
                className={`${poppinsThin.className} text-sm text-blue-200 font-bold flex justify-between w-full`}
              >
                <div className="text-white">Price: {item.price} kr </div>
                {item.inStock ? (
                  <div>
                    <span className="text-green-700 hover:text-green-500 font-bold italic">
                      In Stock
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="text-red-500 font- italic">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
