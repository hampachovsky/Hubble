import { call, takeLatest, put } from 'redux-saga/effects';
import { AuthAPI, SignInResponseType } from 'services/AuthAPI';
import { setError, setIsAuth, setIsLoading, setUserData } from './actionCreators';
import { FetchSignInAction, FetchSignUpAction, UserActionType } from './types';

export function* SignInRequest({ payload }: FetchSignInAction) {
  yield put(setIsLoading(true));
  try {
    yield put(setError(null));
    const data: SignInResponseType = yield call(AuthAPI.signIn, payload);
    window.localStorage.setItem('token', data.token);
    yield put(setUserData(data));
    yield put(setIsAuth(true));
  } catch (error: any) {
    yield put(setError(error.response.data.error));
  }
  yield put(setIsLoading(false));
}

export function* SignUpRequest({ payload }: FetchSignUpAction) {
  yield put(setIsLoading(true));
  try {
    yield put(setError(null));
    yield call(AuthAPI.signUp, payload);
  } catch (error: any) {
    yield put(setError(error.response.data.error));
  }
  yield put(setIsLoading(false));
}

export function* userSagaWatcher() {
  yield takeLatest(UserActionType.FETCH_SIGN_IN, SignInRequest);
  yield takeLatest(UserActionType.FETCH_SIGN_UP, SignUpRequest);
}
