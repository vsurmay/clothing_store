import React from "react";
import Container from "../Container/Container";
import classes from "./Footer.module.scss";

const Footer = () => {
  const footerTopListData = [
    "Duties and Taxes Guaranteed",
    "Free Express Shipping",
    "Customer Love",
    "Easy Returns",
    "Secure Payment",
  ];

  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <ul className={classes.footerTopList}>
          {footerTopListData.map((element) => (
            <li className={classes.footerTopItem} key={element}>
              {element}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.footerMain}>Footer</div>
    </footer>
  );
};

export default Footer;
