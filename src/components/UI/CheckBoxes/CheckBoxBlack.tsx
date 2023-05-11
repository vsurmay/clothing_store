import React from "react";
import classes from "./CheckBoxBlack.module.scss";

type CheckBoxBlackProps = {
  labeltext: string;
  setActiveCheckBox: (param: string[]) => void;
  activeCheckBox: string[];
  setProductsCount: (param: number) => void;
};

const CheckBoxBlack: React.FC<CheckBoxBlackProps> = ({
  labeltext,
  setActiveCheckBox,
  activeCheckBox,
  setProductsCount,
}) => {
  return (
    <label className={classes.label}>
      <input
        onChange={() => {
          if (activeCheckBox.includes(labeltext)) {
            setActiveCheckBox(activeCheckBox.filter((el) => el !== labeltext));
          } else {
            setActiveCheckBox([...activeCheckBox, labeltext]);
          }
          setProductsCount(8);
        }}
        type={"checkbox"}
        name={labeltext}
        className={classes.realCheckBox}
      />
      <span className={classes.fakeCheckBox}></span>
      <p className={classes.text}>{labeltext}</p>
    </label>
  );
};

export default CheckBoxBlack;
