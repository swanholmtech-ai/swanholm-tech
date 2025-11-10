export type ProductType = {
  id: string | number;
  name: string;
  slug: string;
  description: string;
  sizes: string;
  price: number;
  image_url: string | string[];
  quantity: number;
};
