import * as React from "react";
import styles from "./login.module.scss";

interface IProps {}

export const LoginView: React.FC<IProps> = () => {
  return <div className={styles.login}>LoginView</div>;
};
