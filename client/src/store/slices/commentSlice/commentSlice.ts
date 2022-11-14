import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle, IComment } from 'models/types';
import { LoadingStatus, State } from 'models/utilsTypes';
import { fetchChangeCommentLike, fetchComments, fetchCreateComment } from './thunk';

export const commentAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});

const initialState = commentAdapter.getInitialState<State>({
    status: LoadingStatus.IDLE,
    error: null,
});

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        resetCommentsState: (state) => {
            commentAdapter.removeAll(state);
            state.status = LoadingStatus.IDLE;
            state.error = null;
        },
        setComentsStatus: (state, action: PayloadAction<LoadingStatus>) => {
            state.status = action.payload;
        },
        setSuccess: (state) => {
            state.status = LoadingStatus.SUCCESS;
            state.error = null;
        },
        setLoadingStatus: (state) => {
            state.status = LoadingStatus.LOADING;
            state.error = null;
        },
        setErrorStatus: (state, error: unknown) => {
            state.status = LoadingStatus.ERORR;
            if (typeof error === 'string') {
                state.error = error;
            } else {
                state.error = 'unknown error';
            }
        },
        setComments: (state, action: PayloadAction<IArticle[]>) => {
            commentAdapter.setAll(state, action.payload);
            state.status = LoadingStatus.SUCCESS;
            state.error = null;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchComments.fulfilled, (state, { payload }) => {
            commentAdapter.setAll(state, payload);
            commentsSlice.caseReducers.setSuccess(state);
        });
        builder.addCase(fetchComments.pending, (state) => {
            commentsSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchComments.rejected, (state, payload) => {
            commentsSlice.caseReducers.setErrorStatus(state, payload);
        });
        builder.addCase(fetchCreateComment.fulfilled, (state) => {
            commentsSlice.caseReducers.setSuccess(state);
        });
        builder.addCase(fetchCreateComment.pending, (state) => {
            commentsSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchCreateComment.rejected, (state, payload) => {
            commentsSlice.caseReducers.setErrorStatus(state, payload);
        });
        builder.addCase(fetchChangeCommentLike.fulfilled, (state, { payload }) => {
            commentAdapter.setOne(state, payload);
            commentsSlice.caseReducers.setSuccess(state);
        });
        builder.addCase(fetchChangeCommentLike.pending, (state) => {
            commentsSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchChangeCommentLike.rejected, (state, payload) => {
            commentsSlice.caseReducers.setErrorStatus(state, payload);
        });
    },
});

export default commentsSlice.reducer;

export const { setComentsStatus, resetCommentsState, setComments, setLoadingStatus } =
    commentsSlice.actions;
