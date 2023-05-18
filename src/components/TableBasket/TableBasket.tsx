import React from "react";
import { Image, InputNumber } from "antd";
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
    // <div className={classes.tableBasket}>
    //   <div className={classes.wrapper}>
    //     <div className={`${classes.product} ${classes.item}`}>
    //       <h4 className={classes.title}>product</h4>
    //       <ul className={classes.list}>
    //         {products.map((product) => (
    //           <li
    //             className={`${classes.productWrapper} ${classes.listItem}`}
    //             key={product.uniqueCode}
    //           >
    //             <Image src={product.image} width={80} />
    //             <div className={classes.productContent}>
    //               <h3 className={classes.productTitle}>{product.name}</h3>
    //               <div className={classes.colorWrapper}>
    //                 <div
    //                   style={{ background: product.color }}
    //                   className={classes.colorItem}
    //                 ></div>
    //               </div>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className={`${classes.price} ${classes.item}`}>
    //       <h4 className={classes.title}>price</h4>
    //       <ul className={classes.list}>
    //         {products.map((product) => (
    //           <li
    //             key={product.uniqueCode}
    //             className={classes.listItem}
    //           >{`${product.price.toFixed(2)} EUR`}</li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className={`${classes.size} ${classes.item}`}>
    //       <h4 className={classes.title}>size</h4>
    //       <ul className={classes.list}>
    //         {products.map((product) => (
    //           <li key={product.uniqueCode} className={classes.listItem}>
    //             {product.size}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className={`${classes.quantity} ${classes.item}`}>
    //       <h4 className={classes.title}>quantity</h4>
    //       <ul className={classes.list}>
    //         {products.map((product) => (
    //           <li className={classes.listItem} key={product.uniqueCode}>
    //             <InputNumber
    //               onChange={(quantity) => {
    //                 quantity &&
    //                   dispatch(updateBasketProducts({ ...product, quantity }));
    //               }}
    //               defaultValue={product.quantity}
    //               min={1}
    //             />
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className={`${classes.total} ${classes.item}`}>
    //       <h4 className={classes.title}>total</h4>
    //       <ul className={classes.list}>
    //         {products.map((product) => (
    //           <li className={classes.listItem} key={product.uniqueCode}>
    //             {(product.quantity * product.price).toFixed(2) + " EUR"}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className={`${classes.action} ${classes.item}`}>
    //       <ul className={`${classes.list} ${classes.listActives}`}>
    //         {products.map((product) => (
    //           <li
    //             style={{ gap: "10px" }}
    //             className={classes.listItem}
    //             key={product.uniqueCode}
    //           >
    //             <button>
    //               <img src={heardIcon} />
    //             </button>
    //             <button
    //               onClick={() => {
    //                 dispatch(deleteBasketItem(product.uniqueCode));
    //               }}
    //             >
    //               <img src={deleteIcon} />
    //             </button>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    //   <div className={classes.btns}>
    //     <Link to={"/shop"}>
    //       <GrayButton>Continue Shop</GrayButton>
    //     </Link>

    //     <GrayButton
    //       onClick={() => {
    //         dispatch(deleteAllBasketItems());
    //       }}
    //     >
    //       Delete All
    //     </GrayButton>
    //   </div>
    // </div>
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
        {products.map((product) => (
          <TableBasketItem key={product.uniqueCode} item={product} />
        ))}
      </div>
    </div>
  );
};

export default TableBasket;
