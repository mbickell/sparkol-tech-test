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
}

const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [user, setUser] = React.useState<IUser>();
  const [authToken, setAuthToken] = React.useState<string>();

  React.useEffect(() => {
    setUser(getUserStorage());
    setAuthToken(getAuthTokenStorage());
  }, []);

  React.useEffect(() => {
    if (authToken) {
      setAuthTokenStorage(authToken);
    }

    if (user) {
      setUserStorage(user);
    }
  }, [user, authToken]);

  const login = async ({ username, password }: ILoginRequest) => {
    const data = await loginRequest({ username, password });
    setUser(data.user);
    setAuthToken(data.token);
  };

  return (
    <AuthContext.Provider value={{ user, authToken, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
