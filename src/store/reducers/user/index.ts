import produce, { Draft } from 'immer';
import { UserActions, UserActionType, UserState } from './types';

const initialState: UserState = {
  data: null,
  isAuth: false,
  error: null,
  isLoading: false,
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
  switch (action.type) {
    case UserActionType.SET_USER_DATA: {
      draft.data = action.payload;
      break;
    }
    case UserActionType.SET_IS_AUTH: {
      draft.isAuth = action.payload;
      break;
    }
    case UserActionType.SIGN_OUT: {
      draft.data = null;
      draft.isAuth = false;
      break;
    }
    case UserActionType.SET_IS_LOADING: {
      draft.isLoading = action.payload;
      break;
    }
    case UserActionType.SET_ERROR: {
      draft.error = action.payload;
      break;
    }
  }
}, initialState);
