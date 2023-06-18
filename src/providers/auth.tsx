import * as React from "react";
import { ILoginRequest, ILoginResponse, IUser } from "../types/auth";
import {
  getAuthTokenStorage,
  getUserStorage,
  setAuthTokenStorage,
  setUserStorage
} from "../helpers/storage/auth";
import { loginRequest } from "../api/auth";
import { AxiosError } from "axios";

interface IAuthContext {
  user?: IUser;
  authToken?: string;
  login?: ({ username, password }: ILoginRequest) => Promise<void>;
  signOut?: () => void;
  error?: AxiosError;
}

export const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [user, setUser] = React.useState<IUser>({ name: "", id: 0 });
  const [authToken, setAuthToken] = React.useState<string>();
  const [error, setError] = React.useState<AxiosError>();

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
    setError(undefined);
    try {
      const data = (await loginRequest({
        username,
        password
      })) as ILoginResponse;
      setUser(data.user);
      setAuthToken(data.token);
    } catch (e) {
      setError(e as AxiosError);
    }
  };

  const signOut = () => {
    setUser({ name: "", id: 0 });
    setUserStorage({ name: "", id: 0 });
    setAuthToken(undefined);
    setAuthTokenStorage("");
  };

  return (
    <AuthContext.Provider value={{ user, authToken, login, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
