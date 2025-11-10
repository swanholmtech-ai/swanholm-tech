import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductType } from "@/types/types";

interface ProductState {
  isLoading: boolean;
  error: any | null;
  products: ProductType[];
  fetchProducts: () => Promise<void>;
}

const useProductsStore = create<ProductState>()(
  devtools((set) => ({
    isLoading: true,
    error: null,
    products: [],

    // ✅ Properly added fetchProducts method
    fetchProducts: async () => {
      try {
        const response = await fetch(
          "https://www.swanholmtech.com/wp-json/wp/v2/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        // ✅ Safely handle image_url parsing
        const mapped = data.map((product: any) => {
          let imageArray: string[] = [];

          if (
            typeof product.image_url === "string" &&
            product.image_url.trim() !== ""
          ) {
            imageArray = product.image_url
              .split(",")
              .map(
                (url: string) =>
                  `https://www.swanholmtech.com/wp-content/uploads/${url.trim()}`
              );
          }

          return {
            ...product,
            image_url: imageArray,
          };
        });

        set({
          isLoading: false,
          error: null,
          products: mapped,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        set({ isLoading: false, error });
      }
    },
  }))
);

export default useProductsStore;
