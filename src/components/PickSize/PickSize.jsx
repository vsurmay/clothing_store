import React from "react";
import classes from "./PickSize.module.scss";
import { sizeOptions } from "../../forms/ProductForm/productFormData";

const PickSize = ({ availableSizes, activeSize, setActiveSize }) => {
  return (
    <div className={classes.sizeBox}>
      {sizeOptions.map((size) => (
        <div
          onClick={() => {
            setActiveSize(size.key);
          }}
          className={`${classes.sizeWrapper} ${
            availableSizes.includes(size.key) ? classes.availableSize : ""
          } ${activeSize === size.key ? classes.active : ""}`}
          key={size.key}
        >
          <span className={classes.sizeLabel}>{size.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PickSize;
