import { LoadingStatus } from 'models/utilsTypes';
import { RootState } from 'store/store';
import { articleAdapter } from './articlesSlice';

export const {
    selectAll: selectAllArticles,
    selectById: selectArticleById,
    selectIds: selectArticlesIds,
} = articleAdapter.getSelectors<RootState>((state) => state.articlesReducer);

export const selectArticlesStatus = (state: RootState) => state.articlesReducer.status;
export const selectArticlesIsLoading = (state: RootState) =>
    state.articlesReducer.status === LoadingStatus.LOADING;
export const selectArticlesStatusSuccess = (state: RootState) =>
    state.articlesReducer.status === LoadingStatus.SUCCESS;
