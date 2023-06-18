import * as React from "react";
import styles from "./home.module.scss";
import { View } from "../../components/view/View";
import { useAuthContext } from "../../providers/auth";
import { Button } from "../../components/button/Button";

interface IProps {}

export const HomeView: React.FC<IProps> = () => {
  const { user, signOut } = useAuthContext();
  return (
    <View className={styles.home}>
      <h1>Sparkol Tech Test</h1>
      <p>Welcome {user?.name}</p>
      <Button variant="secondary" onClick={signOut}>
        Sign out
      </Button>
    </View>
  );
};
