import React, { useEffect } from "react";
import classes from "./Admin.module.scss";
import Container from "../../components/Container/Container";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { getProducts } from "../../redux/actions/productsAction";
// import { getArcticles } from "../../redux/actions/articlesAction";

const Admin = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  //   dispatch(getArcticles());
  // }, []);

  const menuItems = [
    {
      key: "all_products",
      text: "All products",
    },
    {
      key: "add_product",
      text: "Add product",
    },
    // {
    //   key: mainPaths.ALL_ARTICLES,
    //   text: "All articles",
    // },
    // {
    //   key: mainPaths.ADD_ARTICLE,
    //   text: "Add article",
    // },
  ];

  return (
    <div className={classes.admin}>
      <Container>
        <div className={classes.wrapper}>
          <ul className={classes.menu}>
            {menuItems.map((el) => (
              <li key={el.key}>
                <NavLink
                  to={el.key}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? `${classes.link}`
                      : isActive
                      ? `${classes.link} ${classes.active}`
                      : `${classes.link}`
                  }
                >
                  {el.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
