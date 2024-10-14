import axios from "axios";
import Cookies from "js-cookie";
import { setAuthCookies } from "./authenticationServices";

const baseURL = import.meta.env.BASE_URL;

export const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

let isRefreshing = false;
let failedRequests: {resolve: (value: unknown) => void, reject: (reason?: unknown) => void}[] = [];

const processQueues = (token: string | null, error: unknown) => {
    failedRequests.forEach((promise) => {
        if (error) {
            promise.reject(error);
        } else {
            promise.resolve(token);
        }
    });

    failedRequests = [];
}

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            // Add requests to the queue while the refresh token is retrieved
            if(isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedRequests.push({resolve, reject});
                })
                .then((token) => {
                    originalRequest.headers["Authorization"] = `Bearer ${token}`;
                    return axios(originalRequest);
                })
                .catch((error) => Promise.reject(error));
            }

            originalRequest._retry = true;
            isRefreshing = true;
            try {
                const response = await axios.post(`${baseURL}/refresh`,{
                    refreshToken: Cookies.get("refreshToken"),
                });
                const data = response.data;
                const token = data.data.token;
                setAuthCookies(data.data);

                processQueues(token, null);
                originalRequest.headers["Authorization"] = `Bearer ${token}`;
                return axios(originalRequest);
            } catch (error) {
                console.log("REFRESH TOKEN ERROR: ",error);
                processQueues(null, error);
                return Promise.reject(error);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
)
