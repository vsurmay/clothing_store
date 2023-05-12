import { ClothesProduct } from "../redux/type";

type GetSortProducts = (
  products: ClothesProduct[],
  param: "rating" | "discount",
  descOrAsc: "asc" | "desc"
) => ClothesProduct[];

const getSortProducts: GetSortProducts = (products, param, descOrAsc) => {
  if (descOrAsc === "desc") {
    return products.sort((a, b) => b[param] - a[param]);
  } else {
    return products.sort((a, b) => a[param] - b[param]);
  }
};

export default getSortProducts;
