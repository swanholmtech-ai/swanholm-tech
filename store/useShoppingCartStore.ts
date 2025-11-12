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
  selectedQuantity: number;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  clearCart: () => void;
  setSelectedSize: (size: string) => void;
  setSelectedQuantity: (quantity: number) => void;
}

export const useShoppingCartStore = create<CartItemsType>()(
  devtools((set) => ({
    items: [],
    totalPrice: 0,
    selectedSize: "",
    selectedQuantity: 1,
    addToCart: (item: CartItemType) =>
      set((state) => {
        const existingItemIndex = state.items.findIndex(
          (i) => i.id === item.id && i.size === item.size
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += item.quantity;

          return {
            items: updatedItems,
            totalPrice: state.totalPrice + item.price * item.quantity,
          };
        }

        return {
          items: [...state.items, item],
          totalPrice: state.totalPrice + item.price * item.quantity,
        };
      }),
    removeFromCart: (item: CartItemType) =>
      set((state) => {
        const updatedItems = [...state.items];
        const itemIndex = updatedItems.findIndex(
          (i) => i.id === item.id && i.size === item.size
        );

        if (itemIndex !== -1) {
          updatedItems.splice(itemIndex, 1);
        }

        return {
          items: updatedItems,
          totalPrice: state.totalPrice - item.price * item.quantity,
        };
      }),
    clearCart: () => set({ items: [], totalPrice: 0 }),
    setSelectedSize: (size: string) => set({ selectedSize: size }),
    setSelectedQuantity: (quantity: number) =>
      set({ selectedQuantity: quantity }),
  }))
);
