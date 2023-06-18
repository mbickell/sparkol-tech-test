import * as React from "react";
import { ILoginRequest, IUser } from "../types/auth";
import {
  getAuthTokenStorage,
  getUserStorage,
  setAuthTokenStorage,
  setUserStorage
} from "../helpers/storage/auth";
import { loginRequest } from "../api/auth";

interface IAuthContext {
  user?: IUser;
  authToken?: string;
  login?: ({ username, password }: ILoginRequest) => Promise<void>;
  signOut?: () => void;
}

const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [user, setUser] = React.useState<IUser>({ name: "", id: 0 });
  const [authToken, setAuthToken] = React.useState<string>();

  React.useEffect(() => {
    setUser(getUserStorage());
    setAuthToken(getAuthTokenStorage());
  }, []);

  React.useEffect(() => {
    if (authToken) {
      setAuthTokenStorage(authToken);
    }

    if (user.name) {
      setUserStorage(user);
    }
  }, [user, authToken]);

  const login = async ({ username, password }: ILoginRequest) => {
    const data = await loginRequest({ username, password });
    setUser(data.user);
    setAuthToken(data.token);
  };

  const signOut = () => {
    setUser({ name: "", id: 0 });
    setUserStorage({ name: "", id: 0 });
    setAuthToken(undefined);
    setAuthTokenStorage("");
  };

  return (
    <AuthContext.Provider value={{ user, authToken, login, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
