import axios from "axios";
import { resolve } from "./resolve";
import { ILoginRequest, ILoginResponse } from "../types/auth";

export const loginRequest = async (body: ILoginRequest) => {
  const request = await axios.post("http://localhost:3333/login", body);
  const result = await resolve<ILoginResponse>(await request.data);
  return result;
};

export const verifyTokenRequest = async (jwt: string) => {
  const request = await axios.get("http://localhost:3333/verifyToken", {
    headers: { Authorization: "Bearer " + jwt }
  });
  const result = await resolve(await request.data);
  return result;
};
