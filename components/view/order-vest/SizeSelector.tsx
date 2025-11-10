"use client";
import { useState } from "react";

const SizeSelector = ({ sizes }: { sizes: string }) => {
  const [size, setSize] = useState<string | null>(null);

  return (
    <div className="flex gap-2 items-center">
      <div className="text-green-300 text-md font-bold">Size:</div>
      {sizes.split(",").map((sizeOption) => (
        <div
          key={sizeOption}
          onClick={() => setSize(sizeOption)}
          className={
            "text-gray-400 text-md p-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          }
          style={{
            backgroundColor: size === sizeOption ? "#D5B226" : "",
            color: size === sizeOption ? "#116309" : "",
          }}
        >
          {sizeOption}
        </div>
      ))}
    </div>
  );
};

export default SizeSelector;
