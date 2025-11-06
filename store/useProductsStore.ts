import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductType } from "@/types/types";
import { products } from "@/data/fetchData";

interface ProductState {
  products: ProductType[];
}

const useProductsStore = create<ProductState>()(
  devtools((set) => ({
    products,
  }))
);

export default useProductsStore;
