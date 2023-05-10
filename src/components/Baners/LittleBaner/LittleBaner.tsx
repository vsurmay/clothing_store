import React from "react";
import OutLineButton from "../../UI/Buttons/OutLineButton";
import classes from "./LittleBaner.module.scss";

type BanerProps = {
  title: string;
  subtitle: string;
  img: string;
  background: string;
  reverse?: boolean;
};

const Baner: React.FC<BanerProps> = ({
  title,
  subtitle,
  img,
  background,
  reverse,
}) => {
  return (
    <div
      style={{ background: background }}
      className={`${classes.banner} ${reverse ? classes.bannerReverse : null}`}
    >
      <img src={img} alt="baner" />
      <div className={classes.describtion}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.subtitle}>{subtitle}</p>
        <OutLineButton>see offers</OutLineButton>
      </div>
    </div>
  );
};

export default Baner;
