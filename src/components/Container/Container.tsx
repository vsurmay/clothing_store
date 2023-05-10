import React, { ReactNode } from "react";
import classes from "./Container.module.scss";

type ContainerProps = {
  less?: boolean;
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ less, children }) => {
  const divClass = less ? classes.containerLess : classes.container;

  return <div className={divClass}>{children}</div>;
};

export default Container;
