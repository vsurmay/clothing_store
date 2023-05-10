export type ClothesProduct = {
  id: string;
  name: string;
  productCode: string;
  category: string;
  size: string[];
  color: string[];
  price: number;
  discount: number;
  rating: number;
  images: {
    [key: string]: string;
  };
};
