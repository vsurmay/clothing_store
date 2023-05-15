import React from "react";
import Container from "../Container/Container";
import classes from "./Header.module.scss";
import { Image } from "antd";
import logo from "../../assets/img/logo.svg";
import Menu from "../Menu/Menu";
import { HeartOutlined } from "@ant-design/icons";
import ShopingCardIcon from "../ShopingCardIcon/ShopingCardIcon";
import { Link } from "react-router-dom";

export type MenuItem = {
  text: string;
  key: string;
};

const Header = () => {
  const menuItems: MenuItem[] = [
    {
      text: "home",
      key: "/",
    },
    {
      text: "shop",
      key: "/shop",
    },
    {
      text: "blog",
      key: "/blog/article/mainArticle",
    },
    {
      text: "sale",
      key: "/sale",
    },
    {
      text: "contact us",
      key: "/contact_us",
    },
  ];

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.wrapper}>
          <Link to={"/"}>
            <Image preview={false} src={logo} />
          </Link>
          <Menu menuItems={menuItems} />
          <div className={classes.describtion}>
            <div className={classes.acount}>
              <a className={classes.link}>SIGN IN</a>
              <a className={classes.link}>CREATE AN ACCOUNT</a>
            </div>
            <HeartOutlined style={{ fontSize: "20px" }} />
            <ShopingCardIcon />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
