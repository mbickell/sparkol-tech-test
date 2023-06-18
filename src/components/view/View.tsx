import * as React from "react";
import styles from "./view.module.scss";
import classNames from "classnames";

interface IProps {
  className?: string;
}

export const View: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  className
}) => {
  return <main className={classNames(className, styles.view)}>{children}</main>;
};
