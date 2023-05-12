import React from "react";
import classes from "./PickSize.module.scss";
import { sizeOptions } from "../../assets/sizeOptions";

type PickSizeProps = {
  availableSizes: string[];
  activeSize: string;
  setActiveSize: (param: string) => void;
};

const PickSize: React.FC<PickSizeProps> = ({
  availableSizes,
  activeSize,
  setActiveSize,
}) => {
  return (
    <div className={classes.sizeBox}>
      {sizeOptions.map((size) => (
        <div
          onClick={() => {
            if (availableSizes.includes(size.key)) {
              setActiveSize(size.key);
            }
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
