import React from "react";
import classes from "./ShopingCardIcon.module.scss";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
// import { mainPaths } from "../../routers/publicRouter";
// import { useSelector } from "react-redux";
const ShopingCardIcon: React.FC = () => {
  // const basketProducts = useSelector((state) => state.basket.data);
  const sumBasketProducts = useAppSelector(
    (state) => state.basket.sumBasketProducts
  );
  // const sumBasket = basketProducts.reduce(
  //   (a, b) => a + b.price * b.quantity,
  //   0
  // );

  const sumBasket: number = 0;

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
