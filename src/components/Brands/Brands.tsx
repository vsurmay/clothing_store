import React from "react";
import Container from "../Container/Container";
import classes from "./Brands.module.scss";
import chanel from "../../assets/img/brands/chanel.svg";
import burberry from "../../assets/img/brands/burberry.svg";
import dior from "../../assets/img/brands/dior.svg";
import fendi from "../../assets/img/brands/fendi.svg";
import versace from "../../assets/img/brands/versace.svg";
import gucci from "../../assets/img/brands/gucci.svg";
import armani from "../../assets/img/brands/armani.svg";

type brand = {
  key: string;
  value: string;
};

const Brands: React.FC = () => {
  const brands: brand[] = [
    {
      key: "chanel",
      value: chanel,
    },
    {
      key: "burberry",
      value: burberry,
    },
    {
      key: "dior",
      value: dior,
    },
    {
      key: "fendi",
      value: fendi,
    },
    {
      key: "versace",
      value: versace,
    },
    {
      key: "gucci",
      value: gucci,
    },
    {
      key: "armani",
      value: armani,
    },
  ];
  return (
    <div className={classes.brands}>
      <Container>
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>chose your brand</h1>
        </div>

        <div className={classes.wrapper}>
          {brands.map((brand) => (
            <div key={brand.key} className={classes.item}>
              <img src={brand.value} alt={brand.key} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Brands;
