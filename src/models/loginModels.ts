
export interface ILoginResponse {
    token: string;
    refreshToken: string;
    expiresIn: number;
}

export interface ILoginRequest {
    username: string;
    password: string;
}

export interface ILogoutResponse {
    message: string;
    success: boolean;
}
