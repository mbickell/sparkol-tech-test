import axios from "axios";
import { resolve } from "./resolve";
import { ILoginRequest, ILoginResponse } from "../types/auth";

export const loginRequest = async (body: ILoginRequest) => {
  const request = await axios.post(
    process.env.REACT_APP_API_URL + "/login",
    body
  );
  try {
    return await resolve<ILoginResponse>(await request.data);
  } catch (e) {
    return e;
  }
};

export const verifyTokenRequest = async (jwt: string) => {
  const request = await axios.get(
    process.env.REACT_APP_API_URL + "/verifyToken",
    {
      headers: { Authorization: "Bearer " + jwt }
    }
  );
  try {
    return await resolve(await request.data);
  } catch (e) {
    return e;
  }
};
