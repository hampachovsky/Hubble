import { instance } from 'api';
import { AuthApiRoutes } from 'constants/routes';
import { IUser } from 'models/types';
import { SignInPayload, SignUpPayload } from 'models/utilsTypes';

export interface SignInResponse {
    token: string;
    user: IUser;
}

export const authAPI = {
    async login(payload: SignInPayload): Promise<SignInResponse> {
        const response = await instance.post(AuthApiRoutes.LOGIN, payload);
        return response.data;
    },
    async register(payload: SignUpPayload): Promise<string> {
        const response = await instance.post(AuthApiRoutes.REGISTER, payload);
        return response.data;
    },
    async authMe(): Promise<IUser> {
        const response = await instance.get(AuthApiRoutes.AUTH_ME);
        return response.data;
    },
};
