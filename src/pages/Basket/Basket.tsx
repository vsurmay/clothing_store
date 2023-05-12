import React from "react";
import classes from "./Basket.module.scss";
import Container from "../../components/Container/Container";
import TableBasket from "../../components/TableBasket/TableBasket";
import { useAppSelector } from "../../redux/hooks";

const Basket: React.FC = () => {
  const basketProducts = useAppSelector((state) => state.basket.products);
  return (
    <Container>
      <div className={classes.basket}>
        <h2 className={classes.title}>Shoping Cart</h2>
        <div className={classes.wrapper}>
          <TableBasket products={basketProducts} />
          <div className={classes.form}></div>
        </div>
      </div>
    </Container>
  );
};

export default Basket;
