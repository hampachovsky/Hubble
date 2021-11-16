import { AxiosResponse } from 'axios';
import { instance } from 'services';
import { IUser } from 'store/reducers/user/types';

export type SignInRequestType = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export interface SignInResponseType extends IUser {
  token: string;
}

export type SignUpRequestType = {
  email: string;
  password: string;
  username: string;
  passwordConfirmation: string;
};

export class AuthAPI {
  static async signIn(payload: SignInRequestType): Promise<AxiosResponse<SignInResponseType>> {
    return instance.post('/login', payload).then((response) => response.data);
  }
  static async signUp(payload: SignUpRequestType): Promise<AxiosResponse> {
    return instance.post('/users/signup', payload);
  }
  static async authMe(): Promise<AxiosResponse> {
    return instance.get('/auth/me');
  }
}
