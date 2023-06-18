import { Keys } from "../types/storage";

export const getStorageValue = <T>(key: Keys): T => {
  const itemJSON = localStorage.getItem(key);
  return itemJSON ? JSON.parse(itemJSON) : "";
};

export const setStorageValue = (key: Keys, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearStorageValue = (key: Keys) => {
  localStorage.removeItem(key);
};
