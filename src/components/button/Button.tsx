import * as React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<React.PropsWithChildren<IProps>> = ({
  className,
  variant,
  children,
  ...rest
}) => {
  return (
    <button
      data-variant={variant || "primary"}
      className={classNames(styles.button, className)}
      {...rest}
    >
      &gt; {children}
    </button>
  );
};
