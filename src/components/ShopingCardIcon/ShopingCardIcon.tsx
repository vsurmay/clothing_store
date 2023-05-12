import React from "react";
import classes from "./ShopingCardIcon.module.scss";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const ShopingCardIcon: React.FC = () => {
  const sumBasketProducts = useAppSelector(
    (state) => state.basket.sumBasketProducts
  );

  return (
    <Link to={"/basket"}>
      <div className={classes.card}>
        <ShoppingOutlined style={{ fontSize: "20px" }} />
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
