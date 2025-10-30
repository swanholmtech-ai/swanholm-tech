"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSelector = ({ imageGallery }: { imageGallery: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(imageGallery[0]);

  return (
    <div className="col-span-1 flex flex-col items-center">
      {/* Main image area */}
      <div className="relative w-[500px] h-[500px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute"
          >
            <Image
              src={selectedImage}
              alt="Selected"
              width={400}
              height={400}
              className="object-cover rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail gallery */}
      <div className="flex gap-2 mt-4">
        {imageGallery.map((image, index) => (
          <div
            key={index}
            className={`w-24 h-24 border-2 cursor-pointer overflow-hidden rounded-md transition-all duration-200 ${
              selectedImage === image
                ? "border-blue-500 scale-105"
                : "border-gray-600 hover:border-gray-400"
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              width={80}
              height={80}
              className="object-cover w-full h-full p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;
