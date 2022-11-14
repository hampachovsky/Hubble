import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle } from 'models/types';
import { LoadingStatus, State } from 'models/utilsTypes';
import { fetchArticles } from './thunk';

export const articleAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

const initialState = articleAdapter.getInitialState<State>({
    status: LoadingStatus.IDLE,
    error: null,
});

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        resetArticlesState: (state) => {
            articleAdapter.removeAll(state);
            state.status = LoadingStatus.IDLE;
            state.error = null;
        },
        setArticlesStatus: (state, action: PayloadAction<LoadingStatus>) => {
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
        setArticles: (state, action: PayloadAction<IArticle[]>) => {
            articleAdapter.setAll(state, action.payload);
            state.status = LoadingStatus.SUCCESS;
            state.error = null;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
            articleAdapter.setAll(state, payload);
            articlesSlice.caseReducers.setSuccess(state);
        });
        builder.addCase(fetchArticles.pending, (state) => {
            articlesSlice.caseReducers.setLoadingStatus(state);
        });
        builder.addCase(fetchArticles.rejected, (state, payload) => {
            articlesSlice.caseReducers.setErrorStatus(state, payload);
        });
    },
});

export default articlesSlice.reducer;

export const { setArticlesStatus, resetArticlesState, setArticles, setLoadingStatus } =
    articlesSlice.actions;
