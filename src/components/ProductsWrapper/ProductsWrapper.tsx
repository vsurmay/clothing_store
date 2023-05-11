import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsWrapper.module.scss";
import { ClothesProduct } from "../../redux/type";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";

type ProductsWrapperProps = {
  products: ClothesProduct[];
  skeleton: boolean;
};

const ProductsWrapper: React.FC<ProductsWrapperProps> = ({
  products,
  skeleton,
}) => {
  return (
    <div className={classes.wrapper}>
      {!skeleton
        ? products.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))
        : products.map((_, index) => <ProductCardSkeleton key={index} />)}
    </div>
  );
};

export default ProductsWrapper;
