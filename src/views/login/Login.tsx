import * as React from "react";
import styles from "./login.module.scss";
import { View } from "../../components/View/View";
import { Button } from "../../components/button/Button";
import { login, verifyToken } from "../../api/auth";

interface IProps {}

export const LoginView: React.FC<IProps> = () => {
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await login({ username: "jeff1967", password: "hotdog" });
    console.log(data);
    const token = await verifyToken(data.token);
    console.log(token);

    return;
  };

  return (
    <View className={styles.login}>
      <section className={styles.container}>
        <h1>Login</h1>
        <form className={styles.loginForm} onSubmit={submit}>
          <label htmlFor="username">
            Username:
            <input type="text" id="username" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" />
          </label>
          <Button className={styles.submitButton} type="submit">
            Login
          </Button>
        </form>
      </section>
    </View>
  );
};
