import { AxiosPromise } from "axios";

export const resolve = async <T>(
  promise: Promise<AxiosPromise>
): Promise<T> => {
  try {
    const data = await promise;
    return data as T;
  } catch (e) {
    const error = e;
    return error as T;
  }
};
