import { BasketItem } from "../redux/type";

const getSumBasketProducts = (products: BasketItem[]): number => {
  return products.reduce((a, b) => a + b.price * b.quantity, 0);
};

export default getSumBasketProducts;
