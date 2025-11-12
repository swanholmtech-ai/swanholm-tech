"use client";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useShoppingCartStore } from "@/store/useShoppingCartStore";
const QuantitySelector = () => {
  const { setSelectedQuantity, selectedQuantity } = useShoppingCartStore();
  return (
    <div className="flex gap-2 text-gray-400 items-center">
      <div className="text-green-300">Quantity:</div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="w-8 h-8 text-center cursor-pointer"
          onClick={() => {
            if (selectedQuantity <= 1) return;
            setSelectedQuantity(selectedQuantity - 1);
          }}
        >
          <Minus />
        </Button>
        <div className="w-8 h-8 text-center cursor-pointer">
          {selectedQuantity}
        </div>
        <Button
          variant="outline"
          className="w-8 h-8 text-center cursor-pointer"
          onClick={() => setSelectedQuantity(selectedQuantity + 1)}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
