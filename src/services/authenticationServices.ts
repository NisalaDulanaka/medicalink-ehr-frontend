import { ILoginResponse, ILogoutResponse } from "../models/loginModels";
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
