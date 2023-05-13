import React from "react";
import classes from "./ShopingCardIcon.module.scss";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const ShopingCardIcon: React.FC = () => {
  const { sumBasketProducts, products } = useAppSelector(
    (state) => state.basket
  );

  return (
    <Link to={"/basket"}>
      <div className={classes.card}>
        <div className={classes.cardIcon}>
          <ShoppingOutlined style={{ fontSize: "20px" }} />
          <span className={classes.countProducts}>{products.length}</span>
        </div>
        <div className={classes.describtion}>
          <span className={classes.text}>Shopping Cart</span>
          <span className={classes.price}>
            {sumBasketProducts.toFixed(2)} EUR
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ShopingCardIcon;
