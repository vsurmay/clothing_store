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

export type BasketItem = {
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  image: string;
  productCode: string;
  uniqueCode: string;
};

export type ArticleItem = {
  bgBanner: string;
  date: string;
  firstDescribtion: string;
  firstSubtitle: string;
  id: string;
  image: string;
  mainTitle: string;
  secondlyDescribtion: string;
  secondlySubtitle: string;
  type: string;
  blogCartDescribtion: string;
};
