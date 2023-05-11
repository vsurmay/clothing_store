import { Image } from "antd";
import React, { useState } from "react";
import PickColor from "../PickColor/PickColor";
import classes from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { ClothesProduct } from "../../redux/type";
import { useAppSelector } from "../../redux/hooks";
import ProductCardSkeleton from "./ProductCardSkeleton";

type ProductCardProps = {
  data: ClothesProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const status = useAppSelector((state) => state.clothes.status);

  const [activeColor, setActiveColor] = useState(data.color[0]);

  const newPrice = (price: number, percent: number): string => {
    const result = !percent ? price : price - (price * percent) / 100;
    return result.toFixed(2) + " EUR";
  };

  return (
    <Link to={`/shop/product/${data.id}`}>
      <div className={classes.card}>
        <Image preview={false} width={344} src={data.images[activeColor]} />
        <p className={classes.variety}>{data.category}</p>
        <h4 className={classes.name}>{data.name}</h4>
        {data.discount ? (
          <h3 className={`${classes.newPrice} ${classes.price}`}>
            {newPrice(data.price, data.discount)}
            <span className={classes.oldPrice}>{newPrice(data.price, 0)}</span>
          </h3>
        ) : (
          <h3 className={classes.price}> {newPrice(data.price, 0)}</h3>
        )}

        <PickColor
          activeColor={activeColor}
          setActiveColor={setActiveColor}
          colors={data.color}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
