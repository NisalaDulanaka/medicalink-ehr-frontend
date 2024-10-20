import { ILoginResponse, ILogoutResponse, IRefreshTokenRequest } from "../models/loginModels";
import { api } from "./config";
import Cookies from "js-cookie";

export const userLogin = async (
  userName: string,
  password: string
): Promise<ILoginResponse | undefined> => {
  try {
    const response = await api.post("/auth/login", {
      userName,
      password,
    });
    return response.data.data;
  } catch (error) {
    window.alert("Error: " + error);
  }
};

export const userLogOut = async (): Promise<ILogoutResponse | undefined> => {
  try {
    const response = await api.post("/me/logout");
    if (!response.data && !response.data.data) {
      return;
    }
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    Cookies.remove("expiresIn");

    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async () => {
  //TODO: Implement
};

export const setAuthCookies = (data: {
  token?: string;
  userName?: string;
  refreshToken?: string;
  expiresIn?: number;
}) => {
  try {
    const expirationInDays = data.expiresIn? (data.expiresIn / (1000 * 60 * 60 * 24)) : 0;
    Cookies.set("token", data.token || "", { expires: expirationInDays });
    Cookies.set("refreshToken", data.refreshToken || "", { expires: 7 });
    Cookies.set("expiresIn", data.expiresIn?.toString() || "", {
      expires: expirationInDays,
    });
    Cookies.set("userName", data.userName || "", { expires: expirationInDays });
  } catch (error) {
    console.log("Auth cookie error: ", error);
    throw error;
  }
};

export const getRefreshToken = async (input: IRefreshTokenRequest): Promise<ILoginResponse | undefined> => {
  try {
    const response = await api.post("/auth/refresh", { refreshToken: input.refreshToken, userName: input.userName });
    if (response.data && response.data.data) {
      return response.data.data;
    }
  } catch (error) {
    console.log("Error refreshing token: ", error);
    throw error;
  }
}
