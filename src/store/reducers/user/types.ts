import { Action } from 'redux';
import { SignInRequestType, SignUpRequestType } from 'services/AuthAPI';

export interface IUser {
  username: string | null;
  password: string | null;
  email: string | null;
  articles: string[];
  likedArticles: string[];
  comments: string[];
  likedComments: string[];
  _id: string;
}

export enum LoadingState {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  INITIAL = 'INITIAL',
}

export interface UserState {
  data: IUser | null;
  error: string | null;
  isAuth: boolean;
  loadingState: LoadingState;
  isLoading: boolean;
}

// Action

export enum UserActionType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  SET_IS_AUTH = 'user/SET_IS_AUTH',
  SET_ERROR = 'user/SET_ERROR',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  SET_IS_LOADING = 'user/SET_IS_LOADING',
  SIGN_OUT = 'user/SIGN_OUT',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
  FETCH_USER_DATA = 'user/FETCH_USER_DATA',
}

export interface SetUserDataAction extends Action<UserActionType> {
  type: UserActionType.SET_USER_DATA;
  payload: UserState['data'];
}

export interface SetIsAuthAction {
  type: UserActionType.SET_IS_AUTH;
  payload: boolean;
}

export interface SetLoadingStateAction {
  type: UserActionType.SET_LOADING_STATE;
  payload: LoadingState;
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

export interface FetchUserDataAction {
  type: UserActionType.FETCH_USER_DATA;
}

export type UserActions =
  | SetUserDataAction
  | SetIsAuthAction
  | SignOutAction
  | SetErrorAction
  | FetchSignUpAction
  | FetchSignInAction
  | SetLoadingStateAction
  | SetIsLoadingAction
  | FetchUserDataAction;
