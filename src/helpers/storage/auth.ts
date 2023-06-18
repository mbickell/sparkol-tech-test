import { IUser } from "../../types/auth";
import { getStorageValue, setStorageValue } from "../localStorage";

export const setUserStorage = (value: IUser) => {
  setStorageValue("user", value);
};

export const getUserStorage = () => {
  return getStorageValue<IUser>("user");
};

export const setAuthTokenStorage = (value: string) => {
  setStorageValue("authToken", value);
};

export const getAuthTokenStorage = () => {
  return getStorageValue<string>("authToken");
};
