export interface IUser {
  name: string;
  id: number;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface ILoginRequest {
  username: string;
  password: string;
}
