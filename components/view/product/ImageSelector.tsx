"use client";
import Image from "next/image";
import { useState } from "react";

const ImageSelector = ({ imageGallery }: { imageGallery: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(imageGallery[0]);
  return (
    <div className="col-span-1">
      <Image
        src={selectedImage}
        alt="Swanholm Tech Vest"
        width={500}
        height={500}
      />
      <div className="flex gap-2">
        {imageGallery?.map((image: string, index: number) => (
          <div
            className="flex-1 w-1/4 h-24 bg-gray-800 border border-gray-600 text-center text-gray-100 cursor-pointer"
            key={index}
          >
            <Image
              className="w-full h-full object-cover p-4"
              src={image}
              alt="Swanholm Tech Vest"
              width={50}
              height={50}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;
