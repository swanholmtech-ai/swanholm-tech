"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCartStore } from "@/store/useShoppingCartStore";

const AddToCart = ({ productData }: { productData: any }) => {
  const { addToCart, selectedSize } = useShoppingCartStore();
  const addToCartHandler = () => {
    console.log("ADD TO CART PRODUCT DATA", productData);
    addToCart({
      id: productData.id,
      name: productData.name,
      slug: productData.slug,
      price: productData.price,
      quantity: 1,
      size: selectedSize || "",
    });
  };

  return (
    <Button
      variant="outline"
      className="bg-yellow-400 text-black cursor-pointer"
      onClick={addToCartHandler}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
