import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
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
