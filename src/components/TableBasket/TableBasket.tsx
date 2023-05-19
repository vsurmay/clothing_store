import React from "react";
import { Empty, Image, InputNumber } from "antd";
import classes from "./TableBasket.module.scss";
import { Link } from "react-router-dom";
import GrayButton from "../UI/Buttons/GrayButton";
import deleteIcon from "../../assets/img/delete-basket.svg";
import heardIcon from "../../assets/img/heard-basket.svg";
import { BasketItem } from "../../redux/type";
import { useAppDispatch } from "../../redux/hooks";
import {
  deleteAllBasketItems,
  deleteBasketItem,
  updateBasketProducts,
} from "../../redux/slices/basket";
import TableBasketItem from "../TableBasketItem/TableBasketItem";

type TableBasketProps = {
  products: BasketItem[];
};

const TableBasket: React.FC<TableBasketProps> = ({ products }) => {
  const dispatch = useAppDispatch();

  console.log(products[0]);

  return (
    <div className={classes.tableBasket}>
      <ul className={classes.tableTop}>
        <li className={`${classes.tableTopItem} ${classes.product}`}>
          Product
        </li>
        <li className={`${classes.tableTopItem} ${classes.price}`}>Price</li>
        <li className={`${classes.tableTopItem} ${classes.size}`}>Size</li>
        <li className={`${classes.tableTopItem} ${classes.quantity}`}>
          Quantity
        </li>
        <li className={`${classes.tableTopItem} ${classes.total}`}>Total</li>
        <li className={`${classes.tableTopItem} ${classes.activity}`}>
          Activity
        </li>
      </ul>
      <div className={classes.wrapper}>
        {products.length === 0 ? (
          <Empty description={"Your basket is empty"} />
        ) : (
          products.map((product) => (
            <TableBasketItem key={product.uniqueCode} item={product} />
          ))
        )}
      </div>
      <div className={classes.btns}>
        <Link to={"/shop"}>
          <GrayButton>Continue Shop</GrayButton>
        </Link>

        <GrayButton
          onClick={() => {
            dispatch(deleteAllBasketItems());
          }}
        >
          Delete All
        </GrayButton>
      </div>
    </div>
  );
};

export default TableBasket;
