export type ProductType = {
  name: string;
  price: number;
  description: string;
  image: string;
  size: ("S" | "M" | "L" | "XL" | "2XL")[];
  imageGallery?: string[];
  id: string | number;
  inStock: boolean;
};
