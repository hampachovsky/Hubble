import { SignInRequestType, SignUpRequestType } from 'services/AuthAPI';

export interface IUser {
  username: string | null;
  password: string | null;
  email: string | null;
  id: number | null;
}

export interface UserState {
  data: IUser | null;
  error: string | null;
  isAuth: boolean;
  isLoading: boolean;
}

// Action

export enum UserActionType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  SET_IS_AUTH = 'user/SET_IS_AUTH',
  SET_ERROR = 'user/SET_ERROR',
  SET_IS_LOADING = 'user/SET_IS_LOADING',
  SIGN_IN = 'user/SIGN_IN',
  SIGN_UP = 'user/SIGN_UP',
  SIGN_OUT = 'user/SIGN_OUT',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
}

export interface SetUserDataAction {
  type: UserActionType.SET_USER_DATA;
  payload: UserState['data'];
}

export interface SetIsAuthAction {
  type: UserActionType.SET_IS_AUTH;
  payload: boolean;
}
export interface SetIsLoadingAction {
  type: UserActionType.SET_IS_LOADING;
  payload: boolean;
}
export interface SetErrorAction {
  type: UserActionType.SET_ERROR;
  payload: string | null;
}
export interface SignOutAction {
  type: UserActionType.SIGN_OUT;
}

export interface FetchSignInAction {
  type: UserActionType.FETCH_SIGN_IN;
  payload: SignInRequestType;
}
export interface FetchSignUpAction {
  type: UserActionType.FETCH_SIGN_UP;
  payload: SignUpRequestType;
}

export type UserActions =
  | SetUserDataAction
  | SetIsAuthAction
  | SignOutAction
  | SetErrorAction
  | SetIsLoadingAction;
