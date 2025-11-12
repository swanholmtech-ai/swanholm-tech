"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCartStore } from "@/store/useShoppingCartStore";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const AddToCart = ({ productData }: { productData: any }) => {
  const { addToCart, selectedSize, selectedQuantity } = useShoppingCartStore();
  const addToCartHandler = () => {
    if (!selectedSize) {
      toast.error("Please select a size", {
        duration: 2000,
        position: "top-center",
      });

      return;
    }
    addToCart({
      id: productData.id,
      name: productData.name,
      slug: productData.slug,
      price: productData.price,
      quantity: selectedQuantity,
      size: selectedSize,
    });
    toast.success("Product added to cart", {
      duration: 2000,
      position: "top-center",
    });
  };

  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        className="bg-yellow-400 text-black cursor-pointer"
        onClick={addToCartHandler}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
