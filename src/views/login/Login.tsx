import * as React from "react";
import styles from "./login.module.scss";
import { View } from "../../components/View/View";
import { Button } from "../../components/button/Button";

interface IProps {}

export const LoginView: React.FC<IProps> = () => {
  const login = (e: React.FormEvent) => {
    e.preventDefault();
    alert("hello");
    return;
  };

  return (
    <View className={styles.login}>
      <section className={styles.container}>
        <h1>Login</h1>
        <form className={styles.loginForm} onSubmit={login}>
          <label htmlFor="username">
            Username:
            <input type="text" id="username" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" />
          </label>
          <Button className={styles.submitButton} type="submit">
            Login
          </Button>
        </form>
      </section>
    </View>
  );
};
