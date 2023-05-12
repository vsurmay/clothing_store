import React, { useEffect, useRef } from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getBasketItems } from "./redux/slices/basket";

const App: React.FC = () => {
  const isFirstEnter = useRef(false);
  const dispatch = useAppDispatch();

  const basketProducts = useAppSelector((state) => state.basket.products);

  useEffect(() => {
    if (!isFirstEnter.current) {
      const basketItems = localStorage.getItem("basket");
      basketItems && dispatch(getBasketItems(JSON.parse(basketItems)));
    }
    isFirstEnter.current = true;
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketProducts));
  }, [basketProducts]);

  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
