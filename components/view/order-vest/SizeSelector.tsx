"use client";
import { useState } from "react";

const SizeSelector = () => {
  const [size, setSize] = useState<string | null>(null);

  const sizes = ["S", "M", "L", "XL"];
  return (
    <div className="flex gap-2 items-center">
      <div className="text-gray-400 text-md font-bold">Size:</div>
      {sizes.map((sizeOption) => (
        <div
          key={sizeOption}
          onClick={() => setSize(sizeOption)}
          className={
            "text-gray-400 text-md p-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          }
          style={{
            backgroundColor: size === sizeOption ? "#116309" : "",
          }}
        >
          {sizeOption}
        </div>
      ))}
    </div>
  );
};

export default SizeSelector;
