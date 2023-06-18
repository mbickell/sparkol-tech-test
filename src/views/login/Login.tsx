import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { View } from "../../components/view/View";
import { Button } from "../../components/button/Button";
import { useAuthContext } from "../../providers/auth";
import { routePaths } from "../../routing/routePaths";

interface IProps {}

export const LoginView: React.FC<IProps> = () => {
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const { login, user } = useAuthContext();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    login?.({ username, password });
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    if (user?.name) {
      navigate(routePaths.root);
    }
  }, [navigate, user]);

  return (
    <View className={styles.login}>
      <section className={styles.container}>
        <h1>Login</h1>
        <form className={styles.loginForm} onSubmit={submit}>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button className={styles.submitButton} type="submit">
            Login
          </Button>
        </form>
      </section>
    </View>
  );
};
