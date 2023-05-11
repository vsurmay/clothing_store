import React from "react";
import classes from "./CheckBoxBlack.module.scss";

type CheckBoxBlackProps = {
  labeltext: string;
  setActiveCheckBox: (params: string[]) => void;
  activeCheckBox: string[];
};

const CheckBoxBlack: React.FC<CheckBoxBlackProps> = ({
  labeltext,
  setActiveCheckBox,
  activeCheckBox,
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
