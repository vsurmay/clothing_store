import React from "react";
import Container from "../../Container/Container";
import OutLineButton from "../../UI/Buttons/OutLineButton";
import classes from "./LargeBaner.module.scss";
import { Link } from "react-router-dom";

type LargeBanerProps = {
  img: string;
  background?: string;
  title: string;
  subtitle: string;
  reverse?: boolean;
};

const LargeBaner: React.FC<LargeBanerProps> = ({
  img,
  background,
  title,
  subtitle,
  reverse,
}) => {
  return (
    <div
      style={{ background: `${background ? background : null}` }}
      className={classes.baner}
    >
      <Container>
        <div
          className={`${classes.bannerWrapper} ${
            reverse ? classes.bannerWrapperReverse : null
          }`}
        >
          <div className={classes.bannerDescribtion}>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.subtitle}>{subtitle}</p>
            <Link to={"/shop"}>
              <OutLineButton>Shop now</OutLineButton>
            </Link>
          </div>
          <img src={img} alt={"baner"} />
        </div>
      </Container>
    </div>
  );
};

export default LargeBaner;
