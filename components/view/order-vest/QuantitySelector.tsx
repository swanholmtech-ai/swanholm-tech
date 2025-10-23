"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex gap-2 text-gray-400 items-center">
      <div className="text-green-300">Quantity:</div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="w-8 h-8 text-center cursor-pointer"
          onClick={() => {
            if (quantity <= 1) return;
            setQuantity(quantity - 1);
          }}
        >
          <Minus />
        </Button>
        <div className="w-8 h-8 text-center cursor-pointer">{quantity}</div>
        <Button
          variant="outline"
          className="w-8 h-8 text-center cursor-pointer"
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
