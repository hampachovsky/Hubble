import { LoadingStatus } from 'models/utilsTypes';
import { RootState } from 'store/store';

export const selectCategoryStatus = (state: RootState) => state.categoryReducer.status;
export const selectCategoryIsLoading = (state: RootState) =>
    state.categoryReducer.status === LoadingStatus.LOADING;
export const selectCategoryStatusSuccess = (state: RootState) =>
    state.categoryReducer.status === LoadingStatus.SUCCESS;
