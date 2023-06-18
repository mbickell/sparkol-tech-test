import * as React from "react";
import styles from "./home.module.scss";
import { View } from "../../components/view/View";
import { useAuthContext } from "../../providers/auth";

interface IProps {}

export const HomeView: React.FC<IProps> = () => {
  const { user } = useAuthContext();
  return (
    <View className={styles.home}>
      <h2>Sparkol Tech Test</h2>
      <p>Welcome {user?.name}</p>
    </View>
  );
};
