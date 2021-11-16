import { call, takeLatest, put } from 'redux-saga/effects';
import { AuthAPI, SignInResponseType } from 'services/AuthAPI';
import { setError, setIsAuth, setIsLoading, setLoadingState, setUserData } from './actionCreators';
import { FetchSignInAction, FetchSignUpAction, LoadingState, UserActionType } from './types';

export function* SignInRequest({ payload }: FetchSignInAction) {
  try {
    const data: SignInResponseType = yield call(AuthAPI.signIn, payload);
    window.localStorage.setItem('token', data.token);
    yield put(setUserData(data));
    yield put(setIsAuth(true));
  } catch (error: any) {
    yield put(setError(error.response.data.error));
  }
}

export function* SignUpRequest({ payload }: FetchSignUpAction) {
  try {
    yield call(AuthAPI.signUp, payload);
    yield put(setLoadingState(LoadingState.SUCCESS));
  } catch (error: any) {
    yield put(setError(error.response.data.error));
  }
}

export function* FetchUserData() {
  yield put(setIsLoading(true));
  try {
    const data: SignInResponseType = yield call(AuthAPI.authMe);
    yield put(setUserData(data));
    yield put(setIsAuth(true));
  } catch (error: any) {
    yield put(setLoadingState(LoadingState.INITIAL));
  }
  yield put(setIsLoading(false));
}

export function* userSagaWatcher() {
  yield takeLatest(UserActionType.FETCH_SIGN_IN, SignInRequest);
  yield takeLatest(UserActionType.FETCH_SIGN_UP, SignUpRequest);
  yield takeLatest(UserActionType.FETCH_USER_DATA, FetchUserData);
}
