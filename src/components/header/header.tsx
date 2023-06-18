import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { Button } from "../button/Button";
import { useAuthContext } from "../../providers/auth";
import { routePaths } from "../../routing/routePaths";

interface IProps {}

export const Header: React.FC<IProps> = () => {
  const { signOut } = useAuthContext();

  return (
    <header className={styles.header}>
      <h1>
        <Link to={routePaths.root}>Sparkol</Link>
      </h1>
      <Button onClick={signOut}>Sign out</Button>
    </header>
  );
};
