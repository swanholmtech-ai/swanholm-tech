"use client";
import { useShoppingCartStore } from "@/store/useShoppingCartStore";

const SizeSelector = ({ sizes }: { sizes: string }) => {
  // const [size, setSize] = useState<string | null>(null);
  const { setSelectedSize, selectedSize } = useShoppingCartStore();

  return (
    <div className="flex gap-2 items-center">
      <div className="text-green-300 text-md font-bold">Size:</div>
      {sizes.split(",").map((sizeOption) => (
        <div
          key={sizeOption}
          onClick={() => setSelectedSize(sizeOption)}
          className={
            "text-gray-400 text-md p-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          }
          style={{
            backgroundColor: selectedSize === sizeOption ? "#D5B226" : "",
            color: selectedSize === sizeOption ? "#116309" : "",
          }}
        >
          {sizeOption}
        </div>
      ))}
    </div>
  );
};

export default SizeSelector;
