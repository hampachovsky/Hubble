import { AxiosError } from 'axios';

export enum LoadingStatus {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERORR = 'ERROR',
}

export interface State {
    status: LoadingStatus;
    error: string | null;
}

export type LocationStateType = {
    from: { pathname: string; search: string };
};

export interface SignInPayload {
    username: string;
    password: string;
    rememberMe: boolean;
}

export interface SignUpPayload {
    username: string;
    password: string;
    confirmPassword: string;
}

export type RequestErrorType = AxiosError<{ error: string }>;
