import { SignInRequestType, SignUpRequestType } from 'services/AuthAPI';
import {
  FetchSignInAction,
  FetchSignUpAction,
  FetchUserDataAction,
  LoadingState,
  SetErrorAction,
  SetIsAuthAction,
  SetIsLoadingAction,
  SetLoadingStateAction,
  SetUserDataAction,
  SignOutAction,
  UserActionType,
  UserState,
} from './types';

export const setUserData = (payload: UserState['data']): SetUserDataAction => ({
  type: UserActionType.SET_USER_DATA,
  payload,
});

export const setIsAuth = (payload: boolean): SetIsAuthAction => ({
  type: UserActionType.SET_IS_AUTH,
  payload,
});
export const setLoadingState = (payload: LoadingState): SetLoadingStateAction => ({
  type: UserActionType.SET_LOADING_STATE,
  payload,
});

export const setIsLoading = (payload: boolean): SetIsLoadingAction => ({
  type: UserActionType.SET_IS_LOADING,
  payload,
});

export const setError = (payload: string | null): SetErrorAction => ({
  type: UserActionType.SET_ERROR,
  payload,
});

export const fetchSignIn = (payload: SignInRequestType): FetchSignInAction => ({
  type: UserActionType.FETCH_SIGN_IN,
  payload,
});

export const fetchSignUp = (payload: SignUpRequestType): FetchSignUpAction => ({
  type: UserActionType.FETCH_SIGN_UP,
  payload,
});

export const fetchUserData = (): FetchUserDataAction => ({
  type: UserActionType.FETCH_USER_DATA,
});

export const signOut = (): SignOutAction => ({
  type: UserActionType.SIGN_OUT,
});
