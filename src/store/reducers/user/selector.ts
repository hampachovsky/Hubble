import { RootState } from 'store';
import { LoadingState } from './types';

export const selectIsError = (state: RootState) =>
  state.userReducer.loadingState === LoadingState.ERROR;

export const selectIsLoading = (state: RootState) =>
  state.userReducer.loadingState === LoadingState.LOADING;

export const selectIsSuccess = (state: RootState) =>
  state.userReducer.loadingState === LoadingState.SUCCESS;
