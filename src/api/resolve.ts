import { AxiosPromise } from "axios";

export const resolve = async <T>(promise: Promise<AxiosPromise>) => {
  try {
    const data = await promise;
    return data as T;
  } catch (e) {
    return e;
  }
};
