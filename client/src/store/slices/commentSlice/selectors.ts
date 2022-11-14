import { LoadingStatus } from 'models/utilsTypes';
import { RootState } from 'store/store';
import { commentAdapter } from './commentSlice';

export const {
    selectAll: selectAllComments,
    selectById: selectCommentById,
    selectIds: selectCommentsIds,
} = commentAdapter.getSelectors<RootState>((state) => state.commentsReducer);

export const selectCommentsStatus = (state: RootState) => state.commentsReducer.status;
export const selectCommentsIsLoading = (state: RootState) =>
    state.commentsReducer.status === LoadingStatus.LOADING;
export const selectCommentsStatusSuccess = (state: RootState) =>
    state.commentsReducer.status === LoadingStatus.SUCCESS;
