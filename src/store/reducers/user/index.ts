import produce, { Draft } from 'immer';
import { LoadingState, UserActions, UserActionType, UserState } from './types';

const initialState: UserState = {
  data: null,
  isAuth: false,
  error: null,
  loadingState: LoadingState.INITIAL,
  isLoading: false,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
  switch (action.type) {
    case UserActionType.SET_USER_DATA: {
      draft.data = action.payload;
      draft.loadingState = LoadingState.SUCCESS;
      break;
    }
    case UserActionType.SET_IS_AUTH: {
      draft.isAuth = action.payload;
      break;
    }
    case UserActionType.SIGN_OUT: {
      draft.data = null;
      draft.isAuth = false;
      draft.loadingState = LoadingState.INITIAL;
      break;
    }
    case UserActionType.FETCH_SIGN_IN:
    case UserActionType.FETCH_SIGN_UP: {
      draft.data = null;
      draft.error = null;
      draft.isAuth = false;
      draft.loadingState = LoadingState.LOADING;
      break;
    }
    case UserActionType.SET_LOADING_STATE: {
      draft.loadingState = action.payload;
      break;
    }
    case UserActionType.SET_ERROR: {
      draft.loadingState = LoadingState.ERROR;
      draft.error = action.payload;
      break;
    }
    case UserActionType.SET_IS_LOADING: {
      draft.isLoading = action.payload;
      break;
    }
  }
}, initialState);
