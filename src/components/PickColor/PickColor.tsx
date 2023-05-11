import React from "react";
import classes from "./PickColor.module.scss";

type PickColorProps = {
  setActiveColor: any;
  activeColor: string;
  colors: string[];
};

const PickColor: React.FC<PickColorProps> = ({
  setActiveColor,
  activeColor,
  colors,
}) => {
  return (
    <div className={classes.box}>
      {colors.map((color) => (
        <div
          className={`${classes.wrapperColor} ${
            activeColor === color ? classes.active : null
          }`}
          key={color}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setActiveColor(color);
            }}
            className={classes.color}
            style={{ background: color }}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default PickColor;
