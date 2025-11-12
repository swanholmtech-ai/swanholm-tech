import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CartItemType {
  id: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  size: string;
}

interface CartItemsType {
  items: CartItemType[];
  totalPrice: number;
  selectedSize: string;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  clearCart: () => void;
  setSelectedSize: (size: string) => void;
}

export const useShoppingCartStore = create<CartItemsType>()(
  devtools((set) => ({
    items: [],
    totalPrice: 0,
    selectedSize: "",
    addToCart: (item: CartItemType) =>
      set((state) => ({
        items: [...state.items, item],
        totalPrice: state.totalPrice + item.price * item.quantity,
      })),
    removeFromCart: (item: CartItemType) =>
      set((state) => ({
        items: state.items.filter((i: CartItemType) => i.id !== item.id),
        totalPrice: state.totalPrice - item.price * item.quantity,
      })),
    clearCart: () => set({ items: [], totalPrice: 0 }),
    setSelectedSize: (size: string) => set({ selectedSize: size }),
  }))
);
