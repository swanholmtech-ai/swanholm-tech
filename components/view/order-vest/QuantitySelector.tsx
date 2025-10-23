"use client";
import { useState } from "react";
const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex gap-2 items-center text-gray-400">
      <div>Quantity:</div>
      <div className="flex gap-2">
        <div
          className="w-8 h-8 bg-gray-600 text-center cursor-pointer"
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </div>
        <div className="w-8 h-8 bg-gray-600 text-center cursor-pointer">
          {quantity}
        </div>
        <div
          className="w-8 h-8 bg-gray-600 text-center cursor-pointer"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
